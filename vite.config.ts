import { reactRouter } from '@react-router/dev/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import mdx from '@mdx-js/rollup';

const isStorybook = process.argv[1]?.includes('storybook');

export default defineConfig({
  plugins: [ mdx(), !isStorybook && reactRouter(), tsconfigPaths() ],
  test: {}
});
