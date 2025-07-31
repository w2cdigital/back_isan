import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('tb_categoriacurso')
class CategoryCourse {
  @PrimaryColumn({ name: 'id_categoria' })
  id?: string;

  @Column({ name: 'imagem_categoria' })
  image: string;

  @Column({ name: 'titulo_categoria' })
  title: string;

  @Column({ name: 'link_categoriacurso' })
  link?: string;

  @Column({ name: 'descricao_categoria' })
  description?: string;

  @Column({ name: 'situacao_categoria' })
  situation?: boolean;

  @Column({ name: 'ordem_categoriacurso' })
  order?: number;

  @Column({ name: 'id_empresa' })
  companyId: string;

  @Column({ name: 'id_pagina' })
  pageId: string;

  @Column({ name: 'id_referencia' })
  referenceId?: string;

  @Column({ name: 'cor_categoria' })
  color: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
      this.situation = true;
      this.order = 0;
    }
  }
}

export { CategoryCourse };
