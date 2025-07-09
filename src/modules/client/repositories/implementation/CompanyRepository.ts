import { AppDataSource } from '../../../../database';
import { Repository } from 'typeorm';
import { ICompanyRepository } from '../ICompanyRepository';
import { Company } from '../../entities/Company';

class CompanyRepository implements ICompanyRepository {
  private repository: Repository<Company>;

  constructor() {
    this.repository = AppDataSource.getRepository(Company);
  }

  async save(company: Company): Promise<Company> {
    return this.repository.save(company);
  }

  async list(): Promise<Company[]> {
    return this.repository.find();
  }

  async findById(id: string): Promise<Company> {
    return this.repository.findOne({
      where: { id },
    });
  }

  async updateSituation(id: string, situation: boolean): Promise<void> {
    await this.repository.update(id, { situation });
  }

  async updateLogo(id: string, log: string): Promise<void> {
    await this.repository.update(id, { log });
  }
}

export { CompanyRepository };
