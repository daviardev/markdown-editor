import react from '@vitejs/plugin-react'
import jsconfigPaths from 'vite-jsconfig-paths'

import { defineConfig } from 'vite'

// Use vite-jsconfig-paths for use absolute path
export default defineConfig({
  plugins: [react(), jsconfigPaths()],
})