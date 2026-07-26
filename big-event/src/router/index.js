//导入router模块
import { createRouter, createWebHistory } from 'vue-router'
//导入路由组件
import Login from '@/views/Login.vue'
import Layout from '@/views/Layout.vue'

//创建路由规则
const routes = [
    { path: '/', component: Layout },
    { path: '/login', component: Login }
]

//创建路由对象
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router