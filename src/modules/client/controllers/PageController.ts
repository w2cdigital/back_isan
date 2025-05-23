import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { object, string, number, date, InferType, boolean } from 'yup';

import { PageService } from '../services/PageService';

class PageController {
  async create(request: Request, response: Response): Promise<Response> {
    const validateSchema = object({
      name: string().required(),
      slug: string().nullable(),
      typePage: string().nullable(),
    });

    validateSchema.validateSync(request.body);

    const service = container.resolve(PageService);
    const result = await service.create(request.body);
    return response.status(201).json(result);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const validateSchema = object({
      name: string().required(),
      slug: string().nullable(),
      typePage: string().nullable(),
    });

    validateSchema.validateSync(request.body);

    const service = container.resolve(PageService);
    await service.update(id, request.body);
    return response.sendStatus(200);
  }

  async list(request: Request, response: Response): Promise<Response> {
    const { offset, limit, companyId, situation, input } = request.query;

    const validateSchema = object({
      offset: number().required(),
      limit: number().required(),
    });

    validateSchema.validateSync({
      offset: Number(offset),
      limit: Number(limit),
    });

    const commpanyValidate = !companyId ? null : companyId.toString();
    const situationValidate = situation === 'true';
    const inputValidate = !input ? null : input.toString();

    const service = container.resolve(PageService);
    const result = await service.list(
      Number(offset),
      Number(limit),
      commpanyValidate,
      situationValidate,
      inputValidate,
    );
    return response.json(result);
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const service = container.resolve(PageService);
    const result = await service.show(id);
    return response.json(result);
  }

  async updateSituation(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;
    const { situation } = request.body;

    const service = container.resolve(PageService);
    const result = await service.updateSituation(id, situation);
    return response.sendStatus(200);
  }
}

export { PageController };
