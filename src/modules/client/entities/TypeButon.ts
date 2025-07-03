import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('tb_tpbotao')
class TypeButon {
  @PrimaryColumn({ name: 'id_tpbotao' })
  id?: string;

  @Column({ name: 'nome_tpbotao' })
  name: string;

  @Column({ name: 'situacao_tpbotao' })
  situation?: boolean;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
      this.situation = true;
    }
  }
}

export { TypeButon };
