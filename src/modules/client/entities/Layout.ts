import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('tb_layout')
class Layout {
  @PrimaryColumn({ name: 'id_layout' })
  id?: string;

  @Column({ type: 'json', name: 'json_layout' })
  json: Record<string, any>;

  @Column({ name: 'id_empresapagina' })
  companyPageId: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Layout };
