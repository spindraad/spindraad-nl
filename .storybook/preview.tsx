import type { Preview } from "@storybook/react";
import { createRemixStub } from '@remix-run/testing';

import '../app/tailwind.css';

const preview: Preview = {
  parameters: {

    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    deepControls: { enabled: true },
    layout: 'centered',
    backgrounds: {
      default: 'crisp-white',
      values: [
        { name:'deep-blue', value: '#003366' },
        { name:'vibrant-teal', value: '#30D5C8' },
        { name:'soft-gray', value: '#F4F4F4' },
        { name:'crisp-white', value: '#FFFFFF' },
        { name:'accent-orange', value: '#FF7043' },
      ],
    },
    docs: {
      toc: true,
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Documentation', 'Components'],
        locale: 'en-US',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    // Enable Remix stubbing for routes, for the components that depend on them.
    (story, context) => {
      const routes = context.args.remixStub?.routes ?? [{ path: '/' }];
      const initialEntries = context.args.remixStub?.initialEntries ?? ['/'];

      const RemixStub = createRemixStub(
        routes.map((route: any) => ({
          ...route,
          Component() {
            return story();
          },
        }))
      );

      return <RemixStub initialEntries={initialEntries} />;
    },
  ]
};

export default preview;
