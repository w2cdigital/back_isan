import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../shared/errors/AppError';
import validateUuid from '../../../shared/helpers/ValidateUuid';
import { ICreateTypeTextDTO } from '../dtos/ICreateTypeTextDTO';
import { ITypeImageRepository } from '../repositories/ITypeImageRepository';
import { TypeImage } from '../entities/TypeImage';

@injectable()
class TypeImageService {
  constructor(
    @inject('TypeImageRepository')
    private typeImageRepository: ITypeImageRepository,
  ) {}

  async create(typeImageDTO: ICreateTypeTextDTO): Promise<TypeImage> {
    const typeImage = new TypeImage();

    typeImage.name = typeImageDTO.name;
    typeImage.pageId = typeImageDTO.pageId;

    return this.typeImageRepository.save(typeImage);
  }

  async list(pageId: string): Promise<TypeImage[]> {
    return this.typeImageRepository.list(pageId);
  }

  async show(id: string): Promise<TypeImage> {
    return this.typeImageRepository.findById(id);
  }

  async updateSituation(id: string, situation: boolean): Promise<void> {
    await this.typeImageRepository.updateSituation(id, situation);
  }

  async updateName(id: string, name: string): Promise<void> {
    await this.typeImageRepository.updateName(id, name);
  }
}

export { TypeImageService };
