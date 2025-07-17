import { AppDataSource } from '../../../../database';
import { Repository } from 'typeorm';
import { IGalleryRepository } from '../IGalleryRepository';
import { Gallery } from '../../entities/Gallery';

class GalleryRepository implements IGalleryRepository {
  private repository: Repository<Gallery>;

  constructor() {
    this.repository = AppDataSource.getRepository(Gallery);
  }

  async updateUrl(id: string, url: string): Promise<void> {
    await this.repository.update(id, { url });
  }

  async save(gallery: Gallery): Promise<Gallery> {
    return this.repository.save(gallery);
  }

  async list(): Promise<Gallery[]> {
    return this.repository.find();
  }

  async findById(id: string): Promise<Gallery> {
    return this.repository.findOneBy({ id });
  }

  async updateName(id: string, name: string): Promise<void> {
    await this.repository.update(id, { name });
  }
}

export { GalleryRepository };
