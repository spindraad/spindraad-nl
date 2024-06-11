import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header,
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
} satisfies Meta<typeof Header>;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {},
};
