// vite.config.ts
import { defineConfig } from "file:///F:/front/voile-ui/node_modules/.pnpm/vite@4.0.4/node_modules/vite/dist/node/index.js";
import vue from "file:///F:/front/voile-ui/node_modules/.pnpm/@vitejs+plugin-vue@4.0.0_vite@4.0.4+vue@3.2.45/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import * as path from "path";
import DefineOptions from "file:///F:/front/voile-ui/node_modules/.pnpm/unplugin-vue-define-options@1.1.3_vue@3.2.45/node_modules/unplugin-vue-define-options/dist/vite.mjs";
var __vite_injected_original_dirname = "F:\\front\\voile-ui\\play";
var vite_config_default = defineConfig({
  resolve: {
    //设置别名
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src")
    }
  },
  plugins: [vue(), DefineOptions()],
  server: {
    port: 8080,
    //启动端口
    hmr: {
      host: "127.0.0.1",
      port: 8080
    },
    // 设置 https 代理
    proxy: {
      "/api": {
        target: "127.0.0.1",
        changeOrigin: true,
        rewrite: (path2) => path2.replace(/^\/api/, "")
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxmcm9udFxcXFx2b2lsZS11aVxcXFxwbGF5XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxmcm9udFxcXFx2b2lsZS11aVxcXFxwbGF5XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9mcm9udC92b2lsZS11aS9wbGF5L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IERlZmluZU9wdGlvbnMgZnJvbSAndW5wbHVnaW4tdnVlLWRlZmluZS1vcHRpb25zL3ZpdGUnO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcmVzb2x2ZToge1xuICAgIC8vXHU4QkJFXHU3RjZFXHU1MjJCXHU1NDBEXG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpLFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFt2dWUoKSwgRGVmaW5lT3B0aW9ucygpXSxcbiAgc2VydmVyOiB7XG4gICAgcG9ydDogODA4MCwgLy9cdTU0MkZcdTUyQThcdTdBRUZcdTUzRTNcbiAgICBobXI6IHtcbiAgICAgIGhvc3Q6ICcxMjcuMC4wLjEnLFxuICAgICAgcG9ydDogODA4MCxcbiAgICB9LFxuICAgIC8vIFx1OEJCRVx1N0Y2RSBodHRwcyBcdTRFRTNcdTc0MDZcbiAgICBwcm94eToge1xuICAgICAgJy9hcGknOiB7XG4gICAgICAgIHRhcmdldDogJzEyNy4wLjAuMScsXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgICAgcmV3cml0ZTogKHBhdGg6IHN0cmluZykgPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpLywgJycpLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTRQLFNBQVMsb0JBQW9CO0FBQ3pSLE9BQU8sU0FBUztBQUNoQixZQUFZLFVBQVU7QUFDdEIsT0FBTyxtQkFBbUI7QUFIMUIsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBO0FBQUEsSUFFUCxPQUFPO0FBQUEsTUFDTCxLQUFVLGFBQVEsa0NBQVcsS0FBSztBQUFBLElBQ3BDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUyxDQUFDLElBQUksR0FBRyxjQUFjLENBQUM7QUFBQSxFQUNoQyxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQSxJQUNOLEtBQUs7QUFBQSxNQUNILE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSO0FBQUE7QUFBQSxJQUVBLE9BQU87QUFBQSxNQUNMLFFBQVE7QUFBQSxRQUNOLFFBQVE7QUFBQSxRQUNSLGNBQWM7QUFBQSxRQUNkLFNBQVMsQ0FBQ0EsVUFBaUJBLE1BQUssUUFBUSxVQUFVLEVBQUU7QUFBQSxNQUN0RDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsicGF0aCJdCn0K
