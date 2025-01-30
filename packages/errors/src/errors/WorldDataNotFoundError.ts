// enums
import { ErrorCodeEnum } from '@enums';

// errors
import BaseError from './BaseError';

export default class WorldDataNotFoundError extends BaseError {
  constructor(message?: string) {
    super({
      code: ErrorCodeEnum.WorldDataNotFoundError,
      message,
      reference: 'WorldDataNotFoundError',
    });
  }
}
