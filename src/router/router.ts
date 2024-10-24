// 对外暴露配置路由 (常量路由)

export const constantRoutes =  [
    {
        // 登录
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        name: 'login',
    },
    {
        // 登录成功展示的数据
        path: '/',
        component: () => import('@/layout/index.vue'),
        name: 'home',
    },
    {
        path: '/404',
        component: () => import('@/views/404/index.vue'),
        name: '404',
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404',
        name: 'nofound',
    }
];