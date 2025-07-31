import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { object, string, number, date, InferType, boolean } from 'yup';

import { CourseService } from '../services/CourseService';
import { title } from 'process';

class CourseController {
  async create(request: Request, response: Response): Promise<Response> {
    const validateSchema = object({
      title: string().nullable(),
      descriptive: string().nullable(),
      description: string().nullable(),
      duration: string().nullable(),
      text: string().nullable(),
      contrast: boolean().nullable(),
      banner: boolean().nullable(),
      link: string().nullable(),
      categoryCourseId: string().required(),
      companyId: string().nullable(),
      pageId: string().nullable(),
    });

    validateSchema.validateSync(request.body);

    const service = container.resolve(CourseService);
    const result = await service.create(request.body);
    return response.status(201).json(result);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const validateSchema = object({
      title: string().nullable(),
      descriptive: string().nullable(),
      description: string().nullable(),
      duration: string().nullable(),
      text: string().nullable(),
      contrast: boolean().nullable(),
      banner: boolean().nullable(),
      link: string().nullable(),
      categoryCourseId: string().required(),
      companyId: string().nullable(),
      pageId: string().nullable(),
    });

    validateSchema.validateSync(request.body);

    const service = container.resolve(CourseService);
    const result = await service.update(id, request.body);
    return response.status(201).json(result);
  }

  async updateSituation(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;
    const { situation } = request.body;

    const validateSchema = object({
      situation: boolean().required(),
    });

    validateSchema.validateSync({ situation });

    const service = container.resolve(CourseService);
    await service.updateSituation(id, situation);
    return response.sendStatus(200);
  }

  async list(request: Request, response: Response): Promise<Response> {
    const { categoryId } = request.params;
    const service = container.resolve(CourseService);
    const result = await service.list(categoryId);
    return response.json(result);
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const service = container.resolve(CourseService);
    const result = await service.show(id);
    return response.json(result);
  }

  async uploadImage(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const image_file = request.file.filename;

    const service = container.resolve(CourseService);
    await service.uploadImage(id, image_file);
    return response.sendStatus(200);
  }
}

export { CourseController };
