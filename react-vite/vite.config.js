import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteObfuscateFile } from 'vite-plugin-obfuscator'
//import path from 'path';
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  root:'./',
  build: {
    emptyOutDir: false,
    outDir: "dist",
    sourcemap: false,
    lib: {
      formats: ["es"],
      entry: {
        'test/mathx/test':"./src/math.ts",
        'xx/a/loggerx':"./src/logger.ts",
      },
    },
  },
  plugins: [
    react(),
    viteObfuscateFile()
  ],
})