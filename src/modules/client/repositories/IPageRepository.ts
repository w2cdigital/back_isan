import { IResponsePageDTO } from '../dtos/IResponsePageDTO';
import { Page } from '../entities/Page';

interface IPageRepository {
  save(page: Page): Promise<Page>;
  list(
    offset: number,
    limit: number,
    companyId?: string,
    situation?: boolean,
    input?: string,
  ): Promise<IResponsePageDTO[]>;
  findById(id: string): Promise<Page>;
  updateSituation(id: string, situation: boolean): Promise<void>;
}

export { IPageRepository };
