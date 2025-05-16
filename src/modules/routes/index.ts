import { Router } from 'express';
import { companyRoutes } from './company.routes';
import { pageRoutes } from './page.routes';

const router = Router();

router.use('/company', companyRoutes);
router.use('/page', pageRoutes);

export { router };
