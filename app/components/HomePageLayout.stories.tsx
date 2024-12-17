import type { Meta, StoryObj } from '@storybook/react';
import HomePageLayout from './HomePageLayout';
import Services from '~/components/Services';

export default {
  title: 'Pages/Home Page Layout',
  component: HomePageLayout,
  parameters: {
    layout: 'fullscreen',
  }
} satisfies Meta<typeof HomePageLayout>;

type Story = StoryObj<typeof HomePageLayout>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Services/>
      </>
    )
  },
};
