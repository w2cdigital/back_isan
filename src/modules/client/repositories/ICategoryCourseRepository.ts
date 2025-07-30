import { CategoryCourse } from '../entities/CategoryCourse';

interface ICategoryCourseRepository {
  save(categoryCourse: CategoryCourse): Promise<CategoryCourse>;
  list(companyId: string): Promise<CategoryCourse[]>;
  findById(i: string): Promise<CategoryCourse>;
  findByPageId(pageId: string): Promise<CategoryCourse>;
  findByReferenceId(referenceId: string): Promise<CategoryCourse[]>;
  updateSituation(id: string, situation: boolean): Promise<void>;
  updateImage(id: string, image: string): Promise<void>;
  updateTitle(id: string, title: string): Promise<void>;
}

export { ICategoryCourseRepository };
