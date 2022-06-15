import Vue from 'vue';
import Router from 'vue-router';
import Settlement from '@/views/shoppingCart/settlement'

Vue.use(Router)
const constantRoutes = [
    {
        path: '/home',
        component: () => import('../views/Home/index')
    },
    {
        path: '/login',
        component: () => import('@/views/Login/index'),
        meta: { isShowHeader: false }
    },
    {
        path: '/register',
        component: () => import('@/views/Register/index'),
        meta: { isShowHeader: false }
    },
    {
        path: '/personal',
        component: () => import('@/views/Personal/index'),
    },
    {
        path: '/shoppingcart',
        component: () => import('@/views/shoppingCart/index')
    },
    {
        path: '/commodity',
        name: "commodity",
        component: () => import('@/views/Commodity/index'),
    },
    {
        path:'/settlement',
        name:'settlement',
        component:Settlement,
        children:[
            {
                path:'placeorder',
                name:'placeOrder',
                component:()=>import('@/views/shoppingCart/settlement/placeOrder'),
            },
            {
                path:'payorder',
                name:'payOrder',
                component:()=>import('@/views/shoppingCart/settlement/payOrder'),
            },
            {
                path:'payok',
                name:'payOk',
                component:()=>import('@/views/shoppingCart/settlement/payOk'),
            }
        ]

    },
    {
        path: '*', //默认打开时跳转首页
        component: () => import('../views/Home/index'),
        meta: { isShowHeader: true },
    },
]
const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})
const router = createRouter()
export default router