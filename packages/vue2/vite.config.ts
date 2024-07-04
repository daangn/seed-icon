import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue2";
import { globSync } from "glob";
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      cleanVueFileName: true,
    }),
  ],
  build: {
    outDir: "lib",
    lib: {
      entry: [resolve(__dirname, "src/index.ts"), ...globSync("src/*.vue")],
      name: "SeedIcon",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
