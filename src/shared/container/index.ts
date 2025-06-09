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

container.registerSingleton<ICompanyRepository>(
  'CompanyRepository',
  delay(() => CompanyRepository),
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

container.registerSingleton<IImageRepository>(
  'ImageRepository',
  delay(() => ImageRepository),
);
