import type { Meta, StoryObj } from '@storybook/react';
import Services from './Services';

export default {
  title: 'Organisms/Services',
  component: Services,
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
} satisfies Meta<typeof Services>;

type Story = StoryObj<typeof Services>;

export const Default: Story = {
  args: {},
};
