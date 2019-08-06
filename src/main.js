import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.prototype.$axios = axios;

import {
    //  顶部搜索框
    Search,
    Swipe,
    SwipeItem,
    Lazyload,
    Tabbar,
    TabbarItem
} from 'vant';
Vue.use(Search).use(Swipe).use(SwipeItem).use(Lazyload)
    .use(Tabbar).use(TabbarItem);

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')