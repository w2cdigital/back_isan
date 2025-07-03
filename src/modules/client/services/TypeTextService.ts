import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../shared/errors/AppError';
import validateUuid from '../../../shared/helpers/ValidateUuid';
import { IPageRepository } from '../repositories/IPageRepository';
import { TypeText } from '../entities/TypeText';
import { IResponsePageDTO } from '../dtos/IResponsePageDTO';
import { ITypeTextRepository } from '../repositories/ITypeTextRepository';
import { ICreateTypeTextDTO } from '../dtos/ICreateTypeTextDTO';

@injectable()
class TypeTextService {
  constructor(
    @inject('TypeTextRepository')
    private typeTextRepository: ITypeTextRepository,
  ) {}

  async create(typeTextDTO: ICreateTypeTextDTO): Promise<TypeText> {
    const typeText = new TypeText();

    typeText.name = typeTextDTO.name;
    typeText.pageId = typeTextDTO.pageId;

    return this.typeTextRepository.save(typeText);
  }

  async list(): Promise<TypeText[]> {
    return this.typeTextRepository.list();
  }

  async show(id: string): Promise<TypeText> {
    return this.typeTextRepository.findById(id);
  }

  async updateSituation(id: string, situation: boolean): Promise<void> {
    await this.typeTextRepository.updateSituation(id, situation);
  }

  async updateName(id: string, name: string): Promise<void> {
    await this.typeTextRepository.updateName(id, name);
  }
}

export { TypeTextService };
