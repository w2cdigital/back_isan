import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('tb_tpimagem')
class TypeImage {
  @PrimaryColumn({ name: 'id_tpimagem' })
  id?: string;

  @Column({ name: 'nome_tpimagem' })
  name: string;

  @Column({ name: 'situacao_tpimagem' })
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

export { TypeImage };
