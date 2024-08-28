import type { Meta, StoryObj } from '@storybook/react';
import SiteNavigation from './SiteNavigation';

export default {
  title: 'Components/Site Navigation',
  component: SiteNavigation,
} satisfies Meta<typeof SiteNavigation>;

type Story = StoryObj<typeof SiteNavigation>;

export const Default: Story = {
  args: {

  },
};
