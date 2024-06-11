import type { Meta, StoryObj } from '@storybook/react';
import Contact from '~/components/Contact';

export default {
  title: 'Components/Contact',
  component: Contact,
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
} satisfies Meta<typeof Contact>;

type Story = StoryObj<typeof Contact>;

export const Default: Story = {
  args: {},
};
