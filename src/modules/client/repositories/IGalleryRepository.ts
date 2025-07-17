import { Gallery } from '../entities/Gallery';

interface IGalleryRepository {
  save(gallery: Gallery): Promise<Gallery>;
  list(): Promise<Gallery[]>;
  findById(id: string): Promise<Gallery>;
  updateName(id: string, name: string): Promise<void>;
  updateUrl(id: string, url: string): Promise<void>;
}

export { IGalleryRepository };
