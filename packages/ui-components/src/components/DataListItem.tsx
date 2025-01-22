import { DataList as ChakraDataList, HStack, useClipboard } from '@chakra-ui/react';
import {
  forwardRef,
  useMemo,
} from 'react';
import { GrCheckmark, GrCopy } from 'react-icons/gr';

// components
import IconButton from '@components/IconButton';
import InfoTip from '@components/InfoTip';

// types
import type { TDataListItemProps } from '@types';

const DataListItem = forwardRef<HTMLDivElement, TDataListItemProps>(({
  children,
  copyText,
  grow,
  info,
  label,
  value,
  ...otherProps
}, ref) => {
  const {
    copied,
    copy,
  } = useClipboard({
    value: copyText,
  });
  // memos
  const minHeight = useMemo(() => 8, []);
  // handlers
  const handleOnCopyClick = () => copy();

  return (
    <ChakraDataList.Item minH={minHeight} ref={ref} {...otherProps}>
      <ChakraDataList.ItemLabel flex={grow ? '1' : undefined}>
        {label}
        {info && (
          <InfoTip>
            {info}
          </InfoTip>
        )}
      </ChakraDataList.ItemLabel>

      <ChakraDataList.ItemValue flex={grow ? '1' : undefined} justifyContent="flex-end" wordBreak="break-all">
        <HStack gap={1}>
          {value}

          {copyText && (
            <IconButton
              minH={minHeight}
              minW={minHeight}
              onClick={handleOnCopyClick}
              scheme="secondary"
              size="xs"
              variant="ghost"
            >
              {copied ? (
                <GrCheckmark />
              ) : (
                <GrCopy />
              )}
            </IconButton>
          )}
        </HStack>
      </ChakraDataList.ItemValue>

      {children}
    </ChakraDataList.Item>
  );
});

DataListItem.displayName = 'DataListItem';

export default DataListItem;
