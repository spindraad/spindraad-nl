import type { Meta, StoryObj } from '@storybook/react';
import Reviews from './Reviews';

export default {
  title: 'Templates/Reviews',
  component: Reviews,
} satisfies Meta<typeof Reviews>;

type Story = StoryObj<typeof Reviews>;

export const Default: Story = {
  args: {

  },
};
