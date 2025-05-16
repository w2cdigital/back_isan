import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Company } from './Company';
import { Page } from './Page';

@Entity('tb_empresapagina')
class CompanyPage {
  @PrimaryColumn({ name: 'id_empresapagina' })
  id?: string;

  @Column({ name: 'id_empresa' })
  companyId: string;

  @Column({ name: 'id_pagina' })
  pageId: string;

  @Column({ name: 'situacao_empresapagina' })
  situation?: boolean;

  @ManyToOne(() => Company, (compaCompany) => compaCompany.companyPage)
  @JoinColumn({ name: 'id_empresa' })
  company: Company;

  @ManyToOne(() => Page, (page) => page.companyPage)
  @JoinColumn({ name: 'id_pagina' })
  page: Page;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
      this.situation = true;
    }
  }
}

export { CompanyPage };
