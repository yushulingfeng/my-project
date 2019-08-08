import Vue from 'vue'
import VueRouter from 'vue-router'
// 首页
import Home from '@/views/Home/Home'
// 分类
import Sort from '@/views/Sort/Sort'
// 购物车
import Cart from '@/views/Cart/Cart'
// 我的
import Mine from '@/views/Mine/Mine'
//  登录
import Login_tel from '@/views/Login/Login_tel'
import Login_pwd from '@/views/Login/Login_pwd'
// 注册
import Reg from '@/views/Reg/Reg'
// 列表页
import List from '@/views/List/List'
// 详情页
import Detail from '@/views/Details/Detail'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    }, {
        path: '/home',
        redirect: {
            name: 'home'
        }
    }, {
        path: '/sort',
        name: 'sort',
        component: Sort
    }, {
        path: '/cart',
        name: 'cart',
        component: Cart
    }, {
        path: '/mine',
        name: 'mine',
        component: Mine
    }, {
        path: '/login_tel',
        name: 'login_tel',
        component: Login_tel
    }, {
        path: '/login_pwd',
        name: 'login_pwd',
        component: Login_pwd
    }, {
        path: '/reg',
        name: 'reg',
        component: Reg
    }, {
        path: '/detail',
        name: 'detail',
        component: Detail
    }, {
        path: '/list',
        name: 'list',
        component: List
    }]
});