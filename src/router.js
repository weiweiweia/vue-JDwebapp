import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


//引入页面组件  路由懒加载
const Home = ()=>import('./pages/Home.vue')
const Find = ()=>import('./pages/Find.vue')
const Cart = ()=>import('./pages/Cart.vue')
const User = ()=>import('./pages/User.vue')
const Login = ()=>import('./pages/Login.vue')
const Rigiste = ()=>import('./pages/Rigiste.vue')
const Detail = ()=>import('./pages/Detail.vue')

const store = new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/find',
            component:Find
        },
        {
            path:'/cart',
            component:Cart
        },
        {
            path:'/user',
            component:User
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/rigiste',
            component:Rigiste
        },
        {
            path:'/detail/:id',
            component:Detail
        },
        {
            path:'/',
            redirect:'/home'
        }
    ]
})

export default store