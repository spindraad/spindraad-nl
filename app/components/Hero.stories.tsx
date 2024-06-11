import type { Meta, StoryObj } from '@storybook/react';
import Hero from './Hero';

export default {
  title: 'Components/Hero',
  component: Hero,
  decorators: [
    (Story) => (
      <div style={{ width: '100%' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Hero>;

type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {},
};
