import { AppError } from '../../shared/errors/AppError';
import { validate as uuidValidate } from 'uuid';

export default function validateUuid(id: string): void {
  if (!uuidValidate(id)) {
    throw new AppError('Id negado.', 400);
  }
}
