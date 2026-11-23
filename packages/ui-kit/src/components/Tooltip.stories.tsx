import type { Meta, StoryObj } from '@storybook/react-vite';

// components
import Button from './Button';
import Tooltip from './Tooltip';

const meta = {
  args: {
    children: <Button>Dock ship</Button>,
    content: 'Docking requires a clear approach vector.',
    open: true,
    portalled: true,
  },
  argTypes: {
    children: {
      control: false,
    },
    content: {
      control: 'text',
    },
  },
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  title: 'Components/Tooltip',
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The stories pin the tooltip open so it is visible without hovering - in use it opens on hover
 * after a 300ms delay.
 */
export const Default: Story = {};

export const WithArrow: Story = {
  args: {
    showArrow: true,
  },
};

export const OnHover: Story = {
  args: {
    open: undefined,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DarkMode: Story = {
  globals: {
    theme: 'dark',
  },
};
