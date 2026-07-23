import { createApp } from 'vue' //导入vue组件
import ElementPlus from 'element-plus'// 导入elementplus
import 'element-plus/dist/index.css'// 导入elementplus样式
import App from './App.vue'

const app = createApp(App)// 创建vue实例

app.use(ElementPlus)
app.mount('#app')