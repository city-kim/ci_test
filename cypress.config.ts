import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}",
    defaultCommandTimeout: 6000,
  },
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },
});
