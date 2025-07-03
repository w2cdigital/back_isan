import { AppDataSource } from '../../../../database';
import { Repository } from 'typeorm';
import { TypeButon } from '../../entities/TypeButon';
import { ITypeButonRepository } from '../ITypeButonRepository';

class TypeButonRepository implements ITypeButonRepository {
  private repository: Repository<TypeButon>;

  constructor() {
    this.repository = AppDataSource.getRepository(TypeButon);
  }

  async list(): Promise<TypeButon[]> {
    return this.repository.find();
  }

  async save(typeButon: TypeButon): Promise<TypeButon> {
    return this.repository.save(typeButon);
  }

  async findById(id: string): Promise<TypeButon> {
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

export { TypeButonRepository };
