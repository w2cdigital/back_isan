import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../shared/errors/AppError';
import validateUuid from '../../../shared/helpers/ValidateUuid';
import { IBucketStorage } from '../../../shared/upload_buckets/BucketStorage';
import { ICourseRepository } from '../repositories/ICourseRepository';
import { Course } from '../entities/Course';
import { ICreateCourseDTO } from '../dtos/ICreateCourseDTO';

@injectable()
class CourseService {
  constructor(
    @inject('CourseRepository')
    private courseRepository: ICourseRepository,
    @inject('BucketStorage')
    private bucketStorage: IBucketStorage,
  ) {}

  async create(courseDTO: ICreateCourseDTO): Promise<Course> {
    const course = new Course();

    course.title = courseDTO.title;
    course.descriptive = courseDTO.descriptive;
    course.description = courseDTO.description;
    course.duration = courseDTO.duration;
    course.text = courseDTO.text;
    course.contrast = courseDTO.contrast;
    course.banner = courseDTO.banner;
    course.categoryCourseId = courseDTO.categoryCourseId;
    course.companyId = courseDTO.companyId;
    course.pageId = courseDTO.pageId;

    return this.courseRepository.save(course);
  }

  async update(id: string, courseDTO: ICreateCourseDTO): Promise<Course> {
    const course = await this.courseRepository.findById(id);

    course.title = courseDTO.title;
    course.descriptive = courseDTO.descriptive;
    course.description = courseDTO.description;
    course.duration = courseDTO.duration;
    course.text = courseDTO.text;
    course.contrast = courseDTO.contrast;
    course.banner = courseDTO.banner;
    course.categoryCourseId = courseDTO.categoryCourseId;
    course.companyId = courseDTO.companyId;
    course.pageId = courseDTO.pageId;

    return this.courseRepository.save(course);
  }

  async list(categoryId: string): Promise<Course[]> {
    return this.courseRepository.list(categoryId);
  }

  async show(id: string): Promise<Course> {
    return this.courseRepository.findById(id);
  }

  async findByPageId(pageId: string): Promise<Course> {
    return this.courseRepository.findByPageId(pageId);
  }

  async updateSituation(id: string, situation: boolean): Promise<void> {
    await this.courseRepository.updateSituation(id, situation);
  }

  async uploadImage(id: string, image_file: string): Promise<void> {
    validateUuid(id);

    await this.bucketStorage.save(image_file, `course`);

    await this.courseRepository.updateCapa(id, image_file);
  }
}

export { CourseService };
