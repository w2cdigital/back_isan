import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { object, string, number, date, InferType, boolean } from 'yup';

import { LayoutService } from '../services/LayoutService';
import { Image } from '../entities/Image';

class LayoutController {
  async create(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(LayoutService);
    const result = await service.create(request.body);
    return response.status(201).json(result);
  }

  async updateJson(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { json } = request.body;

    const service = container.resolve(LayoutService);
    await service.updateJson(id, json);
    return response.sendStatus(200);
  }

  async list(request: Request, response: Response): Promise<Response> {
    const { companyPageId } = request.params;
    const service = container.resolve(LayoutService);
    const result = await service.list(companyPageId);
    return response.json(result);
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const service = container.resolve(LayoutService);
    const result = await service.show(id);
    return response.json(result);
  }
}

export { LayoutController };
