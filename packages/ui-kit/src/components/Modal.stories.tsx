import { Text } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react-vite';

// components
import Button from './Button';
import Modal from './Modal';

const meta = {
  args: {
    body: <Text>The ship will be undocked and all crew returned to the station.</Text>,
    closeButton: true,
    open: true,
    subtitle: 'Quantum Core - Jita IV',
    title: 'Undock ship',
  },
  argTypes: {
    body: {
      control: false,
    },
    footer: {
      control: false,
    },
  },
  component: Modal,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const TitleOnly: Story = {
  args: {
    subtitle: undefined,
  },
};

export const WithTwoFooterButtons: Story = {
  args: {
    footer: [
      <Button key="cancel" scheme="secondary">Cancel</Button>,
      <Button key="confirm">Undock</Button>,
    ],
  },
};

export const WithThreeFooterButtons: Story = {
  args: {
    footer: [
      <Button key="cancel" scheme="secondary">Cancel</Button>,
      <Button key="save" scheme="secondary">Save for later</Button>,
      <Button key="confirm">Undock</Button>,
    ],
  },
};

export const WithoutHeader: Story = {
  args: {
    closeButton: false,
    subtitle: undefined,
    title: undefined,
  },
};

export const DarkMode: Story = {
  globals: {
    theme: 'dark',
  },
};
