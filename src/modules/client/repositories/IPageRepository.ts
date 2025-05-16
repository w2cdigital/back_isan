import { Page } from '../entities/Page';

interface IPageRepository {
  save(page: Page): Promise<Page>;
  list(
    offset: number,
    limit: number,
    companyId?: string,
    situation?: string,
    input?: string,
  ): Promise<any>;
  findById(id: string): Promise<Page>;
  updateSituation(id: string, situation: boolean): Promise<void>;
}

export { IPageRepository };
