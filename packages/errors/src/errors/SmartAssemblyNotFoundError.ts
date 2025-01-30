// enums
import { ErrorCodeEnum } from '@enums';

// errors
import BaseError from './BaseError';

// types
import type { ISmartAssemblyNotFoundErrorOptions } from '@types';

export default class SmartAssemblyNotFoundError extends BaseError {
  public readonly id: string | null;

  constructor({ id, message }: ISmartAssemblyNotFoundErrorOptions = {}) {
    super({
      code: ErrorCodeEnum.SmartAssemblyNotFoundError,
      message,
      reference: 'SmartAssemblyNotFoundError',
    });

    this.id = id || null;
  }
}
