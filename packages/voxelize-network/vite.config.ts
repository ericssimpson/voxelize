import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "voxelize-network",
      fileName(format) {
        if (format === "es") {
          return "index.js";
        }

        return "voxelize-network.umd.cjs";
      },
      formats: ["es", "umd"],
    },
    emptyOutDir: false,
  },
  plugins: [dts()],
});