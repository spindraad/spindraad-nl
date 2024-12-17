import type { Meta, StoryObj } from '@storybook/react';
import SpindraadCaption from './SpindraadCaption';

export default {
  title: 'Atoms/spindraad Caption',
  component: SpindraadCaption,
} satisfies Meta<typeof SpindraadCaption>;

type Story = StoryObj<typeof SpindraadCaption>;

export const Default: Story = {
  args: {},
};
