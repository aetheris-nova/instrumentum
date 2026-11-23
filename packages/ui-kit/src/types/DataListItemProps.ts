import { DataList as ChakraDataList } from '@chakra-ui/react';
import type { ReactNode } from 'react';

export interface Props {
  copyText?: string;
  grow?: boolean;
  info?: ReactNode;
  label: ReactNode;
  value: ReactNode;
}

type DataListItemProps = ChakraDataList.ItemProps & Props;

export default DataListItemProps;
