import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { EnumTypePage } from '../enum/EnumTypePage';
import { CompanyPage } from './CompanyPage';

@Entity('tb_pagina')
class Page {
  @PrimaryColumn({ name: 'id_pagina' })
  id?: string;

  @Column({ name: 'nome_pagina' })
  name: string;

  @Column({ name: 'slug_pagina' })
  slug: string;

  @Column({
    name: 'tipo_pagina',
    type: 'enum',
    enum: [
      'empresa',
      'home',
      'sobre',
      'cursos',
      'interna_curso',
      'lista_cursos',
      'convenio',
      'programas',
      'noticias',
      'contato',
    ],
  })
  typePage: EnumTypePage;

  @Column({ name: 'situacao_pagina' })
  situation?: boolean;

  @OneToMany(() => CompanyPage, (companyPage) => companyPage.page, {
    cascade: true,
  })
  companyPage: CompanyPage[];

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
      this.situation = true;
    }
  }
}

export { Page };
