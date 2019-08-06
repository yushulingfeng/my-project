<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="gem-o">精选</van-tabbar-item>
      <van-tabbar-item icon="coupon-o">分类</van-tabbar-item>
      <van-tabbar-item icon="todo-list-o">小萌书</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item icon="friends-o">我的E宠</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
    };
  }
};
</script>
