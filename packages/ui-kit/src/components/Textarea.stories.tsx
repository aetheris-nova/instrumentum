import type { Meta, StoryObj } from '@storybook/react-vite';

// components
import Textarea from './Textarea';

const meta = {
  args: {
    placeholder: 'Log the flight plan...',
    rows: 4,
    size: 'xl',
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
  component: Textarea,
  decorators: [
    (Story) => (
      <div style={{ width: 400 }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  title: 'Components/Textarea',
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    defaultValue: 'Jump to Jita IV, refuel, then return to Quantum Core.',
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: 'Jump to Jita IV, refuel, then return to Quantum Core.',
    disabled: true,
  },
};

export const DarkMode: Story = {
  globals: {
    theme: 'dark',
  },
};
