import type { Meta, StoryObj } from '@storybook/react-vite';

// components
import IconButton from './IconButton';

// icons
import { EvGas } from '@/icons';

const meta = {
  args: {
    'aria-label': 'Refuel ship',
    children: <EvGas />,
    disabled: false,
    scheme: 'primary',
  },
  argTypes: {
    children: {
      control: false,
      description: 'The icon to render.',
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
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  title: 'Components/IconButton',
} satisfies Meta<typeof IconButton>;

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
  globals: {
    theme: 'dark',
  },
};

export default meta;
