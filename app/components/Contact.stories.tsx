import type { Meta, StoryObj } from '@storybook/react';
import Contact, { ActionData } from '~/components/Contact';

export default {
  title: 'Components/Contact',
  component: Contact,
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
} satisfies Meta<typeof Contact>;

type Story = StoryObj<typeof Contact>;

export const Default: Story = {
  args: {
    action: '/api/contact',
    // @ts-ignore
    remixStub: {
      initialEntries: ['/'],
      routes: [
        {
          path: '/',
        },
        {
          path: '/api/contact',
          action: async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            const data: ActionData = {
              success: true,
            }
            return data;
          }
        }
      ]
    }
  },
};

export const WithError: Story = {
  args: {
    action: '/api/contact',
    // @ts-ignore
    remixStub: {
      initialEntries: ['/'],
      routes: [
        {
          path: '/',
        },
        {
          path: '/api/contact',
          action: async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            const data: ActionData = {
              success: false,
              errors: {
                name: 'Name is required',
                email: 'Email is required',
                brief: 'Message is required',
                budget: 'Budget is required',
              }
            }
            return data;
          }
        }
      ]
    }
  },
};
