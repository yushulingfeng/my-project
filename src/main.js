import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.prototype.$axios = axios;

import {
    //  顶部搜索框
    Search,
    Swipe,
    SwipeItem,
    Lazyload
} from 'vant';
Vue.use(Search).use(Swipe).use(SwipeItem).use(Lazyload);

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')