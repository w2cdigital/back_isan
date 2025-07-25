import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { object, string, number, date, InferType, boolean } from 'yup';

import { TypeButonService } from '../services/TypeButonService';

class TypeButonController {
  async create(request: Request, response: Response): Promise<Response> {
    const validateSchema = object({
      name: string().required(),
    });

    validateSchema.validateSync(request.body);

    const service = container.resolve(TypeButonService);
    const result = await service.create(request.body);
    return response.status(201).json(result);
  }

  async updateName(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name } = request.body;

    const validateSchema = object({
      name: string().required(),
    });

    validateSchema.validateSync({ name });

    const service = container.resolve(TypeButonService);
    await service.updateName(id, name);
    return response.sendStatus(200);
  }

  async list(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(TypeButonService);
    const result = await service.list();
    return response.json(result);
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const service = container.resolve(TypeButonService);
    const result = await service.show(id);
    return response.json(result);
  }

  async updateSituation(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;
    const { situation } = request.body;

    const service = container.resolve(TypeButonService);
    await service.updateSituation(id, situation);
    return response.sendStatus(200);
  }
}

export { TypeButonController };
