import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { object, string, number, date, InferType, boolean } from 'yup';

import { TypeImageService } from '../services/TypeImageService';

class TypeImageController {
  async create(request: Request, response: Response): Promise<Response> {
    const validateSchema = object({
      name: string().required(),
      pageId: string().nullable(),
    });

    validateSchema.validateSync(request.body);

    const service = container.resolve(TypeImageService);
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

    const service = container.resolve(TypeImageService);
    await service.updateName(id, name);
    return response.sendStatus(200);
  }

  async list(request: Request, response: Response): Promise<Response> {
    const { pageId } = request.params;

    const service = container.resolve(TypeImageService);
    const result = await service.list(pageId);
    return response.json(result);
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const service = container.resolve(TypeImageService);
    const result = await service.show(id);
    return response.json(result);
  }

  async updateSituation(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;
    const { situation } = request.body;

    const service = container.resolve(TypeImageService);
    await service.updateSituation(id, situation);
    return response.sendStatus(200);
  }
}

export { TypeImageController };
