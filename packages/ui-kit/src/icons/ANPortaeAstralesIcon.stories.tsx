import type { Meta, StoryObj } from '@storybook/react-vite';

// components
import ANPortaeAstralesIcon from './ANPortaeAstralesIcon';

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
  component: ANPortaeAstralesIcon,
  parameters: {
    layout: 'centered',
  },
  title: 'Icons/ANPortaeAstralesIcon',
} satisfies Meta<typeof ANPortaeAstralesIcon>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DarkMode: Story = {
  globals: {
    theme: 'dark',
  },
};

export default meta;
