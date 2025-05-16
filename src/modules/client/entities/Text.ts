import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('tb_texto')
class Text {
  @PrimaryColumn({ name: 'id_texto' })
  id?: string;

  @Column({ name: 'descricao_texto' })
  description: string;

  @Column({ name: 'id_empresapagina' })
  companyPageId: string;

  @Column({ name: 'id_tptexto' })
  typeTextId: string;

  @Column({ name: 'situacao_texto' })
  situation?: boolean;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
      this.situation = true;
    }
  }
}

export { Text };
