import { Router } from 'express';
import { asyncHandler } from '../../shared/helpers/AsyncHandler';
import multer from 'multer';

import { ImageController } from '../client/controllers/ImageController';
import { uploadConfig } from '../../config/upload';

const imageController = new ImageController();

const uploadImage = multer(uploadConfig);

const imageRoutes = Router();
imageRoutes.post('/', asyncHandler(imageController.create));
imageRoutes.get('/list/:companyPageId', asyncHandler(imageController.list));
imageRoutes.get('/:id', asyncHandler(imageController.show));
imageRoutes.patch('/update-name/:id', asyncHandler(imageController.updateName));
imageRoutes.patch(
  '/update-situation/:id',
  asyncHandler(imageController.updateSituation),
);
imageRoutes.patch(
  '/upload-image/:id',
  [uploadImage.single('image')],
  asyncHandler(imageController.uploadImage),
);

export { imageRoutes };
