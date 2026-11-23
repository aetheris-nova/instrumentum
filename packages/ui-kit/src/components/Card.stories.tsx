import { Text } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react-vite';

// components
import Card from './Card';

// constants
import { DEFAULT_GAP } from '@/constants';

const meta = {
  args: {
    borderWidth: 1,
    children: (
      <Text p={DEFAULT_GAP / 2}>Docked at Quantum Core. All systems nominal and the cargo hold is sealed.</Text>
    ),
    subtitle: 'Jita IV',
    title: 'Ship status',
    w: 400,
  },
  argTypes: {
    children: {
      control: false,
    },
  },
  component: Card,
  parameters: {
    layout: 'centered',
  },
  title: 'Components/Card',
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const TitleOnly: Story = {
  args: {
    subtitle: undefined,
  },
};

export const WithoutHeader: Story = {
  args: {
    subtitle: undefined,
    title: undefined,
  },
};

export const DarkMode: Story = {
  globals: {
    theme: 'dark',
  },
};
