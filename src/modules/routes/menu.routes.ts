import { Router } from 'express';
import { asyncHandler } from '../../shared/helpers/AsyncHandler';

import { MenuController } from '../client/controllers/MenuController';

const menuController = new MenuController();

const menuRoutes = Router();
menuRoutes.post('/', asyncHandler(menuController.create));
menuRoutes.get('/list/:companyId', asyncHandler(menuController.list));
menuRoutes.get('/:id', asyncHandler(menuController.show));
menuRoutes.patch('/update-name/:id', asyncHandler(menuController.updateName));
menuRoutes.patch(
  '/update-situation/:id',
  asyncHandler(menuController.updateSituation),
);

export { menuRoutes };
