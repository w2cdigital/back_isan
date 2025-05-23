import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../shared/errors/AppError';
import validateUuid from '../../../shared/helpers/ValidateUuid';
import { IMenuRepository } from '../repositories/IMenuRepository';
import { ICreateMenuDTO } from '../dtos/ICreateMenuDTO';
import { Menu } from '../entities/Menu';

@injectable()
class MenuService {
  constructor(
    @inject('MenuRepository')
    private menuRepository: IMenuRepository,
  ) {}

  async create(menuDTO: ICreateMenuDTO): Promise<Menu> {
    const menu = new Menu();

    menu.name = menuDTO.name;
    menu.companyPageId = menuDTO.companyPageId;

    return this.menuRepository.save(menu);
  }

  async list(companyPageId: string): Promise<Menu[]> {
    return this.menuRepository.list(companyPageId);
  }

  async show(id: string): Promise<Menu> {
    return this.menuRepository.findById(id);
  }

  async updateSituation(id: string, situation: boolean): Promise<void> {
    await this.menuRepository.updateSituation(id, situation);
  }

  async updateName(id: string, name: string): Promise<void> {
    await this.menuRepository.updateName(id, name);
  }
}

export { MenuService };
