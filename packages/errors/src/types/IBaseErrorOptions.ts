// enums
import { ErrorCodeEnum } from '@enums';

interface IBaseErrorOptions {
  code: ErrorCodeEnum;
  message?: string;
  reference: string;
}

export default IBaseErrorOptions;
