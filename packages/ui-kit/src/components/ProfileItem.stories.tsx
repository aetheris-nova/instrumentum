import { Ed25519Keypair } from '@mysten/sui/keypairs/ed25519';
import { parseToMist } from '@mysten/sui/utils';
import type { Meta, StoryObj } from '@storybook/react-vite';
import BigNumber from 'bignumber.js';

// components
import ProfileItem from './ProfileItem';

const meta = {
  args: {
    address: new Ed25519Keypair().toSuiAddress(),
    balance: new BigNumber(parseToMist('2.5687675').toString()),
    name: 'Cassian Vael',
    onDisconnect: () => {},
  },
  component: ProfileItem,
  parameters: {
    layout: 'centered',
  },
  title: 'Components/ProfileItem',
} satisfies Meta<typeof ProfileItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLongName: Story = {
  args: {
    name: 'Very Loooooooooooooooooooog Name',
  },
};

export const WithNoName: Story = {
  args: {
    name: undefined,
  },
};

export const DarkMode: Story = {
  globals: {
    theme: 'dark',
  },
};
