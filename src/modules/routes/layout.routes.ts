import { Router } from 'express';
import { asyncHandler } from '../../shared/helpers/AsyncHandler';

import { LayoutController } from '../client/controllers/LayoutController';

const layoutController = new LayoutController();

const layoutRoutes = Router();

layoutRoutes.post('/', asyncHandler(layoutController.create));
layoutRoutes.patch(
  '/update-json/:id',
  asyncHandler(layoutController.updateJson),
);
layoutRoutes.get('/list/:companyPageId', asyncHandler(layoutController.list));
layoutRoutes.get('/:id', asyncHandler(layoutController.show));

export { layoutRoutes };
