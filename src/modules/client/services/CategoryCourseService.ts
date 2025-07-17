import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../shared/errors/AppError';
import validateUuid from '../../../shared/helpers/ValidateUuid';
import { ICategoryCourseRepository } from '../repositories/ICategoryCourseRepository';
import { ICreateButonDTO } from '../dtos/ICreateButonDTO';
import { Buton } from '../entities/Buton';
import { CategoryCourse } from '../entities/CategoryCourse';
import { IBucketStorage } from '../../../shared/upload_buckets/BucketStorage';

@injectable()
class CategoryCourseService {
  constructor(
    @inject('CategoryCourseRepository')
    private categoryCourseRepository: ICategoryCourseRepository,
    @inject('BucketStorage')
    private bucketStorage: IBucketStorage,
  ) {}

  async create(title: string): Promise<CategoryCourse> {
    const categoryCourse = new CategoryCourse();

    categoryCourse.title = title;

    return this.categoryCourseRepository.save(categoryCourse);
  }

  async list(): Promise<CategoryCourse[]> {
    return this.categoryCourseRepository.list();
  }

  async show(id: string): Promise<CategoryCourse> {
    return this.categoryCourseRepository.findById(id);
  }

  async updateSituation(id: string, situation: boolean): Promise<void> {
    await this.categoryCourseRepository.updateSituation(id, situation);
  }

  async updateTitle(id: string, title: string): Promise<void> {
    await this.categoryCourseRepository.updateTitle(id, title);
  }

  async uploadImage(id: string, image_file: string): Promise<void> {
    validateUuid(id);

    await this.bucketStorage.save(image_file, `category_course`);

    await this.categoryCourseRepository.updateImage(id, image_file);
  }
}

export { CategoryCourseService };
