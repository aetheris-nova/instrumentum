import { HStack, Text } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react-vite';

// components
import InfoTip from './InfoTip';

const meta = {
  args: {
    children: 'Fuel is consumed on every jump.',
    open: true,
    portalled: true,
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'The content of the tip.',
    },
  },
  component: InfoTip,
  decorators: [
    (Story) => (
      <HStack>
        <Text>Fuel</Text>

        <Story />
      </HStack>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  title: 'Components/InfoTip',
} satisfies Meta<typeof InfoTip>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The stories pin the tip open so it is visible - in use it opens when the icon is clicked.
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
