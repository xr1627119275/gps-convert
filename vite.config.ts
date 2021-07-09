import { defineConfig } from 'vite'
import path from 'path'

declare const __dirname: string
// https://vitejs.dev/config/

export default defineConfig({
  build: {
    lib: {
      name: 'gpsConvert',
      entry: path.resolve(__dirname, 'src/main.ts'),
    }
  }
})
