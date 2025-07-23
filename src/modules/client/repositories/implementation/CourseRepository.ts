import { AppDataSource } from '../../../../database';
import { Repository } from 'typeorm';
import { IGalleryRepository } from '../IGalleryRepository';
import { Course } from '../../entities/Course';
import { ICourseRepository } from '../ICourseRepository';

class CourseRepository implements ICourseRepository {
  private repository: Repository<Course>;

  constructor() {
    this.repository = AppDataSource.getRepository(Course);
  }

  async save(course: Course): Promise<Course> {
    return this.repository.save(course);
  }

  async list(categoryId: string): Promise<Course[]> {
    return this.repository.find({
      where: { categoryCourseId: categoryId },
    });
  }

  async findById(id: string): Promise<Course> {
    return this.repository.findOne({
      where: { id },
    });
  }

  async updateSituation(id: string, situation: boolean): Promise<void> {
    await this.repository.update(id, { situation });
  }

  async updateCapa(id: string, capa: string): Promise<void> {
    await this.repository.update(id, { capa });
  }
}

export { CourseRepository };
