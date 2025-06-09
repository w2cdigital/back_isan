import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { object, string, number, date, InferType, boolean } from 'yup';

import { TextService } from '../services/TextService';

class TextController {
  async create(request: Request, response: Response): Promise<Response> {
    const validateSchema = object({
      description: string().nullable(),
      companyPageId: string().nullable(),
      typeTextId: string().nullable(),
    });

    validateSchema.validateSync(request.body);

    const service = container.resolve(TextService);
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

    const service = container.resolve(TextService);
    await service.updateDescription(id, description);
    return response.sendStatus(200);
  }

  async list(request: Request, response: Response): Promise<Response> {
    const { companyPageId } = request.params;

    const service = container.resolve(TextService);
    const result = await service.list(companyPageId);
    return response.json(result);
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const service = container.resolve(TextService);
    const result = await service.show(id);
    return response.json(result);
  }

  async updateSituation(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;
    const { situation } = request.body;

    const service = container.resolve(TextService);
    await service.updateSituation(id, situation);
    return response.sendStatus(200);
  }
}

export { TextController };
