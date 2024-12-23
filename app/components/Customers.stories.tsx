import type { Meta, StoryObj } from '@storybook/react';
import Customers from './Customers';

export default {
  title: 'Templates/Customers',
  component: Customers,
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
} satisfies Meta<typeof Customers>;

type Story = StoryObj<typeof Customers>;

export const Default: Story = {
  args: {},
};
