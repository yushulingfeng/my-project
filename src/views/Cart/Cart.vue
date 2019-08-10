<template>
  <div>
    <van-nav-bar title="购物车" :fixed="true" left-text=" " left-arrow @click-left="onClickLeft">
      <van-icon name="qr" color="#999" :size="24" slot="right" />
    </van-nav-bar>
    <div class="cart_box" v-if="bool">
      <div class="emptydiv">
        <span></span>
      </div>
      <div class="emttip">您的购物车空空如也</div>
      <div class="emt_btn">
        <a @click="go_home">随便逛逛</a>
      </div>
    </div>
    <div class="card" v-for="(item,index) in cart_list" :key="index">
      <van-checkbox v-model="checked"></van-checkbox>
      <van-card
        :price="item.sale_price"
        :title="item.subject"
        :thumb="item.photo"
      />
      <div class="buy_num">
        <van-stepper v-model="value" :min="1" :max="10" integer />
      </div>
    </div>

    <div class="footer">
      <van-submit-bar :price="price" button-text="提交订单" @submit="onSubmit">
        <van-checkbox v-model="checked">全选</van-checkbox>
        <!-- <span slot="tip">
          你的收货地址不支持同城送,
          <span>修改地址</span>
        </span>-->
      </van-submit-bar>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bool: true,
      checked: true,
      value: 1,
      cart_list:[],
      price:0
    };
  },
  methods: {
    onSubmit() {},
    onClickLeft() {
      this.$router.go(-1);
    },
    go_home() {
      this.$router.push({
        name: "home"
      });
    },
    async getData(gid) {
      let data = await this.$axios('https://www.easy-mock.com/mock/5d47e6b9d7bb1d0fc358c102/menus/'+gid);
      this.cart_list = data.data.list;
    }
  },
  created() {
    let id = this.common.getCookie("gid");
    let num = this.common.getCookie('buyNum');
    this.value = num;
    if (id) {
      this.bool = !this.bool;
      this.getData(id);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/css/cart.scss";
.card {
    margin-top: 46px;
    display: flex;
    justify-content: space-around;
    position: relative;
    .van-checkbox {
        width: 8%;
        padding-left: 10px;
    }
    .buy_num {
        padding-top: 50px;
        position: absolute;
        right: 15px;
        top: 20px;
        .van-stepper {
            border: 1px solid #333;
            border-radius: 5px;
        }
    }
}
</style>
