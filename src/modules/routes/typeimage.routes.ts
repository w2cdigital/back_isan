import { Router } from 'express';
import { asyncHandler } from '../../shared/helpers/AsyncHandler';

import { TypeImageController } from '../client/controllers/TypeImageController';

const typeImageController = new TypeImageController();

const typeImageRoutes = Router();
typeImageRoutes.post('/', asyncHandler(typeImageController.create));
typeImageRoutes.get('/:id', asyncHandler(typeImageController.show));
typeImageRoutes.get('/', asyncHandler(typeImageController.list));
typeImageRoutes.patch(
  '/update-name/:id',
  asyncHandler(typeImageController.updateName),
);
typeImageRoutes.patch(
  '/update-situation/:id',
  asyncHandler(typeImageController.updateSituation),
);

export { typeImageRoutes };
