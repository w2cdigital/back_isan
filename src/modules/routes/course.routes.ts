import { Router } from 'express';
import { asyncHandler } from '../../shared/helpers/AsyncHandler';
import multer from 'multer';

import { CourseController } from '../client/controllers/CourseController';
import { uploadConfig } from '../../config/upload';

const courseController = new CourseController();

const uploadImage = multer(uploadConfig);

const courseRoutes = Router();
courseRoutes.post('/', asyncHandler(courseController.create));
courseRoutes.get('/list/:companyId', asyncHandler(courseController.list));
courseRoutes.get('/:id', asyncHandler(courseController.show));
courseRoutes.put('/:id', asyncHandler(courseController.update));
courseRoutes.patch(
  '/upload-image/:id',
  [uploadImage.single('image')],
  asyncHandler(courseController.uploadImage),
);
courseRoutes.patch(
  '/upload-situation/:id',
  asyncHandler(courseController.updateSituation),
);

export { courseRoutes };
