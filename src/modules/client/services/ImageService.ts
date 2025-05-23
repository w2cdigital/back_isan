import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../shared/errors/AppError';
import validateUuid from '../../../shared/helpers/ValidateUuid';
import { Image } from '../entities/Image';
import { ImageRepository } from '../repositories/implementation/ImageRepository';
import { ICreateImageDTO } from '../dtos/ICreateImageDTO';

@injectable()
class ImageService {
  constructor(
    @inject('ImageRepository')
    private imageRepository: ImageRepository,
  ) {}

  async create(imageDTO: ICreateImageDTO): Promise<Image> {
    const image = new Image();

    image.name = imageDTO.name;
    image.companyPageId = imageDTO.companyPageId;
    image.typeImageId = imageDTO.typeImageId;

    return this.imageRepository.save(image);
  }

  async list(companyPageId: string): Promise<Image[]> {
    return this.imageRepository.list(companyPageId);
  }

  async show(id: string): Promise<Image> {
    return this.imageRepository.findById(id);
  }

  async updateSituation(id: string, situation: boolean): Promise<void> {
    await this.imageRepository.updateSituation(id, situation);
  }

  async updateName(id: string, name: string): Promise<void> {
    await this.imageRepository.updateName(id, name);
  }
}

export { ImageService };
