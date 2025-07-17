import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { object, string, number, date, InferType, boolean } from 'yup';

import { CategoryCourseService } from '../services/CategoryCourseService';
import { Image } from '../entities/Image';

class CategoryCourseController {
  async create(request: Request, response: Response): Promise<Response> {
    const { title } = request.body;
    const validateSchema = object({
      title: string().nullable(),
    });

    validateSchema.validateSync({ title: title });

    const service = container.resolve(CategoryCourseService);
    const result = await service.create(title);
    return response.status(201).json(result);
  }

  async updateTitle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { title } = request.body;

    const validateSchema = object({
      title: string().required(),
    });

    validateSchema.validateSync({ title: title });

    const service = container.resolve(CategoryCourseService);
    await service.updateTitle(id, title);
    return response.sendStatus(200);
  }

  async list(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(CategoryCourseService);
    const result = await service.list();
    return response.json(result);
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const service = container.resolve(CategoryCourseService);
    const result = await service.show(id);
    return response.json(result);
  }

  async uploadImage(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const image_file = request.file.filename;

    const service = container.resolve(CategoryCourseService);
    await service.uploadImage(id, image_file);
    return response.sendStatus(200);
  }

  async updateSituation(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;
    const { situation } = request.body;

    const service = container.resolve(CategoryCourseService);
    await service.updateSituation(id, situation);
    return response.sendStatus(200);
  }
}

export { CategoryCourseController };
