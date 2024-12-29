import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite 配置
export default defineConfig({
  // 插件配置
  plugins: [react()],
  
  // 基础路径配置
  base: '/',
  
  // 构建配置
  build: {
    // 输出目录
    outDir: 'dist',
    // 资源目录
    assetsDir: 'assets',
    // 是否生成 source map
    sourcemap: false,
    // 压缩方式
    minify: 'terser',
    // terser 配置
    terserOptions: {
      compress: {
        // 移除 console
        drop_console: true,
        // 移除 debugger
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  server: {
    port: 3000,
    host: true
  },
});
