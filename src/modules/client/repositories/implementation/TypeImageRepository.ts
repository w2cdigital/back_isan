import { AppDataSource } from '../../../../database';
import { Repository } from 'typeorm';
import { TypeImage } from '../../entities/TypeImage';
import { ITypeImageRepository } from '../ITypeImageRepository';

class TypeImageRepository implements ITypeImageRepository {
  private repository: Repository<TypeImage>;

  constructor() {
    this.repository = AppDataSource.getRepository(TypeImage);
  }

  async save(typeImage: TypeImage): Promise<TypeImage> {
    return this.repository.save(typeImage);
  }

  async list(): Promise<TypeImage[]> {
    return this.repository.find();
  }

  async findById(id: string): Promise<TypeImage> {
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

export { TypeImageRepository };
