import type { Meta, StoryObj } from '@storybook/react';
import Message from './Message';

export default {
  title: 'Atoms/Message',
  component: Message,
} satisfies Meta<typeof Message>;

type Story = StoryObj<typeof Message>;

export const Default: Story = {
  args: {
    children: 'This is a message',
  },
};

export const Success: Story = {
  args: {
    children: 'This is a success message',
    variant: 'success',
  },
};

export const Error: Story = {
  args: {
    children: 'This is an error message',
    variant: 'error',
  },
};

export const Neutral: Story = {
  args: {
    children: 'This is a neutral message',
    variant: 'neutral',
  },
};

export const Outline: Story = {
  args: {
    children: 'This is an outlined message',
    variant: 'outline',
  },
};
