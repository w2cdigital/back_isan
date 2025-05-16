import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../shared/errors/AppError';
import validateUuid from '../../../shared/helpers/ValidateUuid';
import { IPageRepository } from '../repositories/IPageRepository';
import { Page } from '../entities/Page';
import { ICreatePageDTO } from '../dtos/ICreatePageDTO';
import { CompanyPage } from '../entities/CompanyPage';

@injectable()
class PageService {
  constructor(
    @inject('PageRepository')
    private pageRepository: IPageRepository,
  ) {}

  async create(pageDTO: ICreatePageDTO): Promise<Page> {
    const page = new Page();

    page.name = pageDTO.name;
    page.slug = pageDTO.slug;
    page.typePage = pageDTO.typePage;

    page.companyPage = pageDTO.companyIds.map((companyId) => {
      const companyPage = new CompanyPage();
      companyPage.companyId = companyId;
      companyPage.pageId = page.id;

      return companyPage;
    });

    return this.pageRepository.save(page);
  }

  async update(id: string, pageDTO: ICreatePageDTO): Promise<void> {
    const page = await this.pageRepository.findById(id);

    page.name = pageDTO.name;
    page.slug = pageDTO.slug;
    page.typePage = pageDTO.typePage;

    await this.pageRepository.save(page);
  }

  async list(
    offset: number,
    limit: number,
    companyId?: string,
    situation?: string,
    input?: string,
  ): Promise<any> {
    // return this.companyRepository.list();
  }

  async show(id: string): Promise<Page> {
    return this.pageRepository.findById(id);
  }

  async updateSituation(id: string, situation: boolean): Promise<void> {
    await this.pageRepository.updateSituation(id, situation);
  }
}

export { PageService };
