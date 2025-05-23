import { Router } from 'express';
import { companyRoutes } from './company.routes';
import { pageRoutes } from './page.routes';
import { menuRoutes } from './menu.routes';
import { typeTextRoutes } from './typetext.routes';
import { typeImageRoutes } from './typeimage.routes';
import { imageRoutes } from './image.routes';

const router = Router();

router.use('/company', companyRoutes);
router.use('/page', pageRoutes);
router.use('/menu', menuRoutes);
router.use('/type-text', typeTextRoutes);
router.use('/type-image', typeImageRoutes);
router.use('/image', imageRoutes);

export { router };
