import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

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

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
      this.situation = true;
    }
  }
}

export { Menu };
