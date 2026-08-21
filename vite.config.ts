import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/portfolio/",
  build: {
    target: "es2020",
    minify: "terser",
    cssMinify: true,
    copyPublicDir: !isSsrBuild,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500,
    ...(isSsrBuild
      ? {}
      : {
          rollupOptions: {
            input: {
              main: path.resolve(__dirname, "index.html"),
              resume: path.resolve(__dirname, "resume/index.html"),
            },
          },
        }),
  },
}));
