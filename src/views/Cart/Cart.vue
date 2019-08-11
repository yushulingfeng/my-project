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
    <div v-else>
      <div class="card" v-for="(item,index) in cart_list" :key="index">
        <van-checkbox v-model="checked"></van-checkbox>
        <van-card :price="item.sale_price" :title="item.subject" :thumb="item.photo" @click="go_detail(item.gid)" />
        <div class="buy_num">
          <van-button type="danger" size="mini" @click="del(item.gid)">删除</van-button>
          <van-stepper v-model="item.buyNum" :min="1" :max="10" integer />
        </div>
      </div>
    </div>
    

    <div class="footer">
      <van-submit-bar :price="totalPrice" button-text="提交订单" @submit="onSubmit">
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
import handleCookie from "@/util/cookie/handleCookie"
export default {
  data() {
    return {
      bool: true,
      checked: true,
      // value: 1,
      cart_list: [],
      price: 0
    };
  },
  computed:{
    totalPrice(){
      if(this.cart_list.length>0){
        let total = 0
        for(let item of this.cart_list){
          total += (Number(item.sale_price) * item.buyNum)
        }
        return total *100
      }else{
        return 0
      }
    }
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
    async getData({gid,buyNum}) {
      let data = await this.$axios(
        "https://www.easy-mock.com/mock/5d47e6b9d7bb1d0fc358c102/menus/" + gid
      );
      const obj = Object.assign({},data.data.list[0],{buyNum})
      this.cart_list.push(obj);
    },
    del(id) {
      console.log(id)
      this.$dialog.confirm({
        title: "移除商品",
        message: "您确定要删除此商品吗？"
      }).then(() => {
          handleCookie.goods(
        "CLEAR",{
          gid:id
        }
      )
          location.reload();
        }).catch(() => {
          // on cancel
        });
    },
    go_detail(id) {
      this.gid = id;
      this.$store.commit('setGid',id);
      this.$router.push({
        name:'detail'
      });
    },
  },
  mounted() {
    const goods = handleCookie.goods("SELECT",{
      type:"ALL"
    })
    // let num = this.common.getCookie("buyNum");
    // this.value = num;
    if(goods.length>0){
      this.bool = false
      for(let good of goods){
        this.getData(good);
      }
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
    text-align: center;
    padding-top: 20px;
    position: absolute;
    right: 15px;
    top: 20px;
    .van-stepper {
      border: 1px solid #333;
      border-radius: 5px;
      margin-top: 10px;
    }
  }
}
</style>
