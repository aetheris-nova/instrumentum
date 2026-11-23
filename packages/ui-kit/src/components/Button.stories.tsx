import type { Meta, StoryObj } from '@storybook/react-vite';

// components
import Button from './Button';

const meta = {
  args: {
    children: 'Dock ship',
    colorMode: 'light',
    disabled: false,
    scheme: 'primary',
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'The label. It is upper-cased by the component.',
    },
    colorMode: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
    scheme: {
      control: 'inline-radio',
      options: ['primary', 'secondary'],
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'ghost', 'subtle', 'surface', 'plain'],
    },
  },
  component: Button,
  parameters: {
    layout: 'centered',
  },
  title: 'Components/Button',
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    scheme: 'secondary',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const DarkMode: Story = {
  args: {
    colorMode: 'dark',
  },
  globals: {
    theme: 'dark',
  },
};
