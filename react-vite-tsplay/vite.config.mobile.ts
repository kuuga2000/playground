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
          'TheZecter_Customer/js/customer': `${env.mobileTsx}/TheZecter_Customer/customer.tsx`,
          'TheZecter_Product/js/product': `${env.mobileTsx}/TheZecter_Product/product.tsx`
        },
        output: {
          dir: env.mobileTheme,
          entryFileNames: `[name].js`,
        }
      }
    },
    plugins: [react()]
  }
})