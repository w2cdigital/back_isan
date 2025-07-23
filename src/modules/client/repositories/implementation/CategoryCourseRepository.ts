import { AppDataSource } from '../../../../database';
import { Repository } from 'typeorm';
import { CategoryCourse } from '../../entities/CategoryCourse';
import { ICategoryCourseRepository } from '../ICategoryCourseRepository';

class CategoryCourseRepository implements ICategoryCourseRepository {
  private repository: Repository<CategoryCourse>;

  constructor() {
    this.repository = AppDataSource.getRepository(CategoryCourse);
  }

  async updateTitle(id: string, title: string): Promise<void> {
    await this.repository.update(id, { title });
  }

  async save(categoryCourse: CategoryCourse): Promise<CategoryCourse> {
    return this.repository.save(categoryCourse);
  }

  async list(companyId: string): Promise<CategoryCourse[]> {
    return this.repository.find({ where: { companyId } });
  }

  async findById(id: string): Promise<CategoryCourse> {
    return this.repository.findOne({ where: { id } });
  }

  async updateSituation(id: string, situation: boolean): Promise<void> {
    await this.repository.update(id, { situation });
  }

  async updateImage(id: string, image: string): Promise<void> {
    await this.repository.update(id, { image });
  }
}

export { CategoryCourseRepository };
