// enums
import { ErrorCodeEnum } from '@enums';

// errors
import BaseError from './BaseError';

export default class NoAccountConnectedError extends BaseError {
  constructor(message?: string) {
    super({
      code: ErrorCodeEnum.NoAccountConnectedError,
      message,
      reference: 'NoAccountConnectedError',
    });
  }
}
