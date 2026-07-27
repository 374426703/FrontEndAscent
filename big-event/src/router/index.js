//导入router模块
import { createRouter, createWebHistory } from 'vue-router'
//导入路由组件
import Login from '@/views/Login.vue'
import Layout from '@/views/Layout.vue'

import ArticleCategoryVue from '@/views/article/ArticleCategory.vue'
import ArticleManageVue from '@/views/article/ArticleManage.vue'
import UserAvatarVue from '@/views/user/UserAvatar.vue'
import UserInfoVue from '@/views/user/UserInfo.vue'
import UserResetPasswordVue from '@/views/user/UserResetPassword.vue'

//创建路由规则
const routes = [
    { path: '/login', component: Login },
    {
        path: '/', component: Layout,redirect:'/article/category', children: [
            { path: '/article/category', component: ArticleCategoryVue },
            { path: '/article/manage', component: ArticleManageVue },
            { path: '/user/info', component: UserInfoVue },
            { path: '/user/avatar', component: UserAvatarVue },
            { path: '/user/resetPassword', component: UserResetPasswordVue }
        ]
    }
]

//创建路由对象
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router