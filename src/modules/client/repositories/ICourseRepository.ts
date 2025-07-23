import { Course } from '../entities/Course';

interface ICourseRepository {
  save(course: Course): Promise<Course>;
  list(categoryId: string): Promise<Course[]>;
  findById(id: string): Promise<Course>;
  findByPageId(pageId: string): Promise<Course>;
  updateSituation(id: string, situation: boolean): Promise<void>;
  updateCapa(id: string, capa: string): Promise<void>;
}

export { ICourseRepository };
