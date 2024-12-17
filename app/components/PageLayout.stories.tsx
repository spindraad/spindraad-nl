import type { Meta, StoryObj } from '@storybook/react';
import PageLayout from './PageLayout';

export default {
  title: 'Pages/Generic Page',
  component: PageLayout,
  parameters: {
    layout: 'fullscreen',
  }
} satisfies Meta<typeof PageLayout>;

type Story = StoryObj<typeof PageLayout>;

export const Default: Story = {
  args: {
    children: (
      <>
        <h1 className="text-2xl font-bold">Hello, world!</h1>
        <p>This is a generic page.</p>
      </>
    )
  },
};
