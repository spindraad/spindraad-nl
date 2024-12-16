import type { Meta, StoryObj } from '@storybook/react';
import Portfolio from './Portfolio';

export default {
  title: 'Organisms/Portfolio',
  component: Portfolio,
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
} satisfies Meta<typeof Portfolio>;

type Story = StoryObj<typeof Portfolio>;

export const Default: Story = {
  args: {},
};
