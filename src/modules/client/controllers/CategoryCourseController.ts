import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { object, string, number, date, InferType, boolean } from 'yup';

import { CategoryCourseService } from '../services/CategoryCourseService';
import { Image } from '../entities/Image';

class CategoryCourseController {
  async create(request: Request, response: Response): Promise<Response> {
    const validateSchema = object({
      title: string().nullable(),
      color: string().nullable(),
      companyId: string().required(),
      pageId: string().required(),
      referenceId: string().nullable(),
      description: string().nullable(),
      link: string().nullable(),
    });

    validateSchema.validateSync(request.body);

    const service = container.resolve(CategoryCourseService);
    const result = await service.create(request.body);
    return response.status(201).json(result);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const validateSchema = object({
      title: string().nullable(),
      color: string().nullable(),
      companyId: string().nullable(),
      pageId: string().required(),
      referenceId: string().nullable(),
      description: string().nullable(),
      link: string().nullable(),
    });

    validateSchema.validateSync(request.body);

    const service = container.resolve(CategoryCourseService);
    const result = await service.update(id, request.body);
    return response.status(200).json(result);
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
    const { companyId } = request.params;

    const service = container.resolve(CategoryCourseService);
    const result = await service.list(companyId);
    return response.json(result);
  }

  async findbyReferenceId(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { referenceId } = request.params;

    const service = container.resolve(CategoryCourseService);
    const result = await service.findByReferenceId(referenceId);
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

  async updateOrder(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { order } = request.body;

    const service = container.resolve(CategoryCourseService);
    await service.updateOrder(id, order);
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
