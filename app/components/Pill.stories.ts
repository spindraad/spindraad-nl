import type { Meta, StoryObj } from '@storybook/react';
import Pill from './Pill';

export default {
  title: 'Atoms/Pill',
  component: Pill,
} satisfies Meta<typeof Pill>;

type Story = StoryObj<typeof Pill>;

export const Default: Story = {
  args: {
    children: 'A small caption here',
  },
};

export const WithColor: Story = {
  args: {
    children: 'A small caption here',
    color: 'accent-orange',
  },
  argTypes: {
    color: {
      options: ['deep-blue', 'vibrant-teal', 'soft-gray', 'crisp-white', 'accent-orange'],
      control: {
        type: 'select',
      },
    },
  }
}
