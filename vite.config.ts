import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import mdx from '@mdx-js/rollup';

declare module "@remix-run/server-runtime" {
  // or cloudflare, deno, etc.
  interface Future {
    v3_singleFetch: true;
  }
}


const isStorybook = process.argv[1]?.includes("storybook");

export default defineConfig({
  plugins: [mdx(), !isStorybook && remix({
    future: {
      v3_routeConfig: true,
      v3_singleFetch: true,
      v3_throwAbortReason: true,
      v3_relativeSplatPath: true,
      v3_fetcherPersist: true,
      v3_lazyRouteDiscovery: true,
    }
  }), tsconfigPaths()],
  test: {}
});
