import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  site: 'https://amazingE-dot.github.io/Portfolio/',
  base: '/Portfolio/',
  }
});
