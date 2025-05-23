import { TypeImage } from '../entities/TypeImage';

interface ITypeImageRepository {
  save(typeImage: TypeImage): Promise<TypeImage>;
  list(pageId: string): Promise<TypeImage[]>;
  findById(id: string): Promise<TypeImage>;
  updateSituation(id: string, situation: boolean): Promise<void>;
  updateName(id: string, name: string): Promise<void>;
}

export { ITypeImageRepository };
