import type { Meta, StoryObj } from '@storybook/react';
import Prose from './Prose';

export default {
  title: 'Atoms/Prose',
  component: Prose,
} satisfies Meta<typeof Prose>;

type Story = StoryObj<typeof Prose>;

export const Default: Story = {
  render: () => (
    <Prose>
      <h1>This is a title</h1>
      <p>
        This is a paragraph of text inside a <code>Prose</code> component.
      </p>
    </Prose>
  ),
};
