import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { viteObfuscateFile } from 'vite-plugin-obfuscator'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  root:'./',
  build: {
    emptyOutDir: false,
    outDir: "pub",
    sourcemap: false,
    lib: {
      formats: ["es"],
      entry: {
        'static/store/company/desktop/id_ID/company_product/product':"./src/product.tsx",
        'static/store/company/desktop/id_ID/company_customer/customer':"./src/customer.tsx",
      },
    },
  },
  plugins: [
    react(),
    viteObfuscateFile()
  ],
})