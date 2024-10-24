import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteMockServe } from 'vite-plugin-mock'
import path from 'path';
// 引入svg需要的插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
export default defineConfig(({ command }) => ({
	plugins: [
		vue(),
		createSvgIconsPlugin({
			// Specify the icon folder to be cached
			iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
			// Specify symbolId format
			symbolId: 'icon-[dir]-[name]',
		}),
		viteMockServe({
			enable: command === 'serve',
		  }),
	],
	resolve: {
		alias: {
			'@': path.resolve('./src'), // 相对路径别名配置，使用 @ 代替 src
		},
	},
	css: {
		preprocessorOptions: {
		  scss: {
			javascriptEnabled: true,
			additionalData: '@import "./src/assets/styles/css/variable.scss";',
		  },
		},
	  },
}));
