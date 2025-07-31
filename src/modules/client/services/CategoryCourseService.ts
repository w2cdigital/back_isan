import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../shared/errors/AppError';
import validateUuid from '../../../shared/helpers/ValidateUuid';
import { ICategoryCourseRepository } from '../repositories/ICategoryCourseRepository';
import { ICreateButonDTO } from '../dtos/ICreateButonDTO';
import { Buton } from '../entities/Buton';
import { CategoryCourse } from '../entities/CategoryCourse';
import { IBucketStorage } from '../../../shared/upload_buckets/BucketStorage';
import { ICreateCategoryCourseDTO } from '../dtos/ICreateCategoryCourseDTO';

@injectable()
class CategoryCourseService {
  constructor(
    @inject('CategoryCourseRepository')
    private categoryCourseRepository: ICategoryCourseRepository,
    @inject('BucketStorage')
    private bucketStorage: IBucketStorage,
  ) {}

  async create(categoryDTO: ICreateCategoryCourseDTO): Promise<CategoryCourse> {
    const categoryCourse = new CategoryCourse();

    categoryCourse.title = categoryDTO.title;
    categoryCourse.color = categoryDTO.color;
    categoryCourse.description = categoryDTO.description;
    categoryCourse.referenceId = categoryDTO.referenceId;
    categoryCourse.companyId = categoryDTO.companyId;
    categoryCourse.pageId = categoryDTO.pageId;
    categoryCourse.link = categoryDTO.link;

    return this.categoryCourseRepository.save(categoryCourse);
  }

  async update(
    id: string,
    categoryDTO: ICreateCategoryCourseDTO,
  ): Promise<CategoryCourse> {
    const categoryCourse = await this.categoryCourseRepository.findById(id);

    categoryCourse.title = categoryDTO.title;
    categoryCourse.color = categoryDTO.color;
    categoryCourse.description = categoryDTO.description;
    categoryCourse.referenceId = categoryDTO.referenceId;
    categoryCourse.pageId = categoryDTO.pageId;
    categoryCourse.link = categoryDTO.link;

    return this.categoryCourseRepository.save(categoryCourse);
  }

  async list(companyId: string): Promise<CategoryCourse[]> {
    return this.categoryCourseRepository.list(companyId);
  }

  async show(id: string): Promise<CategoryCourse> {
    return this.categoryCourseRepository.findById(id);
  }

  async updateSituation(id: string, situation: boolean): Promise<void> {
    await this.categoryCourseRepository.updateSituation(id, situation);
  }

  async updateOrder(id: string, order: number): Promise<void> {
    await this.categoryCourseRepository.updateOrder(id, order);
  }

  async findByPageId(pageId: string): Promise<CategoryCourse> {
    return this.categoryCourseRepository.findByPageId(pageId);
  }

  async findByReferenceId(referenceId: string): Promise<CategoryCourse[]> {
    return this.categoryCourseRepository.findByReferenceId(referenceId);
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
