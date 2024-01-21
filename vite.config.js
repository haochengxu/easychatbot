import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {}
  },
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/main.tsx'),
      name: 'EasyChatbot',
    },
    rollupOptions: {
      // 外部化处理那些你的库中不需要的依赖
      external: ['react', 'react-dom'],
      output: {
        // 在 umd/iife 输出格式中，设置此项是必须的
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})