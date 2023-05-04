import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  css: {
    devSourcemap: true,
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ['MDBCollapse'].includes(tag),
        }
      }
    })
  ],
});
