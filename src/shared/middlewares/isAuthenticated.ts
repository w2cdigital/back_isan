import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '../../config/auth';
import { AppError } from '../../shared/errors/AppError';

export default function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Não autorizado', 400);
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoden = verify(token, authConfig.jwt.secret);

    return next();
  } catch (error) {
    throw new AppError('Invalido JWT token', 400);
  }
}
