import { defineConfig } from 'vite'
import path from 'path'

// https://vitejs.dev/config/

export default defineConfig({
  build: {
    lib: {
      name: 'gpsConvert',
      entry: path.resolve(__dirname, 'src/main.ts'),
    }
  }
})
