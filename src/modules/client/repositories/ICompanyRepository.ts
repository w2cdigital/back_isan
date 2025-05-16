import { Company } from '../entities/Company';

interface ICompanyRepository {
  save(company: Company): Promise<Company>;
  list(): Promise<Company[]>;
  findById(id: string): Promise<Company>;
  updateSituation(id: string, situation: boolean): Promise<void>;
}

export { ICompanyRepository };
