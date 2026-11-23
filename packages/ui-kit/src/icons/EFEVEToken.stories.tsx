import type { Meta, StoryObj } from '@storybook/react-vite';

// components
import EFEVEToken from './EFEVEToken';

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
  component: EFEVEToken,
  parameters: {
    layout: 'centered',
  },
  title: 'Icons/EFEVEToken',
} satisfies Meta<typeof EFEVEToken>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DarkMode: Story = {
  globals: {
    theme: 'dark',
  },
};

export default meta;
