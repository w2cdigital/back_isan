import { container, inject, injectable } from 'tsyringe';
import { AppError } from '../../../shared/errors/AppError';
import validateUuid from '../../../shared/helpers/ValidateUuid';
import { IPageRepository } from '../repositories/IPageRepository';
import { Page } from '../entities/Page';
import { ICreatePageDTO } from '../dtos/ICreatePageDTO';
import { CompanyPage } from '../entities/CompanyPage';
import { IResponsePageDTO } from '../dtos/IResponsePageDTO';
import { Course } from '../entities/Course';
import { CourseService } from './CourseService';
import { CategoryCourse } from '../entities/CategoryCourse';
import { CategoryCourseService } from './CategoryCourseService';

@injectable()
class PageService {
  constructor(
    @inject('PageRepository')
    private pageRepository: IPageRepository,
  ) {}

  async create(pageDTO: ICreatePageDTO): Promise<Page> {
    const page = new Page();

    page.name = pageDTO.name;
    page.slug = pageDTO.slug;
    page.typePage = pageDTO.typePage;

    page.companyPage = pageDTO.companyIds.map((companyId) => {
      const companyPage = new CompanyPage();
      companyPage.companyId = companyId;
      companyPage.pageId = page.id;

      return companyPage;
    });

    return this.pageRepository.save(page);
  }

  async update(id: string, pageDTO: ICreatePageDTO): Promise<void> {
    const page = await this.pageRepository.findById(id);

    page.name = pageDTO.name;
    page.slug = pageDTO.slug;
    page.typePage = pageDTO.typePage;

    await this.pageRepository.save(page);
  }

  async list(
    offset: number,
    limit: number,
    companyId?: string,
    situation?: boolean,
    input?: string,
  ): Promise<IResponsePageDTO[]> {
    return this.pageRepository.list(offset, limit, companyId, situation, input);
  }

  async show(id: string): Promise<Page> {
    return this.pageRepository.findById(id);
  }

  async findCourseByPageId(pageId: string): Promise<Course> {
    const service = container.resolve(CourseService);
    return service.findByPageId(pageId);
  }

  async findCategoryCourseByPageId(pageId: string): Promise<CategoryCourse> {
    const service = container.resolve(CategoryCourseService);
    return service.findByPageId(pageId);
  }

  async slug(slug: string): Promise<Page> {
    return this.pageRepository.findBySlug(slug);
  }

  async updateSituation(id: string, situation: boolean): Promise<void> {
    await this.pageRepository.updateSituation(id, situation);
  }
}

export { PageService };
