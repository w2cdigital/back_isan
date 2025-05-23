import { Image } from '../entities/Image';

interface IImageRepository {
  save(image: Image): Promise<Image>;
  list(companyPageId: string): Promise<Image[]>;
  findById(id: string): Promise<Image>;
  updateSituation(id: string, situation: boolean): Promise<void>;
  updateName(id: string, name: string): Promise<void>;
}

export { IImageRepository };
