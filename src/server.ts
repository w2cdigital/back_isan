import 'reflect-metadata';
import './shared/container';
import dotenv from 'dotenv';
import cron from 'node-cron';
// import Queue from './modules/lib/Queue';
import express, { Request, Response, NextFunction } from 'express';
import { asyncHandler } from './shared/helpers/AsyncHandler';
import { container } from 'tsyringe';
import cors from 'cors';
import 'express-async-errors';
import { router } from './modules/routes';
import { AppError } from './shared/errors/AppError';

interface ErrorRequestHandler {
  (err: Error, request: Request, response: Response, next: NextFunction): void;
}

// initializeTransactionalContext({ storageDriver: StorageDriver.AUTO });

const app = express();

dotenv.config();

import './database';

app.use(express.json());
app.use(cors());

app.use(router);

const errorHandler: ErrorRequestHandler = (err, request, response, next) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      validateError: [{ constraints: { message: err.message } }],
    });
  }
  console.error(err);
  return response.status(500).json({
    status: 'error',
    message: `Internal server error - ${err.message}`,
  });
};

app.use(errorHandler);

app.listen(8080, () => {
  console.log('*'.repeat(50));
  console.log('Service running on port: 8080');
  console.log('*'.repeat(50));
});
