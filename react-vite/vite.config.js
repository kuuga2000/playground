import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteObfuscateFile } from 'vite-plugin-obfuscator'
import path from 'path';


// https://vitejs.dev/config/
export default defineConfig({
   
  build: {
    rollupOptions: [
      {
        input: 'math.ts',
        output: {
          file: 'dist/a.js',
          format: 'es'
        }
      }, {
        input: 'logger.ts',
        output: {
          file: 'dist/ab.js',
          format: 'es'
        }
      }
    ],
  },
  plugins: [
    react(),
    viteObfuscateFile()
  ],
})
