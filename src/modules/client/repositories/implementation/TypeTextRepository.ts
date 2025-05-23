import { AppDataSource } from '../../../../database';
import { Repository } from 'typeorm';
import { TypeText } from '../../entities/TypeText';
import { ITypeTextRepository } from '../ITypeTextRepository';

class TypeTextRepository implements ITypeTextRepository {
  private repository: Repository<TypeText>;

  constructor() {
    this.repository = AppDataSource.getRepository(TypeText);
  }

  async save(typeText: TypeText): Promise<TypeText> {
    return this.repository.save(typeText);
  }

  async list(pageId: string): Promise<TypeText[]> {
    return this.repository.find({
      where: { pageId },
    });
  }

  async findById(id: string): Promise<TypeText> {
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

export { TypeTextRepository };
