import { AppDataSource } from '../../../../database';
import { Repository } from 'typeorm';
import { Image } from '../../entities/Image';
import { IImageRepository } from '../IImageRepository';

class ImageRepository implements IImageRepository {
  private repository: Repository<Image>;

  constructor() {
    this.repository = AppDataSource.getRepository(Image);
  }

  async save(Image: Image): Promise<Image> {
    return this.repository.save(Image);
  }

  async list(companyPageId: string): Promise<Image[]> {
    return this.repository.find({
      where: { companyPageId },
    });
  }

  async findById(id: string): Promise<Image> {
    return this.repository.findOne({
      where: { id },
    });
  }

  async updateSituation(id: string, situation: boolean): Promise<void> {
    await this.repository.update(id, { situation });
  }

  async updateName(id: string, name: string): Promise<void> {
    await this.repository.update(id, { name });
  }
}

export { ImageRepository };
