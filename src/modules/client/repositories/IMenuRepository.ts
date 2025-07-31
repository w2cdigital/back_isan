import { IResponsePageDTO } from '../dtos/IResponsePageDTO';
import { Menu } from '../entities/Menu';
import { Page } from '../entities/Page';

interface IMenuRepository {
  save(menu: Menu): Promise<Menu>;
  list(companyId: string): Promise<Menu[]>;
  updateOrder(id: string, order: number): Promise<void>;
  findById(id: string): Promise<Menu>;
  updateSituation(id: string, situation: boolean): Promise<void>;
  updateName(id: string, name: string): Promise<void>;
}

export { IMenuRepository };
