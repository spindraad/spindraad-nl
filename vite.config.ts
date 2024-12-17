/// <reference types="vitest" />
import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();

const isStorybook = process.argv[1]?.includes("storybook");

export default defineConfig({
  plugins: [!isStorybook && remix({
    future: {
      v3_routeConfig: false,
      v3_singleFetch: false,
      v3_throwAbortReason: true,
      v3_relativeSplatPath: true,
      v3_fetcherPersist: true,
      v3_lazyRouteDiscovery: true,
    }
  }), tsconfigPaths()],
  test: {}
});
