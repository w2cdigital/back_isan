import { Buton } from '../entities/Buton';

interface IButonRepository {
  save(buton: Buton): Promise<Buton>;
  list(compandyPageId: string): Promise<Buton[]>;
  findById(i: string): Promise<Buton>;
  updateSituation(id: string, situation: boolean): Promise<void>;
  updateDescription(id: string, description: string): Promise<void>;
}

export { IButonRepository };
