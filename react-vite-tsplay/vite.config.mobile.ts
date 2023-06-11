import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  console.log(env.mobileTheme);
  return {
    build: {
      rollupOptions: {
        // https://rollupjs.org/configuration-options/
        input: {
          'Customer/customer': 'app/customer.tsx',
          'Product/product': 'app/product.tsx'
        },
        output: {
          dir: env.mobileTheme,
          entryFileNames: 'Company_[name].js',
        }
      }
    },
    plugins: [react()]
  }
})