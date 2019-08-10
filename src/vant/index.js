import Vue from 'vue'
import {
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
    DropdownItem,
    SubmitBar,
    Checkbox,
    CheckboxGroup,
} from 'vant';
export default () => {
    Vue.use(Icon).use(Search).use(Swipe).use(SwipeItem)
        .use(Lazyload).use(Tabbar).use(TabbarItem).use(Card)
        .use(Tag).use(Button).use(Divider).use(NavBar).use(Field)
        .use(CellGroup).use(GoodsAction).use(GoodsActionIcon)
        .use(GoodsActionButton).use(Stepper).use(Tab).use(Tabs)
        .use(DropdownMenu).use(DropdownItem).use(SubmitBar)
        .use(Checkbox).use(CheckboxGroup)
}