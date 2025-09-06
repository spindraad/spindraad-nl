import type { Meta, StoryObj } from '@storybook/react';
import CoursePromo from '~/components/CoursePromo';

export default {
  title: 'Templates/Course Promo',
  component: CoursePromo,
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
} satisfies Meta<typeof CoursePromo>;

type Story = StoryObj<typeof CoursePromo>;

export const Default: Story = {
  args: {}
}
