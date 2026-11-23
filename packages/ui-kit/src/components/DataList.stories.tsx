import type { Meta, StoryObj } from '@storybook/react-vite';

// components
import DataList from './DataList';
import DataListItem from './DataListItem';

const meta = {
  args: {
    children: (
      <>
        <DataListItem label="Ship" value="Quantum Core" />
        <DataListItem label="Fuel" value="842 units" />
        <DataListItem copyText="0x4a9f3c" label="Address" value="0x4a9f3c" />
      </>
    ),
    orientation: 'horizontal',
    size: 'md',
    w: 400,
  },
  argTypes: {
    children: {
      control: false,
    },
    orientation: {
      control: 'inline-radio',
      options: ['horizontal', 'vertical'],
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
  },
  component: DataList,
  parameters: {
    layout: 'centered',
  },
  title: 'Components/DataList',
} satisfies Meta<typeof DataList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DarkMode: Story = {
  globals: {
    theme: 'dark',
  },
};
