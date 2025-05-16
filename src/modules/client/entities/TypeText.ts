import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('tb_tptexto')
class TypeText {
  @PrimaryColumn({ name: 'id_tptexto' })
  id?: string;

  @Column({ name: 'nome_tptexto' })
  name: string;

  @Column({ name: 'situacao_tptexto' })
  situation?: boolean;

  @Column({ name: 'id_pagina' })
  pageId: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
      this.situation = true;
    }
  }
}

export { TypeText };
