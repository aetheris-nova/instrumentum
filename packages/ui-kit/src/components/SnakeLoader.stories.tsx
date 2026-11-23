import type { Meta, StoryObj } from '@storybook/react-vite';

// components
import SnakeLoader from './SnakeLoader';

const meta = {
  args: {
    duration: 1.6,
    size: 'md',
  },
  argTypes: {
    duration: {
      control: { max: 5, min: 0.4, step: 0.2, type: 'range' },
    },
    size: {
      control: 'inline-radio',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
    },
  },
  component: SnakeLoader,
  parameters: {
    layout: 'centered',
  },
  title: 'Components/SnakeLoader',
} satisfies Meta<typeof SnakeLoader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Large: Story = {
  args: {
    size: '2xl',
  },
};

export const Slow: Story = {
  args: {
    duration: 3.2,
  },
};

export const Fast: Story = {
  args: {
    duration: 0.8,
  },
};

export const DarkMode: Story = {
  globals: {
    theme: 'dark',
  },
};
