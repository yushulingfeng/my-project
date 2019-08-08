<template>
  <div>
    <van-nav-bar title="购物车" :fixed="true" left-text=" " left-arrow @click-left="onClickLeft">
      <van-icon name="audio" :size="24" slot="right" />
    </van-nav-bar>
    <div class="cart_box">
      <div class="emptydiv">
        <span></span>
      </div>
      <div class="emttip">您的购物车空空如也</div>
      <div class="emt_btn">
        <a @click="go_home">随便逛逛</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
        this.$router.go(-1);
    },
    go_home() {
      this.$router.push({
        name:'home'
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.cart_box {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 46px;
  background: #fff;
  z-index: 99;
  .emptydiv {
    width: 100%;
    padding-top: 50%;
    vertical-align: middle;
    text-align: center;
    span {
      background: url(../../assets/empty.png) no-repeat center center;
      background-size: auto 100%;
      width: 40%;
      height: 110px;
      display: inline-block;
    }
  }
  .emttip {
    text-align: center;
    color: #666;
    font-size: 16px;
    margin-top: 16px;
  }
  .emt_btn {
    text-align: center;
    margin-top: 32px;
    a {
      border: 1px solid #f03e3e;
      color: #f03e3e;
      border-radius: 30px;
      display: inline-block;
      height: 40px;
      line-height: 40px;
      width: 100px;
    }
  }
}
</style>
