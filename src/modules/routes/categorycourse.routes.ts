import { Router } from 'express';
import { asyncHandler } from '../../shared/helpers/AsyncHandler';
import multer from 'multer';

import { CategoryCourseController } from '../client/controllers/CategoryCourseController';
import { uploadConfig } from '../../config/upload';

const categoryCourseController = new CategoryCourseController();

const uploadImage = multer(uploadConfig);

const categoryCourseRoutes = Router();
categoryCourseRoutes.post('/', asyncHandler(categoryCourseController.create));
categoryCourseRoutes.get(
  '/list/:companyId',
  asyncHandler(categoryCourseController.list),
);
categoryCourseRoutes.get('/:id', asyncHandler(categoryCourseController.show));
categoryCourseRoutes.put('/:id', asyncHandler(categoryCourseController.update));
categoryCourseRoutes.patch(
  '/update-title/:id',
  asyncHandler(categoryCourseController.updateTitle),
);
categoryCourseRoutes.patch(
  '/update-situation/:id',
  asyncHandler(categoryCourseController.updateSituation),
);
categoryCourseRoutes.patch(
  '/upload-image/:id',
  [uploadImage.single('image')],
  asyncHandler(categoryCourseController.uploadImage),
);

export { categoryCourseRoutes };
