import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../shared/errors/AppError';
import validateUuid from '../../../shared/helpers/ValidateUuid';
import { Image } from '../entities/Image';
import { ImageRepository } from '../repositories/implementation/ImageRepository';
import { ICreateImageDTO } from '../dtos/ICreateImageDTO';
import { IBucketStorage } from '../../../shared/upload_buckets/BucketStorage';
import { IGalleryRepository } from '../repositories/IGalleryRepository';
import { Gallery } from '../entities/Gallery';

@injectable()
class GalleryService {
  constructor(
    @inject('GalleryRepository')
    private galleryRepository: IGalleryRepository,
    @inject('BucketStorage')
    private bucketStorage: IBucketStorage,
  ) {}

  async create(name: string): Promise<Gallery> {
    const gallery = new Gallery();

    gallery.name = name;

    return this.galleryRepository.save(gallery);
  }

  async list(): Promise<Gallery[]> {
    return this.galleryRepository.list();
  }

  async show(id: string): Promise<Gallery> {
    return this.galleryRepository.findById(id);
  }

  async updateName(id: string, name: string): Promise<void> {
    await this.galleryRepository.updateName(id, name);
  }

  async uploadImage(id: string, image_file: string): Promise<void> {
    validateUuid(id);

    await this.bucketStorage.save(image_file, `galeria`);

    await this.galleryRepository.updateUrl(id, image_file);
  }
}

export { GalleryService };
