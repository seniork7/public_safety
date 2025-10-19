import { defineConfig } from 'tailwindcss';
import flowbitePlugin from 'flowbite/plugin';

export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbitePlugin,
  ],
});
