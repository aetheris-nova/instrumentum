import type { Meta, StoryObj } from '@storybook/react-vite';

// components
import Button from './Button';
import ToggleTip from './ToggleTip';

const meta = {
  args: {
    children: <Button>Fuel</Button>,
    content: 'Fuel is consumed on every jump.',
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
  component: ToggleTip,
  parameters: {
    layout: 'centered',
  },
  title: 'Components/ToggleTip',
} satisfies Meta<typeof ToggleTip>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The stories pin the toggle tip open so it is visible - in use it opens when the trigger is
 * clicked.
 */
export const Default: Story = {};

export const WithArrow: Story = {
  args: {
    showArrow: true,
  },
};

export const OnClick: Story = {
  args: {
    open: undefined,
  },
};

export const DarkMode: Story = {
  globals: {
    theme: 'dark',
  },
};
