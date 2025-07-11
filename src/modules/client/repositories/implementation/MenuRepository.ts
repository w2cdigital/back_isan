import { AppDataSource } from '../../../../database';
import { Repository } from 'typeorm';
import { ICompanyRepository } from '../ICompanyRepository';
import { Company } from '../../entities/Company';
import { Menu } from '../../entities/Menu';
import { IMenuRepository } from '../IMenuRepository';

class MenuRepository implements IMenuRepository {
  private repository: Repository<Menu>;

  constructor() {
    this.repository = AppDataSource.getRepository(Menu);
  }

  async save(menu: Menu): Promise<Menu> {
    return this.repository.save(menu);
  }

  async list(companyId: string): Promise<Menu[]> {
    const menus = await this.repository
      .createQueryBuilder('menu')
      .leftJoinAndSelect('menu.companyPage', 'companyPage')
      .where('companyPage.companyId = :companyId', { companyId })
      .getMany();

    return menus;
  }

  async findById(id: string): Promise<Menu> {
    return this.repository.findOne({ where: { id } });
  }

  async updateSituation(id: string, situation: boolean): Promise<void> {
    await this.repository.update(id, { situation });
  }

  async updateName(id: string, name: string): Promise<void> {
    await this.repository.update(id, { name });
  }
}

export { MenuRepository };
