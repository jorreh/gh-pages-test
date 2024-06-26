import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/gh-pages-test/",
  root: "/",
  publicDir: "/public/",
  entry: "/main.js",
  build: {
    sourcemap: true,
  },
});
