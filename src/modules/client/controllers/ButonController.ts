import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { object, string, number, date, InferType, boolean } from 'yup';

import { ButonService } from '../services/ButonService';

class ButonController {
  async create(request: Request, response: Response): Promise<Response> {
    const validateSchema = object({
      description: string().nullable(),
      companyPageId: string().nullable(),
      typeButonId: string().nullable(),
    });

    validateSchema.validateSync(request.body);

    const service = container.resolve(ButonService);
    const result = await service.create(request.body);
    return response.status(201).json(result);
  }

  async updateDescription(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;
    const { description } = request.body;

    const validateSchema = object({
      description: string().required(),
    });

    validateSchema.validateSync({ description });

    const service = container.resolve(ButonService);
    await service.updateDescription(id, description);
    return response.sendStatus(200);
  }

  async list(request: Request, response: Response): Promise<Response> {
    const { companyPageId } = request.params;

    const service = container.resolve(ButonService);
    const result = await service.list(companyPageId);
    return response.json(result);
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const service = container.resolve(ButonService);
    const result = await service.show(id);
    return response.json(result);
  }

  async updateSituation(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;
    const { situation } = request.body;

    const service = container.resolve(ButonService);
    await service.updateSituation(id, situation);
    return response.sendStatus(200);
  }
}

export { ButonController };
