import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
  server: {
    proxy: {
      "/unsplash-api": {
        target: "https://api.unsplash.com/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/unsplash-api/, ""),
      },
    },
  },
  envDir: "./src",
});
