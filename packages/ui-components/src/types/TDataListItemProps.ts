import { DataList as ChakraDataList } from '@chakra-ui/react';
import type { ReactNode } from 'react';

export interface IDataListItemProps extends ChakraDataList.ItemProps {
  copyText?: string;
  grow?: boolean;
  info?: ReactNode;
  label: ReactNode;
  value: ReactNode;
}

type TDataListItemProps = ChakraDataList.ItemProps & IDataListItemProps;

export default TDataListItemProps;
