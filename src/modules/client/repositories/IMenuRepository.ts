import { IResponsePageDTO } from '../dtos/IResponsePageDTO';
import { Menu } from '../entities/Menu';
import { Page } from '../entities/Page';

interface IMenuRepository {
  save(menu: Menu): Promise<Menu>;
  list(companyPageId: string): Promise<Menu[]>;
  findById(id: string): Promise<Menu>;
  updateSituation(id: string, situation: boolean): Promise<void>;
  updateName(id: string, name: string): Promise<void>;
}

export { IMenuRepository };
