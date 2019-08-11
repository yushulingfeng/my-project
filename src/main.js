import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from '@/router/router'
import store from '@/vuex/store'
import Cookies from "js-cookie"
// 引入vant组件
import Vant from '@/vant/index'
Vant();
// 引入封装的Cookie方法
import Common from '@/util/util'
// 弹窗函数
import { Dialog } from 'vant';
// 全局注册
Vue.use(Dialog);

Vue.prototype.$axios = axios;
Vue.prototype.common = Common;

window.Cookies = Cookies


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')