/// <reference types="vitest" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import DefineOptions from 'unplugin-vue-define-options/vite';

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue',
    },
  },
};

export default defineConfig({
  plugins: [vue(), DefineOptions()],
  // ...
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom',
    // 支持tsx组件，很关键
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },

  build: {
    rollupOptions,
    minify: false,
    lib: {
      entry: './packages/components/index.ts',
      name: 'VOILEUI',
      fileName: 'voile-ui',
      // 导出模块格式
      formats: ['es', 'umd', 'iife'],
    },
  },
});
