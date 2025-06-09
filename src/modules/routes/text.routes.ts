import { Router } from 'express';
import { asyncHandler } from '../../shared/helpers/AsyncHandler';

import { TextController } from '../client/controllers/TextController';

const textController = new TextController();

const textRoutes = Router();
textRoutes.post('/', asyncHandler(textController.create));
textRoutes.get('/list/:companyPageId', asyncHandler(textController.list));
textRoutes.get('/:id', asyncHandler(textController.show));
textRoutes.patch(
  '/update-description/:id',
  asyncHandler(textController.updateDescription),
);
textRoutes.patch(
  '/update-situation/:id',
  asyncHandler(textController.updateSituation),
);

export { textRoutes };
