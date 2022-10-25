// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import typescript from "@rollup/plugin-typescript";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
function resolve(str) {
  return path.resolve("D:\\cl\\react-component", str);
}
var vite_config_default = defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin(),
    typescript({
      target: "es5",
      rootDir: resolve("packages/"),
      declaration: true,
      declarationDir: resolve("lib"),
      exclude: resolve("node_modules/**"),
      allowSyntheticDefaultImports: true
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  build: {
    outDir: "lib",
    cssTarget: "chrome61",
    lib: {
      entry: resolve("packages/index.ts"),
      name: "index",
      fileName: "index"
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          "react": "react",
          "react-dom": "react-dom",
          "window": "window"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XHJcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IHR5cGVzY3JpcHQgZnJvbSBcIkByb2xsdXAvcGx1Z2luLXR5cGVzY3JpcHRcIjtcclxuaW1wb3J0IGNzc0luamVjdGVkQnlKc1BsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1jc3MtaW5qZWN0ZWQtYnktanMnXHJcblxyXG5mdW5jdGlvbiByZXNvbHZlKHN0cjogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIHBhdGgucmVzb2x2ZShcIkQ6XFxcXGNsXFxcXHJlYWN0LWNvbXBvbmVudFwiLCBzdHIpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHJlYWN0KCksXHJcbiAgICBjc3NJbmplY3RlZEJ5SnNQbHVnaW4oKSxcclxuICAgIHR5cGVzY3JpcHQoe1xyXG4gICAgICB0YXJnZXQ6IFwiZXM1XCIsXHJcbiAgICAgIHJvb3REaXI6IHJlc29sdmUoXCJwYWNrYWdlcy9cIiksXHJcbiAgICAgIGRlY2xhcmF0aW9uOiB0cnVlLFxyXG4gICAgICBkZWNsYXJhdGlvbkRpcjogcmVzb2x2ZShcImxpYlwiKSxcclxuICAgICAgZXhjbHVkZTogcmVzb2x2ZShcIm5vZGVfbW9kdWxlcy8qKlwiKSxcclxuICAgICAgYWxsb3dTeW50aGV0aWNEZWZhdWx0SW1wb3J0czogdHJ1ZSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgY3NzOiB7XHJcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XHJcbiAgICAgIGxlc3M6IHtcclxuICAgICAgICBqYXZhc2NyaXB0RW5hYmxlZDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBidWlsZDoge1xyXG4gICAgLy8gY3NzQ29kZVNwbGl0OiB0cnVlLFxyXG4gICAgb3V0RGlyOiBcImxpYlwiLFxyXG4gICAgY3NzVGFyZ2V0OiBcImNocm9tZTYxXCIsXHJcbiAgICBsaWI6IHtcclxuICAgICAgZW50cnk6IHJlc29sdmUoXCJwYWNrYWdlcy9pbmRleC50c1wiKSxcclxuICAgICAgbmFtZTogXCJpbmRleFwiLFxyXG4gICAgICBmaWxlTmFtZTogJ2luZGV4J1xyXG4gICAgfSxcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgZXh0ZXJuYWw6IFtcInJlYWN0XCIsIFwicmVhY3QtZG9tXCJdLFxyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICBnbG9iYWxzOiB7XHJcbiAgICAgICAgICBcInJlYWN0XCI6IFwicmVhY3RcIixcclxuICAgICAgICAgIFwicmVhY3QtZG9tXCI6IFwicmVhY3QtZG9tXCIsXHJcbiAgICAgICAgICBcIndpbmRvd1wiOiAnd2luZG93J1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQUEsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLDJCQUEyQjtBQUVsQyxTQUFTLFFBQVEsS0FBYTtBQUM1QixTQUFPLEtBQUssUUFBUSwyQkFBMkIsR0FBRztBQUNwRDtBQUVBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLHNCQUFzQjtBQUFBLElBQ3RCLFdBQVc7QUFBQSxNQUNULFFBQVE7QUFBQSxNQUNSLFNBQVMsUUFBUSxXQUFXO0FBQUEsTUFDNUIsYUFBYTtBQUFBLE1BQ2IsZ0JBQWdCLFFBQVEsS0FBSztBQUFBLE1BQzdCLFNBQVMsUUFBUSxpQkFBaUI7QUFBQSxNQUNsQyw4QkFBOEI7QUFBQSxJQUNoQyxDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gscUJBQXFCO0FBQUEsTUFDbkIsTUFBTTtBQUFBLFFBQ0osbUJBQW1CO0FBQUEsTUFDckI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBRUwsUUFBUTtBQUFBLElBQ1IsV0FBVztBQUFBLElBQ1gsS0FBSztBQUFBLE1BQ0gsT0FBTyxRQUFRLG1CQUFtQjtBQUFBLE1BQ2xDLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxJQUNaO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsU0FBUyxXQUFXO0FBQUEsTUFDL0IsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLFVBQ1AsU0FBUztBQUFBLFVBQ1QsYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBLFFBQ1o7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
