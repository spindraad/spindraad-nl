import type { Meta, StoryObj } from '@storybook/react';
import Navigation from './Navigation';

export default {
  title: 'Molecules/Site Navigation',
  component: Navigation,
} satisfies Meta<typeof Navigation>;

type Story = StoryObj<typeof Navigation>;

export const Horizontal: Story = {
  args: {},
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
};

export const LargerFont: Story = {
  args: {
    size: 'md',
  }
}
