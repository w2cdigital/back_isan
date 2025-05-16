import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { CompanyPage } from './CompanyPage';

@Entity('tb_empresamenu')
class CompanyMenu {
  @PrimaryColumn({ name: 'id_empresamenu' })
  id?: string;

  @Column({ name: 'situacao_empresamenu' })
  situation?: boolean;

  @Column({ name: 'id_empresa' })
  companyId: string;

  @Column({ name: 'id_menu' })
  menuId: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
      this.situation = true;
    }
  }
}

export { CompanyMenu };
