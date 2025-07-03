import { Router } from 'express';
import { asyncHandler } from '../../shared/helpers/AsyncHandler';

import { TypeButonController } from '../client/controllers/TypeButonController';

const typeButonController = new TypeButonController();

const typeButonRoutes = Router();
typeButonRoutes.post('/', asyncHandler(typeButonController.create));
typeButonRoutes.get('/:id', asyncHandler(typeButonController.show));
typeButonRoutes.get('/list', asyncHandler(typeButonController.list));
typeButonRoutes.patch(
  '/update-name/:id',
  asyncHandler(typeButonController.updateName),
);
typeButonRoutes.patch(
  '/update-situation/:id',
  asyncHandler(typeButonController.updateSituation),
);

export { typeButonRoutes };
