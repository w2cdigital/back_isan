import { Router } from 'express';
import { asyncHandler } from '../../shared/helpers/AsyncHandler';

// import uploadConfig from '../../config/upload';

import { CompanyController } from '../client/controllers/CompanyController';
import multer from 'multer';
import { uploadConfig } from '../../config/upload';

const companyController = new CompanyController();

const companyRoutes = Router();
const uploadImage = multer(uploadConfig);

companyRoutes.post('/', asyncHandler(companyController.create));
companyRoutes.get('/:id', asyncHandler(companyController.show));
companyRoutes.get('/', asyncHandler(companyController.list));
companyRoutes.put('/:id', asyncHandler(companyController.update));
companyRoutes.patch(
  '/update-situation/:id',
  asyncHandler(companyController.updateSituation),
);
companyRoutes.patch(
  '/upload-image/:id',
  [uploadImage.single('image')],
  asyncHandler(companyController.uploadImage),
);

export { companyRoutes };
