// enums
import { ErrorCodeEnum } from '@enums';

// types
import type { IBaseErrorOptions } from '@types';

export default abstract class BaseError extends Error {
  public readonly code: ErrorCodeEnum;
  public readonly isAtherisNovaError = true;
  public readonly reference: string;

  protected constructor({ code, reference, message }: IBaseErrorOptions) {
    super(message);

    this.code = code;
    this.reference = reference;
  }
}
