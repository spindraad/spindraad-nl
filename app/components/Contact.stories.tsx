import type { Meta, StoryObj } from '@storybook/react';
import Contact, { ContactFormActionData } from '~/components/Contact';

export default {
  title: 'Organisms/Contact',
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
    remixStub: {
      initialEntries: ['/'],
      routes: [
        {
          path: '/',
          action: async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            const data: ContactFormActionData = {
              success: true,
              values: {
                name: 'John Doe',
                email: '',
                brief: 'This is a message',
                deadline: '',
                budget: '',
              }
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
    remixStub: {
      initialEntries: ['/'],
      routes: [
        {
          path: '/',
          action: async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            const data: ContactFormActionData = {
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
