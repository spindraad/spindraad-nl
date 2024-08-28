import type { Meta, StoryObj } from '@storybook/react';
import HeadQuarterNavigation from './HeadQuarterNavigation';

export default {
  title: 'Components/HQ Navigation',
  component: HeadQuarterNavigation,
} satisfies Meta<typeof HeadQuarterNavigation>;

type Story = StoryObj<typeof HeadQuarterNavigation>;

export const Default: Story = {
  args: {

  },
};
