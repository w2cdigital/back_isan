import path, { dirname, resolve } from 'path';
import crypto from 'crypto';
import multer from 'multer';
import { AppError } from '../shared/errors/AppError';

const MAX_IMAGE_SIZE_FIVE_MEGABYTES = 5 * 1024 * 1024;

const ALLOWED_IMAGE_PATHS = [
  'image/jpeg',
  'image/jpg',
  'imege/pjpeg',
  'image/png',
  'image/gif',
  'image/svg',
  'image/ico',
];

const TMP_FOLDER = resolve(__dirname, '..', '..', 'tmp');

interface MulterConfig {
  TMP_FOLDER: string;
  storage: multer.StorageEngine;
  limits: {
    fileSize: number;
  };
  fileFilter: (
    req: Express.Request,
    file: Express.Multer.File,
    cb: (error: Error | null, acceptFile?: boolean) => void,
  ) => void;
}

const uploadConfig: MulterConfig = {
  TMP_FOLDER,
  storage: multer.diskStorage({
    destination: TMP_FOLDER,
    filename: (req, file, cb) => {
      const extFile = file.originalname.split('.')[1];
      const fileHash = crypto.randomBytes(16).toString('hex');
      const fileName = `${fileHash}.${extFile}`;
      return cb(null, fileName);
    },
  }),
  limits: {
    fileSize: MAX_IMAGE_SIZE_FIVE_MEGABYTES,
  },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (
      ext !== '.png' &&
      ext !== '.jpg' &&
      ext !== '.gif' &&
      ext !== '.jpeg' &&
      ext !== '.svg' &&
      ext !== '.ico' &&
      ext !== '.webp'
    ) {
      return cb(new Error('Somente Imagens permitidas'));
    }
    cb(null, true);
  },
};

export { uploadConfig };
