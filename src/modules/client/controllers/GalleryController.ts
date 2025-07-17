import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { object, string, number, date, InferType, boolean } from 'yup';

import { GalleryService } from '../services/GalleryService';

class GalleryController {
  async create(request: Request, response: Response): Promise<Response> {
    const validateSchema = object({
      name: string().nullable(),
    });

    validateSchema.validateSync(request.body);

    const service = container.resolve(GalleryService);
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

    const service = container.resolve(GalleryService);
    await service.updateName(id, name);
    return response.sendStatus(200);
  }

  async list(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(GalleryService);
    const result = await service.list();
    return response.json(result);
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const service = container.resolve(GalleryService);
    const result = await service.show(id);
    return response.json(result);
  }

  async uploadImage(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const image_file = request.file.filename;

    const service = container.resolve(GalleryService);
    await service.uploadImage(id, image_file);
    return response.sendStatus(200);
  }
}

export { GalleryController };
