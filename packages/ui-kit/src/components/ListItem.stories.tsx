import { Icon } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { GrSatellite } from 'react-icons/gr';

// components
import ListItem from './ListItem';

// icons
import { ANPortaeAstralesIcon } from '@/icons';

const meta = {
  args: {
    title: 'Quantum Core',
  },
  argTypes: {
    icon: {
      control: false,
    },
    link: {
      control: false,
    },
  },
  component: ListItem,
  decorators: [
    (Story) => (
      <div style={{ width: 500 }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  title: 'Components/ListItem',
} satisfies Meta<typeof ListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithSubtitle: Story = {
  args: {
    subtitle: 'Docked at Jita IV',
  },
};

export const WithSecondaryColumn: Story = {
  args: {
    secondarySubtitle: '842 units',
    secondaryTitle: 'Fuel',
    subtitle: 'Docked at Jita IV',
  },
};

export const WithIcon: Story = {
  args: {
    icon: <ANPortaeAstralesIcon />,
    secondarySubtitle: '842 units',
    secondaryTitle: 'Fuel',
    subtitle: 'Docked at Jita IV',
  },
};

export const WithLibraryIcon: Story = {
  args: {
    icon: (
      <Icon>
        <GrSatellite />
      </Icon>
    ),
    secondarySubtitle: '842 units',
    secondaryTitle: 'Fuel',
    subtitle: 'Docked at Jita IV',
  },
};

export const WithExternalLink: Story = {
  args: {
    isExternalLink: true,
    link: 'https://www.evefrontier.com',
    subtitle: 'Docked at Jita IV',
  },
};

export const DarkMode: Story = {
  globals: {
    theme: 'dark',
  },
};
