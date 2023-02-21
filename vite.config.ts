import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import typescript from "@rollup/plugin-typescript";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

function resolve(str: string) {
  return path.resolve(__dirname, str);
}

export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin(),
    typescript({
      target: "es5",
      rootDir: resolve("packages/"),
      declaration: true,
      declarationDir: resolve("lib"),
      exclude: resolve("node_modules/**"),
      allowSyntheticDefaultImports: true,
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          "primary-color": "#3c55d8",
          "@ant-prefix": "custom-search",
        },
        javascriptEnabled: true,
      },
    },
  },
  server:{
    hmr:true,
  },
  build: {
    // cssCodeSplit: true,
    outDir: "lib",
    cssTarget: "chrome61",
    lib: {
      entry: resolve("packages/index.ts"),
      name: "index",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "react",
          "react-dom": "react-dom",
          window: "window",
        },
      },
    },
  },
});
