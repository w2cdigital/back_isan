import { AppDataSource } from '../../../../database';
import { Repository } from 'typeorm';
import { Text } from '../../entities/Text';
import { ITextRepository } from '../ITextRepository';

class TextRepository implements ITextRepository {
  private repository: Repository<Text>;

  constructor() {
    this.repository = AppDataSource.getRepository(Text);
  }

  async save(text: Text): Promise<Text> {
    return this.repository.save(text);
  }

  async list(compandyPageId: string): Promise<Text[]> {
    return this.repository.find({ where: { companyPageId: compandyPageId } });
  }

  async findById(id: string): Promise<Text> {
    return this.repository.findOne({ where: { id } });
  }

  async updateSituation(id: string, situation: boolean): Promise<void> {
    await this.repository.update(id, { situation });
  }

  async updateDescription(id: string, description: string): Promise<void> {
    await this.repository.update(id, { description });
  }
}

export { TextRepository };
