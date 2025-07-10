import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../shared/errors/AppError';
import validateUuid from '../../../shared/helpers/ValidateUuid';
import { ICompanyRepository } from '../repositories/ICompanyRepository';
import { Company } from '../entities/Company';
import { ICreateCompanyDTO } from '../dtos/ICreateCompanyDTO';
import { IBucketStorage } from 'shared/upload_buckets/BucketStorage';

@injectable()
class CompanyService {
  constructor(
    @inject('CompanyRepository')
    private companyRepository: ICompanyRepository,
    @inject('BucketStorage')
    private bucketStorage: IBucketStorage,
  ) {}

  async create(companyDTO: ICreateCompanyDTO): Promise<Company> {
    const company = new Company();

    company.name = companyDTO.name;
    company.city = companyDTO.city;
    company.uf = companyDTO.uf;
    company.cep = companyDTO.cep;
    company.district = companyDTO.district;
    company.phone = companyDTO.phone;
    company.whatsapp = companyDTO.whatsapp;
    company.linkWhatsapp = companyDTO.linkWhatsapp;
    company.linkMap = companyDTO.linkMap;
    company.address = companyDTO.address;

    return this.companyRepository.save(company);
  }

  async update(id: string, companyDTO: ICreateCompanyDTO): Promise<void> {
    const company = await this.companyRepository.findById(id);

    company.name = companyDTO.name;
    company.city = companyDTO.city;
    company.uf = companyDTO.uf;
    company.cep = companyDTO.cep;
    company.district = companyDTO.district;
    company.phone = companyDTO.phone;
    company.whatsapp = companyDTO.whatsapp;
    company.linkWhatsapp = companyDTO.linkWhatsapp;
    company.linkMap = companyDTO.linkMap;
    company.address = companyDTO.address;

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

  async uploadImage(id: string, image_file: string): Promise<void> {
    validateUuid(id);

    await this.bucketStorage.save(image_file, `logo`);

    await this.companyRepository.updateLogo(id, image_file);
  }
}

export { CompanyService };
