import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('tb_curso')
class Course {
  @PrimaryColumn({ name: 'id_curso' })
  id?: string;

  @Column({ name: 'capa_curso' })
  capa: string;

  @Column({ name: 'titulo_curso' })
  title: string;

  @Column({ name: 'descritivo_curso' })
  descriptive: string;

  @Column({ name: 'descricao_curso' })
  description: string;

  @Column({ name: 'duracao_curso' })
  duration: string;

  @Column({ name: 'textoinscricoes_curso' })
  text: string;

  @Column({ name: 'link_curso' })
  link?: string;

  @Column({ name: 'situacao_curso' })
  situation?: boolean;

  @Column({ name: 'destaque_curso' })
  contrast: boolean;

  @Column({ name: 'visivelbanner_curso' })
  banner: boolean;

  @Column({ name: 'id_categoria' })
  categoryCourseId: string;

  @Column({ name: 'id_empresa' })
  companyId: string;

  @Column({ name: 'id_pagina' })
  pageId: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
      this.situation = true;
    }
  }
}

export { Course };
