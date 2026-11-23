import type { Meta, StoryObj } from '@storybook/react-vite';

// components
import EFGas from './EFGas';

const meta = {
  args: {
    size: 'md',
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
  component: EFGas,
  parameters: {
    layout: 'centered',
  },
  title: 'Icons/EFGas',
} satisfies Meta<typeof EFGas>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DarkMode: Story = {
  globals: {
    theme: 'dark',
  },
};

export default meta;
