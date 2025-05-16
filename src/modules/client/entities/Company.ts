import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { CompanyPage } from './CompanyPage';

@Entity('tb_empresa')
class Company {
  @PrimaryColumn({ name: 'id_empresa' })
  id?: string;

  @Column({ name: 'nome_empresa' })
  name: string;

  @Column({ name: 'cidade_empresa' })
  city: string;

  @Column({ name: 'uf_empresa' })
  uf: string;

  @Column({ name: 'logomarca_empresa' })
  log?: string;

  @Column({ name: 'situacao_empresa' })
  situation?: boolean;

  @OneToMany(() => CompanyPage, (companyPage) => companyPage.company, {
    cascade: true,
  })
  companyPage: CompanyPage[];

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
      this.situation = true;
    }
  }
}

export { Company };
