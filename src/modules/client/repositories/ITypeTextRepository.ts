import { TypeText } from '../entities/TypeText';

interface ITypeTextRepository {
  save(typeText: TypeText): Promise<TypeText>;
  list(pageId: string): Promise<TypeText[]>;
  findById(id: string): Promise<TypeText>;
  updateSituation(id: string, situation: boolean): Promise<void>;
  updateName(id: string, name: string): Promise<void>;
}

export { ITypeTextRepository };
