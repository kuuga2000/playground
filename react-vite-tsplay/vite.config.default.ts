import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { splitVendorChunkPlugin } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  const defaultTsx = env.defaultTsx;
  const defaultTheme = env.defaultTheme;
  return {
    build: {
      rollupOptions: {
        // https://rollupjs.org/configuration-options/
        input: {
          'TheZecter_Customer/js/customer': `${defaultTsx}/TheZecter_Customer/customer.tsx`,
          'TheZecter_Product/js/product': `${defaultTsx}/TheZecter_Product/product.tsx`
        },
        output: {
          dir: defaultTheme,
          entryFileNames: `[name].js`,
        }
      }
    },
    plugins: [splitVendorChunkPlugin()]
  }
})