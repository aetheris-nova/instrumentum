import type { Meta, StoryObj } from '@storybook/react-vite';

// components
import EvGas from './EvGas';

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
  component: EvGas,
  parameters: {
    layout: 'centered',
  },
  title: 'Icons/EvGas',
} satisfies Meta<typeof EvGas>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DarkMode: Story = {
  globals: {
    theme: 'dark',
  },
};

export default meta;
