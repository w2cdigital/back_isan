import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('tb_imagem')
class Image {
  @PrimaryColumn({ name: 'id_imagem' })
  id?: string;

  @Column({ name: 'nome_imagem' })
  name: string;

  @Column({ name: 'id_empresapagina' })
  companyPageId: string;

  @Column({ name: 'id_tpimagem' })
  typeImageId: string;

  @Column({ name: 'situacao_imagem' })
  situation?: boolean;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
      this.situation = true;
    }
  }
}

export { Image };
