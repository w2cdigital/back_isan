import { Router } from 'express';
import { companyRoutes } from './company.routes';
import { pageRoutes } from './page.routes';
import { menuRoutes } from './menu.routes';
import { typeTextRoutes } from './typetext.routes';
import { typeImageRoutes } from './typeimage.routes';
import { imageRoutes } from './image.routes';
import { textRoutes } from './text.routes';
import { typeButonRoutes } from './typebuton.routes';
import { butonRoutes } from './buton.routes';

const router = Router();

router.use('/company', companyRoutes);
router.use('/page', pageRoutes);
router.use('/menu', menuRoutes);
router.use('/type-text', typeTextRoutes);
router.use('/type-buton', typeButonRoutes);
router.use('/text', textRoutes);
router.use('/type-image', typeImageRoutes);
router.use('/image', imageRoutes);
router.use('/buton', butonRoutes);

export { router };
