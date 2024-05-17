import { defineConfig } from "vite";
import dotenv from "dotenv";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
// https://vitejs.dev/config/
dotenv.config();
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  // test: {},
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        manualChunks: {
          _redirects: ["_redirects.html"],
        },
      },
    },
  },
});
