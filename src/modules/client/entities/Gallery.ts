import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('tb_galeriaimagem')
class Gallery {
  @PrimaryColumn({ name: 'id_galeriaimagem' })
  id?: string;

  @Column({ name: 'url_galeriaimagem' })
  url: string;

  @Column({ name: 'nome_galeriaimagem' })
  name: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Gallery };
