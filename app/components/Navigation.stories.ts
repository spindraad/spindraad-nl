import type { Meta, StoryObj } from '@storybook/react';
import Navigation, { NavigationItem } from './Navigation';

export default {
  title: 'Components/Navigation',
  component: Navigation,
} satisfies Meta<typeof Navigation>;

type Story = StoryObj<typeof Navigation>;

const items: NavigationItem[] = [
  {
    label: 'Diensten',
    href: '#diensten',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const Horizontal: Story = {
  args: {
    items,
  },
};

export const Vertical: Story = {
  args: {
    items,
    orientation: 'vertical',
  },
};

export const LargerFont: Story = {
  args: {
    items,
    size: 'md',
  }
}
