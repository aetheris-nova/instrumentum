import type { Meta, StoryObj } from '@storybook/react-vite';

// components
import PulseLoader from './PulseLoader';

const meta = {
  args: {
    size: 'md',
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
    },
  },
  component: PulseLoader,
  parameters: {
    layout: 'centered',
  },
  title: 'Components/PulseLoader',
} satisfies Meta<typeof PulseLoader>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ExtraSmall: Story = {
  args: {
    size: 'xs',
  },
};

export const Large: Story = {
  args: {
    size: 'xl',
  },
};

export const DarkMode: Story = {
  globals: {
    theme: 'dark',
  },
};

export default meta;
