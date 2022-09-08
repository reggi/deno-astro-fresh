import { defineConfig } from 'astro/config';
import deno from "@astrojs/deno";

// https://astro.build/config
export default defineConfig({
  root: "./astro",
  srcDir: "../astro",
  publicDir: "../astro/public",
  output: 'server',
  adapter: deno({
    start: false
  })
});