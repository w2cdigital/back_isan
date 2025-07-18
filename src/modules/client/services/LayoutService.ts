import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../shared/errors/AppError';
import validateUuid from '../../../shared/helpers/ValidateUuid';
import { CategoryCourse } from '../entities/CategoryCourse';
import { IBucketStorage } from '../../../shared/upload_buckets/BucketStorage';
import { ILayoutRepository } from '../repositories/ILayoutRepository';
import { Layout } from '../entities/Layout';

@injectable()
class LayoutService {
  constructor(
    @inject('LayoutRepository')
    private layoutRepository: ILayoutRepository,
    @inject('BucketStorage')
    private bucketStorage: IBucketStorage,
  ) {}

  async create(data: {
    json: Record<string, any>;
    companyPageId: string;
  }): Promise<Layout> {
    const layout = new Layout();

    layout.json = data.json;
    layout.companyPageId = data.companyPageId;

    return this.layoutRepository.save(layout);
  }

  async updateJson(id: string, json: Record<string, any>): Promise<void> {
    validateUuid(id);
    await this.layoutRepository.updateJson(id, json);
  }

  async updateSituation(id: string, situation: boolean): Promise<void> {
    validateUuid(id);
    await this.layoutRepository.updateSituation(id, situation);
  }

  async list(companyPageId: string): Promise<Layout[]> {
    validateUuid(companyPageId);
    return this.layoutRepository.list(companyPageId);
  }

  async show(id: string): Promise<Layout> {
    validateUuid(id);
    return this.layoutRepository.findById(id);
  }
}

export { LayoutService };
