import { Layout } from '../entities/Layout';

interface ILayoutRepository {
  save(layout: Layout): Promise<Layout>;
  list(companyPageId: string): Promise<Layout[]>;
  findById(id: string): Promise<Layout>;
  updateJson(id: string, json: Record<string, any>): Promise<void>;
}

export { ILayoutRepository };
