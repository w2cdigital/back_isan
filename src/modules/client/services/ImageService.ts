import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../shared/errors/AppError';
import validateUuid from '../../../shared/helpers/ValidateUuid';
import { Image } from '../entities/Image';
import { ImageRepository } from '../repositories/implementation/ImageRepository';
import { ICreateImageDTO } from '../dtos/ICreateImageDTO';
import { IBucketStorage } from 'shared/upload_buckets/BucketStorage';

@injectable()
class ImageService {
  constructor(
    @inject('ImageRepository')
    private imageRepository: ImageRepository,
    @inject('BucketStorage')
    private bucketStorage: IBucketStorage,
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

  async uploadImage(id: string, image_file: string): Promise<void> {
    validateUuid(id);

    await this.bucketStorage.save(image_file, `imagem`);

    await this.imageRepository.updateName(id, image_file);
  }
}

export { ImageService };
