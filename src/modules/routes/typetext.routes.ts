import { Router } from 'express';
import { asyncHandler } from '../../shared/helpers/AsyncHandler';

import { TypeTextController } from '../client/controllers/TypeTextController';

const typeTextController = new TypeTextController();

const typeTextRoutes = Router();
typeTextRoutes.post('/', asyncHandler(typeTextController.create));
typeTextRoutes.get('/:id', asyncHandler(typeTextController.show));
typeTextRoutes.get('/', asyncHandler(typeTextController.list));
typeTextRoutes.patch(
  '/update-name/:id',
  asyncHandler(typeTextController.updateName),
);
typeTextRoutes.patch(
  '/update-situation/:id',
  asyncHandler(typeTextController.updateSituation),
);

export { typeTextRoutes };
