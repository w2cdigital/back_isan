import { Course } from '../entities/Course';

interface ICourseRepository {
  save(course: Course): Promise<Course>;
  list(companyId: string): Promise<Course[]>;
  findById(id: string): Promise<Course>;
  updateSituation(id: string, situation: boolean): Promise<void>;
  updateCapa(id: string, capa: string): Promise<void>;
}

export { ICourseRepository };
