import type { Meta, StoryObj } from '@storybook/react-vite';

// components
import Field from './Field';
import Input from './Input';

const meta = {
  args: {
    children: <Input placeholder="Quantum Core" />,
    label: 'Ship name',
  },
  argTypes: {
    children: {
      control: false,
    },
  },
  component: Field,
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
  title: 'Components/Field',
} satisfies Meta<typeof Field>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithHelperText: Story = {
  args: {
    helperText: 'Shown to other pilots in the system.',
  },
};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const Optional: Story = {
  args: {
    optionalText: '(optional)',
  },
};

export const Invalid: Story = {
  args: {
    errorText: 'A ship name is required.',
    invalid: true,
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
