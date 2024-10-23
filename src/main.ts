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

// 测试代码：mock接口能否正常使用
// import axios from 'axios'
// // 登录接口
// axios({
//     url:"/api/user/login",
//     method:"post",
//     data:{
//         username:"admin",
//         password:"111111"
//     }
// })
app.mount('#app')

