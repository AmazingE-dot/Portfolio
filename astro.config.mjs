import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://amazingE-dot.github.io/Portfolio/',
  base: '/Portfolio/',
  vite: {
    plugins: [tailwindcss()],
  },
});
