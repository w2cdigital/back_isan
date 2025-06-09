import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../shared/errors/AppError';
import validateUuid from '../../../shared/helpers/ValidateUuid';
import { Text } from '../entities/Text';
import { ICreateTextDTO } from '../dtos/ICreateTextDTO';
import { ITextRepository } from '../repositories/ITextRepository';

@injectable()
class TextService {
  constructor(
    @inject('TextRepository')
    private textRepository: ITextRepository,
  ) {}

  async create(textDTO: ICreateTextDTO): Promise<Text> {
    const text = new Text();

    text.description = textDTO.description;
    text.companyPageId = textDTO.companyPageId;
    text.typeTextId = textDTO.typeTextId;

    return this.textRepository.save(text);
  }

  async list(companyPageId: string): Promise<Text[]> {
    return this.textRepository.list(companyPageId);
  }

  async show(id: string): Promise<Text> {
    return this.textRepository.findById(id);
  }

  async updateSituation(id: string, situation: boolean): Promise<void> {
    await this.textRepository.updateSituation(id, situation);
  }

  async updateDescription(id: string, description: string): Promise<void> {
    await this.textRepository.updateDescription(id, description);
  }
}

export { TextService };
