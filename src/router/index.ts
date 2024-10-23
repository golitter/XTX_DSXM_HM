// 通过 vue-router 创建路由
import {createRouter, createWebHashHistory} from 'vue-router'
import {constantRoutes} from './router'
// 创建路由器
let router = createRouter({
    // 路由模式
    history: createWebHashHistory(),
   routes: constantRoutes,
   // 滚动行为
   scrollBehavior() {
    return {
        left:0,
        top:0
    }
   }
});
export default router;