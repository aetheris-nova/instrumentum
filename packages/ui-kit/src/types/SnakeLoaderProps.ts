// types
import type Sizes from './Sizes';

export interface Props {
  /**
   * The duration of one full lap, in seconds. Defaults to 1.6.
   */
  duration?: number;
  /**
   * The size of a single dot - the square the dots travel around is five dots wide. Defaults to
   * "md".
   */
  size?: Sizes;
}

type SnakeLoaderProps = Props;

export default SnakeLoaderProps;
