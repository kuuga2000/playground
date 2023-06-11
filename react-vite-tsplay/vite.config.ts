import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
//import.meta.env.VITE_APP_TITLE

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  console.log(env.default);
  return {
    // vite config
    define: {
      __APP_ENV__: env.APP_ENV,
    },
  }
})