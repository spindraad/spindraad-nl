import type { Meta, StoryObj } from '@storybook/react';
import SpindraadLogo from './SpindraadLogo';

export default {
  title: 'Components/spindraad Logo',
  component: SpindraadLogo,
} satisfies Meta<typeof SpindraadLogo>;

type Story = StoryObj<typeof SpindraadLogo>;

export const Default: Story = {
  args: {
    to: '#',
  },
};
