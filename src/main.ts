import { createApp } from 'vue'
// import './style.css'
import './assets/styles/css/index.scss'
// @ts-ignore
import App from '@/App.vue'
// 引入 element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 配置element-plus的语言
import { zhCn } from 'element-plus/es/locales.mjs'
import 'virtual:svg-icons-register'
// 获取应用实例
const app = createApp(App)
// 使用 element-plus
app.use(ElementPlus, {
    locale: zhCn // 配置element-plus的语言
})
// 将应用挂载到挂载点
// 全局组件
// @ts-ignore
import SvgIcon from '@/components/SvgIcon/index.vue'

app.component('svg-icon', SvgIcon)
app.mount('#app')

