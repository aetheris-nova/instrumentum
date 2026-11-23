import type { Meta, StoryObj } from '@storybook/react-vite';

// components
import Button from './Button';
import EmptyState from './EmptyState';

// icons
import { EFGas } from '@/icons';

const meta = {
  args: {
    title: 'No ships docked',
  },
  argTypes: {
    icon: {
      control: false,
    },
  },
  component: EmptyState,
  parameters: {
    layout: 'centered',
  },
  title: 'Components/EmptyState',
} satisfies Meta<typeof EmptyState>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDescription: Story = {
  args: {
    description: 'Dock a ship at this station to see it listed here.',
  },
};

export const WithIcon: Story = {
  args: {
    description: 'Dock a ship at this station to see it listed here.',
    icon: <EFGas />,
  },
};

export const WithAction: Story = {
  args: {
    children: <Button>Dock ship</Button>,
    description: 'Dock a ship at this station to see it listed here.',
    icon: <EFGas />,
  },
};

export const DarkMode: Story = {
  globals: {
    theme: 'dark',
  },
};
