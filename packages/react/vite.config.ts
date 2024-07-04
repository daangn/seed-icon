import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import { globSync } from "glob";
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({}),
    dts({}),
  ],
  build: {
    outDir: "lib",
    lib: {
      entry: [resolve(__dirname, "src/index.ts"), ...globSync("src/*.tsx")],
      name: "SeedIcon",
    },
  },
});
