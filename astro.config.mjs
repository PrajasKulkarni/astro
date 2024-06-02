import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()]
});

// tailwind cli and any other dependecies will be put here 
// our whole code will be goiung in src