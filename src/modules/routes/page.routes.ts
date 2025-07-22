import { Router } from 'express';
import { asyncHandler } from '../../shared/helpers/AsyncHandler';

import { PageController } from '../client/controllers/PageController';

const pageController = new PageController();

const pageRoutes = Router();
pageRoutes.post('/', asyncHandler(pageController.create));
pageRoutes.get('/search-slug', asyncHandler(pageController.slug));
pageRoutes.get('/:id', asyncHandler(pageController.show));
pageRoutes.get('/', asyncHandler(pageController.list));
pageRoutes.put('/:id', asyncHandler(pageController.update));
pageRoutes.patch(
  '/update-situation/:id',
  asyncHandler(pageController.updateSituation),
);

export { pageRoutes };
