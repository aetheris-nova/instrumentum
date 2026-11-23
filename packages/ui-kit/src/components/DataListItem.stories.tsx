import type { Meta, StoryObj } from '@storybook/react-vite';

// components
import DataList from './DataList';
import DataListItem from './DataListItem';

const meta = {
  args: {
    label: 'Ship',
    value: 'Quantum Core',
  },
  component: DataListItem,
  decorators: [
    (Story) => (
      <DataList w={400}>
        <Story />
      </DataList>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  title: 'Components/DataListItem',
} satisfies Meta<typeof DataListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCopyButton: Story = {
  args: {
    copyText: '0x4a9f3c8e21b7d5a0',
    label: 'Address',
    value: '0x4a9f3c8e21b7d5a0',
  },
};

export const WithInfoTip: Story = {
  args: {
    info: 'Fuel is consumed on every jump.',
    label: 'Fuel',
    value: '842 units',
  },
};

export const Grow: Story = {
  args: {
    grow: true,
  },
};

export const DarkMode: Story = {
  globals: {
    theme: 'dark',
  },
};
