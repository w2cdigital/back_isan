import { container, delay } from 'tsyringe';

import { ICompanyRepository } from '../../modules/client/repositories/ICompanyRepository';
import { CompanyRepository } from '../../modules/client/repositories/implementation/CompanyRepository';
import { IPageRepository } from '../../modules/client/repositories/IPageRepository';
import { PageRepository } from '../../modules/client/repositories/implementation/PageRepository';

container.registerSingleton<ICompanyRepository>(
  'CompanyRepository',
  delay(() => CompanyRepository),
);

container.registerSingleton<IPageRepository>(
  'PageRepository',
  delay(() => PageRepository),
);
