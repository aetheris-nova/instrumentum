import type { Meta, StoryObj } from '@storybook/react-vite';

// components
import LoadingModal from './LoadingModal';

const meta = {
  args: {
    open: true,
    message: 'The ship will undock shortly.',
    title: 'Undocking...',
  },
  component: LoadingModal,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Components/LoadingModal',
} satisfies Meta<typeof LoadingModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const TitleOnly: Story = {
  args: {
    message: undefined,
  },
};

export const WithoutTitle: Story = {
  args: {
    title: undefined,
  },
};

export const DarkMode: Story = {
  globals: {
    theme: 'dark',
  },
};
