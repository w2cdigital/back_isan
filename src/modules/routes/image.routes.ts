import { Router } from 'express';
import { asyncHandler } from '../../shared/helpers/AsyncHandler';

import { ImageController } from '../client/controllers/ImageController';

const imageController = new ImageController();

const imageRoutes = Router();
imageRoutes.post('/', asyncHandler(imageController.create));
imageRoutes.get('/list/:pageId', asyncHandler(imageController.list));
imageRoutes.get('/:id', asyncHandler(imageController.show));
imageRoutes.patch('/update-name/:id', asyncHandler(imageController.updateName));
imageRoutes.patch(
  '/update-situation/:id',
  asyncHandler(imageController.updateSituation),
);

export { imageRoutes };
