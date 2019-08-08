<template>
  <div>
    <!-- 路由视图 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  <!-- 底部标签固定 -->
    <van-tabbar v-model="active">
      <van-tabbar-item
        v-for="(item,index) in tabbarList"
        :key="index"
        :icon="item.icon"
        @click="navTo(index,item.url)"
      >{{item.text}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      tabbarList: [
        {
          text: "精选",
          icon: "gem-o",
          url: "home"
        },
        {
          text: "分类",
          icon: "coupon-o",
          url: "sort"
        },
        {
          text: "购物车",
          icon: "shopping-cart-o",
          url: "cart"
        },
        {
          text: "我的E宠",
          icon: "friends-o",
          url: "mine"
        }
      ]
    };
  },
  methods:{
    navTo(index,name) {
      this.active = index;
      // 编程式导航
      this.$router.push({
        name
      });
    }
  }
};
</script>
