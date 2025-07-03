import { AppDataSource } from '../../../../database';
import { Repository } from 'typeorm';
import { Buton } from '../../entities/Buton';
import { IButonRepository } from '../IButonRepository';

class ButonRepository implements IButonRepository {
  private repository: Repository<Buton>;

  constructor() {
    this.repository = AppDataSource.getRepository(Buton);
  }

  async save(buton: Buton): Promise<Buton> {
    return this.repository.save(buton);
  }

  async list(compandyPageId: string): Promise<Buton[]> {
    return this.repository.find({ where: { companyPageId: compandyPageId } });
  }

  async findById(id: string): Promise<Buton> {
    return this.repository.findOne({ where: { id } });
  }

  async updateSituation(id: string, situation: boolean): Promise<void> {
    await this.repository.update(id, { situation });
  }

  async updateDescription(id: string, description: string): Promise<void> {
    await this.repository.update(id, { description });
  }
}

export { ButonRepository };
