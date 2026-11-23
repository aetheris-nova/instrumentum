import type { Meta, StoryObj } from '@storybook/react-vite';

// components
import Input from './Input';

const meta = {
  args: {
    placeholder: 'Quantum Core',
    size: 'xl',
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
  component: Input,
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
  title: 'Components/Input',
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    defaultValue: 'Quantum Core',
  },
};

export const Invalid: Story = {
  args: {
    defaultValue: 'Quantum Core',
    'aria-invalid': true,
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: 'Quantum Core',
    disabled: true,
  },
};

export const DarkMode: Story = {
  globals: {
    theme: 'dark',
  },
};
