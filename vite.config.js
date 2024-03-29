import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
	resolve:{
		alias:{
			"~":path.resolve(__dirname,"src")
		}
	},
	// 配置跨域
	server:{
		proxy:{
			'/api': {
				target: 'http://ceshi13.dishait.cn',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '')
			},
		}
	},


	plugins: [
		vue(),
	]
})
