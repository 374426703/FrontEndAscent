import './assets/main.css'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from '@/router/index.js'
import {createPinia} from 'pinia'
//导入持久化插件
import {createPersistedState} from'pinia-persistedstate-plugin'

const pinia = createPinia()
const persist = createPersistedState()
const app = createApp(App)
pinia.use(persist)
app.use(router)
app.use(ElementPlus)
app.use(pinia)
app.mount('#app')
