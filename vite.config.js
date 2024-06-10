import { defineConfig } from 'vite'
import { resolve } from 'path'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import react from '@vitejs/plugin-react';

// vite.config.js

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react()
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss(resolve('./tailwind.config.js')),
        autoprefixer
      ]
    }
  }
})
