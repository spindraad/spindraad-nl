import type { Meta, StoryObj } from '@storybook/react';
import Anchor from './Anchor';

export default {
  title: 'Atoms/Anchor',
  component: Anchor,
} satisfies Meta<typeof Anchor>;

type Story = StoryObj<typeof Anchor>;

export const Default: Story = {
  args: {
    external: false,
    href: '#',
    children: 'Dit is een link',
  },
};

export const External: Story = {
  args: {
    external: true,
    href: 'https://www.google.com',
    children: 'Dit is een externe link',
  },
}

export const InitiallyHideUnderline: Story = {
  args: {
    external: false,
    href: '#',
    children: 'Dit is een link',
    initiallyHideUnderline: true,
  },
}
