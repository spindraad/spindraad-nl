import type { Meta, StoryObj } from '@storybook/react';
import Pill from './Pill';
import { Colors } from '~/utils';

export default {
  title: 'Components/Pill',
  component: Pill,
} satisfies Meta<typeof Pill>;

type Story = StoryObj<typeof Pill>;

export const Default: Story = {
  args: {
    caption: 'A small caption here',
  },
};

export const WithColor: Story = {
  args: {
    caption: 'A small caption here',
    color: Colors.ACCENT_ORANGE,
  },
  argTypes: {
    color: {
      options: Object.values(Colors),
      control: {
        type: 'select',
      },
    },
  }
}
