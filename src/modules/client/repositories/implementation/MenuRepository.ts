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
    const menus = await this.repository.query(
      `
      select
        menu.nome_menu as menu,
        menu.situacao_menu as situationMenu,
        pagina.nome_pagina as page,
        pagina.slug_pagina as slug,
        pagina.tipo_pagina as typePage,
        pagina.situacao_pagina as situationPage
      from tb_menu menu
        left join tb_empresapagina empresaPagina on menu.id_empresapagina = empresaPagina.id_empresapagina
        left join tb_pagina pagina on empresaPagina.id_pagina = pagina.id_pagina
      where
        empresaPagina.id_empresa = ?
    `,
      [companyId],
    );

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
