import { EnumTypePage } from '../enum/EnumTypePage';

interface ICreatePageDTO {
  name: string;
  slug: string;
  typePage: EnumTypePage;
  companyIds: string[];
}
export { ICreatePageDTO };
