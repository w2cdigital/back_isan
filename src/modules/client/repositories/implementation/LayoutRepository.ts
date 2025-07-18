import { AppDataSource } from '../../../../database';
import { Repository } from 'typeorm';
import { Layout } from '../../entities/Layout';
import { ILayoutRepository } from '../ILayoutRepository';

class LayoutRepository implements ILayoutRepository {
  private repository: Repository<Layout>;

  constructor() {
    this.repository = AppDataSource.getRepository(Layout);
  }

  async updateSituation(id: string, situation: boolean): Promise<void> {
    await this.repository.update(id, { situation });
  }

  async updateJson(id: string, json: Record<string, any>): Promise<void> {
    await this.repository.update(id, { json });
  }

  async save(layout: Layout): Promise<Layout> {
    return this.repository.save(layout);
  }

  async list(companyPageId: string): Promise<Layout[]> {
    return this.repository.find({ where: { companyPageId } });
  }

  async findById(id: string): Promise<Layout> {
    return this.repository.findOne({ where: { id } });
  }
}

export { LayoutRepository };
