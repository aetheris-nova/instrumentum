// enums
import { ErrorCodeEnum } from '@enums';

// errors
import BaseError from './BaseError';

export default class UnknownError extends BaseError {
  constructor(message?: string) {
    super({
      code: ErrorCodeEnum.UnknownError,
      message,
      reference: 'UnknownError',
    });
  }
}
