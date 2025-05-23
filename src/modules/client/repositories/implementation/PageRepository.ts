import { AppDataSource } from '../../../../database';
import { Repository } from 'typeorm';
import { ICompanyRepository } from '../ICompanyRepository';
import { Company } from '../../entities/Company';
import { Page } from '../../entities/Page';
import { IPageRepository } from '../IPageRepository';
import { IResponsePageDTO } from '../../dtos/IResponsePageDTO';

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
    situation?: boolean,
    input?: string,
  ): Promise<IResponsePageDTO[]> {
    const escapement: any[] = [];

    const conditions = [];

    let where = ``;

    if (input || situation || companyId) where = `WHERE`;

    if (companyId) {
      conditions.push(`empresa.id_empresa = ?`);
      escapement.push(companyId);
    }

    if (situation) {
      conditions.push(`pagina.situacao_pagina = ?`);
      escapement.push(situation);
    }

    if (input) {
      conditions.push(`pagina.nome_pagina like ?`);
      escapement.push(`%${input.replace(/['"]/g, '')}%`);
    }

    return this.repository.query(
      `
      SELECT
        pagina.id_pagina as id,
        pagina.nome_pagina as page,
        pagina.slug_pagina as slug,
        pagina.tipo_pagina as typePage,
        empresa.id_empresa as companyId,
        empresa.nome_empresa as company,
        pagina.situacao_pagina as situation
      FROM
        tb_pagina pagina
      INNER JOIN
        tb_empresapagina empresaPagina on pagina.id_pagina = empresaPagina.id_pagina
      INNER JOIN
        tb_empresa empresa on empresaPagina.id_empresa = empresa.id_empresa
      ${where}
      ${conditions.join(' AND ')}
      LIMIT ${offset}, ${limit};
    `,
      escapement,
    );
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
