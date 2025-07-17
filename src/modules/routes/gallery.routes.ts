import { Router } from 'express';
import { asyncHandler } from '../../shared/helpers/AsyncHandler';
import multer from 'multer';

import { GalleryController } from '../client/controllers/GalleryController';
import { uploadConfig } from '../../config/upload';

const galleryController = new GalleryController();

const uploadImage = multer(uploadConfig);

const galleryRoutes = Router();
galleryRoutes.post('/', asyncHandler(galleryController.create));
galleryRoutes.get('/:id', asyncHandler(galleryController.show));
galleryRoutes.get('/', asyncHandler(galleryController.list));
galleryRoutes.patch(
  '/update-name/:id',
  asyncHandler(galleryController.updateName),
);
galleryRoutes.patch(
  '/upload-image/:id',
  [uploadImage.single('image')],
  asyncHandler(galleryController.uploadImage),
);

export { galleryRoutes };
