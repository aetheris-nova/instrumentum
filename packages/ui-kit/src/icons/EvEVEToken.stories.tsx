import type { Meta, StoryObj } from '@storybook/react-vite';

// components
import EvEVEToken from './EvEVEToken';

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
  component: EvEVEToken,
  parameters: {
    layout: 'centered',
  },
  title: 'Icons/EvEVEToken',
} satisfies Meta<typeof EvEVEToken>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DarkMode: Story = {
  globals: {
    theme: 'dark',
  },
};

export default meta;
