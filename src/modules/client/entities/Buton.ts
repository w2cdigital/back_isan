import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('tb_botao')
class Buton {
  @PrimaryColumn({ name: 'id_botao' })
  id?: string;

  @Column({ name: 'descricao_botao' })
  description: string;

  @Column({ name: 'id_empresapagina' })
  companyPageId: string;

  @Column({ name: 'id_tpbotao' })
  typeButonId: string;

  @Column({ name: 'situacao_botao' })
  situation?: boolean;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
      this.situation = true;
    }
  }
}

export { Buton };
