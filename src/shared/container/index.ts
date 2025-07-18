import { container, delay } from 'tsyringe';

import { ICompanyRepository } from '../../modules/client/repositories/ICompanyRepository';
import { CompanyRepository } from '../../modules/client/repositories/implementation/CompanyRepository';
import { IPageRepository } from '../../modules/client/repositories/IPageRepository';
import { PageRepository } from '../../modules/client/repositories/implementation/PageRepository';
import { IMenuRepository } from '../../modules/client/repositories/IMenuRepository';
import { MenuRepository } from '../../modules/client/repositories/implementation/MenuRepository';
import { ITypeTextRepository } from '../../modules/client/repositories/ITypeTextRepository';
import { TypeTextRepository } from '../../modules/client/repositories/implementation/TypeTextRepository';
import { ITypeImageRepository } from '../../modules/client/repositories/ITypeImageRepository';
import { TypeImageRepository } from '../../modules/client/repositories/implementation/TypeImageRepository';
import { IImageRepository } from '../../modules/client/repositories/IImageRepository';
import { ImageRepository } from '../../modules/client/repositories/implementation/ImageRepository';
import { ITextRepository } from '../../modules/client/repositories/ITextRepository';
import { TextRepository } from '../../modules/client/repositories/implementation/TextRepository';
import { ITypeButonRepository } from '../../modules/client/repositories/ITypeButonRepository';
import { TypeButonRepository } from '../../modules/client/repositories/implementation/TypeButonRepository';
import { IButonRepository } from '../../modules/client/repositories/IButonRepository';
import { ButonRepository } from '../../modules/client/repositories/implementation/ButonRepository';
import {
  BucketStorage,
  IBucketStorage,
} from '../../shared/upload_buckets/BucketStorage';
import { ICategoryCourseRepository } from '../../modules/client/repositories/ICategoryCourseRepository';
import { CategoryCourseRepository } from '../../modules/client/repositories/implementation/CategoryCourseRepository';
import { ILayoutRepository } from '../../modules/client/repositories/ILayoutRepository';
import { LayoutRepository } from '../../modules/client/repositories/implementation/LayoutRepository';
import { IGalleryRepository } from '../../modules/client/repositories/IGalleryRepository';
import { GalleryRepository } from '../../modules/client/repositories/implementation/GalleryRepository';
import { ICourseRepository } from '../../modules/client/repositories/ICourseRepository';
import { CourseRepository } from '../../modules/client/repositories/implementation/CourseRepository';

container.registerSingleton<ICompanyRepository>(
  'CompanyRepository',
  delay(() => CompanyRepository),
);

container.registerSingleton<IBucketStorage>(
  'BucketStorage',
  delay(() => BucketStorage),
);

container.registerSingleton<IPageRepository>(
  'PageRepository',
  delay(() => PageRepository),
);

container.registerSingleton<IMenuRepository>(
  'MenuRepository',
  delay(() => MenuRepository),
);

container.registerSingleton<ITypeTextRepository>(
  'TypeTextRepository',
  delay(() => TypeTextRepository),
);

container.registerSingleton<ITextRepository>(
  'TextRepository',
  delay(() => TextRepository),
);

container.registerSingleton<ITypeImageRepository>(
  'TypeImageRepository',
  delay(() => TypeImageRepository),
);

container.registerSingleton<ITypeButonRepository>(
  'TypeButonRepository',
  delay(() => TypeButonRepository),
);

container.registerSingleton<IImageRepository>(
  'ImageRepository',
  delay(() => ImageRepository),
);

container.registerSingleton<IButonRepository>(
  'ButonRepository',
  delay(() => ButonRepository),
);

container.registerSingleton<ICategoryCourseRepository>(
  'CategoryCourseRepository',
  delay(() => CategoryCourseRepository),
);

container.registerSingleton<ILayoutRepository>(
  'LayoutRepository',
  delay(() => LayoutRepository),
);

container.registerSingleton<IGalleryRepository>(
  'GalleryRepository',
  delay(() => GalleryRepository),
);

container.registerSingleton<ICourseRepository>(
  'CourseRepository',
  delay(() => CourseRepository),
);
