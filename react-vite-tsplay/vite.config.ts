import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
//import.meta.env.VITE_APP_TITLE
 
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      // https://rollupjs.org/configuration-options/
      input: {
        'Customer/customer': 'src/customer.tsx',
        'Product/product': 'src/product.tsx'
      },
      output: {
        dir:'pub/static/store/company/desktop/id_ID',
        entryFileNames: 'Company_[name].js',
      }
    }
  },
  plugins: [react()],
})
