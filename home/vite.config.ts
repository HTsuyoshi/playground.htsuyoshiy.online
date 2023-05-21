import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	server: {
		port: 8000,
		host: '0.0.0.0'
	},
	build: {
		rollupOptions: {
			input: {
				home: 'index.html',
				error: 'error.html'
			}
		}
	}
})
