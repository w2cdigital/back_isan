import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { CompanyPage } from './CompanyPage';

@Entity('tb_menu')
class Menu {
  @PrimaryColumn({ name: 'id_menu' })
  id?: string;

  @Column({ name: 'nome_menu' })
  name: string;

  @Column({ name: 'id_empresapagina' })
  companyPageId: string;

  @Column({ name: 'situacao_menu' })
  situation?: boolean;

  @Column({ name: 'ordem_menu' })
  order?: number;

  @OneToMany(() => CompanyPage, (companyPage) => companyPage.company, {
    cascade: true,
  })
  companyPage: CompanyPage[];

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
      this.situation = true;
      this.order = 0; // Default order value
    }
  }
}

export { Menu };
