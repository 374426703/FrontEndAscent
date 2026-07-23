import { createApp } from 'vue' //导入vue组件
import ElementPlus from 'element-plus'// 导入elementplus
import 'element-plus/dist/index.css'// 导入elementplus样式
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import App from './App.vue'

const app = createApp(App)// 创建vue实例

app.use(ElementPlus, { locale: zhCn })// 使用elementplus组件库并设置中文语言包
app.mount('#app')