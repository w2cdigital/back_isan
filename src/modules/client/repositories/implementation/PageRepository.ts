import { AppDataSource } from '../../../../database';
import { Repository } from 'typeorm';
import { ICompanyRepository } from '../ICompanyRepository';
import { Company } from '../../entities/Company';
import { Page } from '../../entities/Page';
import { IPageRepository } from '../IPageRepository';

class PageRepository implements IPageRepository {
  private repository: Repository<Page>;

  constructor() {
    this.repository = AppDataSource.getRepository(Page);
  }

  async save(page: Page): Promise<Page> {
    return this.repository.save(page);
  }

  list(
    offset: number,
    limit: number,
    companyId?: string,
    situation?: string,
    input?: string,
  ): Promise<any> {
    throw new Error('Method not implemented.');
  }

  async findById(id: string): Promise<Page> {
    return this.repository
      .createQueryBuilder('page')
      .leftJoinAndSelect('page.companyPage', 'companyPage')
      .leftJoinAndSelect('companyPage.company', 'company')
      .getOne();
  }

  async updateSituation(id: string, situation: boolean): Promise<void> {
    await this.repository.update(id, { situation });
  }
}

export { PageRepository };
