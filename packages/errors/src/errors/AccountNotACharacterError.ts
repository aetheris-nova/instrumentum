// enums
import { ErrorCodeEnum } from '@enums';

// errors
import BaseError from './BaseError';

// types
import type { IAccountNotACharacterErrorOptions } from '@types';

export default class AccountNotACharacterError extends BaseError {
  public readonly address: string;

  constructor({ address, message }: IAccountNotACharacterErrorOptions) {
    super({
      code: ErrorCodeEnum.AccountNotACharacterError,
      message,
      reference: 'AccountNotACharacterError',
    });

    this.address = address;
  }
}
