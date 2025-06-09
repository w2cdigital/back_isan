import { Text } from '../entities/Text';

interface ITextRepository {
  save(text: Text): Promise<Text>;
  list(compandyPageId: string): Promise<Text[]>;
  findById(i: string): Promise<Text>;
  updateSituation(id: string, situation: boolean): Promise<void>;
  updateDescription(id: string, description: string): Promise<void>;
}

export { ITextRepository };
