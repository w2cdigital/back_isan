import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../shared/errors/AppError';
import validateUuid from '../../../shared/helpers/ValidateUuid';
import { ICompanyRepository } from '../repositories/ICompanyRepository';
import { Company } from '../entities/Company';
import { ICreateCompanyDTO } from '../dtos/ICreateCompanyDTO';

@injectable()
class CompanyService {
  constructor(
    @inject('CompanyRepository')
    private companyRepository: ICompanyRepository,
  ) {}

  async create(companyDTO: ICreateCompanyDTO): Promise<Company> {
    const company = new Company();

    company.name = companyDTO.name;
    company.city = companyDTO.city;
    company.uf = companyDTO.uf;

    return this.companyRepository.save(company);
  }

  async update(id: string, companyDTO: ICreateCompanyDTO): Promise<void> {
    const company = await this.companyRepository.findById(id);

    company.name = companyDTO.name;
    company.city = companyDTO.city;
    company.uf = companyDTO.uf;

    await this.companyRepository.save(company);
  }

  async list(): Promise<Company[]> {
    return this.companyRepository.list();
  }

  async show(id: string): Promise<Company> {
    return this.companyRepository.findById(id);
  }

  async updateSituation(id: string, situation: boolean): Promise<void> {
    await this.companyRepository.updateSituation(id, situation);
  }
}

export { CompanyService };
