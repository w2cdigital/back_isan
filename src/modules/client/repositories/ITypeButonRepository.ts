import { TypeButon } from '../entities/TypeButon';

interface ITypeButonRepository {
  save(typeButon: TypeButon): Promise<TypeButon>;
  list(): Promise<TypeButon[]>;
  findById(id: string): Promise<TypeButon>;
  updateSituation(id: string, situation: boolean): Promise<void>;
  updateName(id: string, name: string): Promise<void>;
}

export { ITypeButonRepository };
