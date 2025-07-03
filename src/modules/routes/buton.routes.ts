import { Router } from 'express';
import { asyncHandler } from '../../shared/helpers/AsyncHandler';

import { ButonController } from '../client/controllers/ButonController';

const butonController = new ButonController();

const butonRoutes = Router();
butonRoutes.post('/', asyncHandler(butonController.create));
butonRoutes.get('/list/:companyPageId', asyncHandler(butonController.list));
butonRoutes.get('/:id', asyncHandler(butonController.show));
butonRoutes.patch(
  '/update-description/:id',
  asyncHandler(butonController.updateDescription),
);
butonRoutes.patch(
  '/update-situation/:id',
  asyncHandler(butonController.updateSituation),
);

export { butonRoutes };
