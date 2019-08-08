import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from '@/router/router.js'

Vue.prototype.$axios = axios;

import {
    //  顶部搜索框
    Icon,
    Search,
    Swipe,
    SwipeItem,
    Lazyload,
    Tabbar,
    TabbarItem,
    Card,
    Tag,
    Button,
    Divider,
    NavBar,
    Field,
    CellGroup,
    GoodsAction,
    GoodsActionIcon,
    GoodsActionButton,
    Stepper,
    Tab,
    Tabs,
    DropdownMenu,
    DropdownItem
} from 'vant';
Vue.use(Icon).use(Search).use(Swipe).use(SwipeItem)
    .use(Lazyload).use(Tabbar).use(TabbarItem).use(Card)
    .use(Tag).use(Button).use(Divider).use(NavBar).use(Field)
    .use(CellGroup).use(GoodsAction).use(GoodsActionIcon)
    .use(GoodsActionButton).use(Stepper).use(Tab).use(Tabs)
    .use(DropdownMenu).use(DropdownItem);

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')