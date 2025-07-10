import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { object, string, number, date, InferType, boolean } from 'yup';

import { CompanyService } from '../services/CompanyService';
import { add } from 'date-fns';

class CompanyController {
  async create(request: Request, response: Response): Promise<Response> {
    const validateSchema = object({
      name: string().required(),
      city: string().nullable(),
      uf: string().nullable(),
      cep: string().nullable(),
      district: string().nullable(),
      phone: string().nullable(),
      whatsapp: string().nullable(),
      linkWhatsapp: string().nullable(),
      linkMap: string().nullable(),
      address: string().nullable(),
    });

    validateSchema.validateSync(request.body);

    const service = container.resolve(CompanyService);
    const result = await service.create(request.body);
    return response.status(201).json(result);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const validateSchema = object({
      name: string().required(),
      city: string().nullable(),
      uf: string().nullable(),
      cep: string().nullable(),
      district: string().nullable(),
      phone: string().nullable(),
      whatsapp: string().nullable(),
      linkWhatsapp: string().nullable(),
      linkMap: string().nullable(),
      address: string().nullable(),
    });

    validateSchema.validateSync(request.body);

    const service = container.resolve(CompanyService);
    await service.update(id, request.body);
    return response.sendStatus(200);
  }

  async list(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(CompanyService);
    const result = await service.list();
    return response.json(result);
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const service = container.resolve(CompanyService);
    const result = await service.show(id);
    return response.json(result);
  }

  async uploadImage(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const image_file = request.file.filename;

    const service = container.resolve(CompanyService);
    await service.uploadImage(id, image_file);
    return response.sendStatus(200);
  }

  async updateSituation(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;
    const { situation } = request.body;

    const service = container.resolve(CompanyService);
    const result = await service.updateSituation(id, situation);
    return response.sendStatus(200);
  }
}

export { CompanyController };
