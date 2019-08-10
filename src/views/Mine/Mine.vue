<template>
  <div>
    <van-nav-bar title="我的E宠" :fixed="false" left-text=" " left-arrow @click-left="onClickLeft">
      <van-icon name="comment-o" :size="24" color="#333" slot="right" />
    </van-nav-bar>
    <!-- 登录 -->
    <div class="login_mould">
      <div class="operation">
        <div class="left">
          <van-icon name="setting-o" :size="28" color="#fff" />
        </div>
        <div class="right">
          <van-icon name="chat-o" :size="28" color="#fff" />
        </div>
      </div>
      <div class="user_info">
        <div class="user_photo">
          <a>
            <img src="https://static.epetbar.com/static_wap/appmall/avatar/dog.png" alt />
          </a>
        </div>
        <div class="user_name">
          <a @click="goLogin">
            <span v-text="msg"></span>
          </a>
          <span>|</span>
          <a>
            <span @click="goReg" v-text="reg"></span>
          </a>
        </div>
      </div>
      <div class="vip">
        <div class="vipcon">
          <div v-for="(item,index) in vipItems" :key="index" :data-id="item.id">
            <a :title="item.below_text">
              <img :src="item.above_image.img_url" alt />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div style="margin-bottom:42px"></div>
    <!-- 我的订单 -->
    <div class="my_mould" style="margin-bottom:26px">
      <div class="my_order">
        <div class="order">
          <div class="tit">
            <a :title="orderTit">
              <img :src="orderImg" alt />
            </a>
          </div>
          <div class="item_list clearfix">
            <div v-for="(item,index) in orderItem" :key="index">
              <a :title="item.id">
                <img :src="item.above_image.img_url" alt />
                <span v-text="item.below_text"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 我的钱包 -->
    <div class="my_mould" style="margin-bottom:26px">
      <div class="my_wallet">
        <div class="wallet">
          <div class="tit">
            <a :title="walletTit">
              <img :src="walletImg" alt />
            </a>
          </div>
          <div class="item_list clearfix">
            <div id="wallet_item" v-for="(item,index) in walletItem" :key="index">
              <a :title="item.id">
                <p>
                  <span v-text="item.above_text"></span>
                </p>
                <p v-text="item.below_text"></p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 我的服务 -->
    <div class="my_mould" style="margin-bottom:26px">
      <div class="my_service">
        <div class="service">
          <div class="tit">
            <a :title="serviceTit">
              <img :src="serviceImg" alt />
            </a>
          </div>
          <div class="item_list clearfix">
            <div id="service_item" v-for="(item,index) in serviceItem" :key="index">
              <a :title="item.id">
                <img :src="item.above_image.img_url" alt />
                <span v-text="item.below_text"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // vip数据
      vipItems: [],
      // 我的订单
      orderItem: [],
      // order
      orderTit: "",
      orderImg: "",
      // wallet
      walletTit: "",
      walletImg: "",
      walletItem: [],
      // service
      serviceTit: "",
      serviceImg: "",
      serviceItem: [],
      msg: "登录",
      reg: "注册"
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    goLogin() {
      this.$router.push({
        name: "login_pwd"
      });
    },
    goReg() {
      if (this.reg == "注册") {
        this.$router.push({
          name: "reg"
        });
      }else {
        this.$dialog.confirm({
        title: "退出登录",
        message: "您确定要退出登录吗？"
      }).then(() => {
          this.common.delCookie("username");
          location.reload();
        }).catch(() => {
          // on cancel
        });
      }
    }
  },
  async created() {
    let data = await this.$axios(
      "https://www.easy-mock.com/mock/5d47e6b9d7bb1d0fc358c102/menus/vip"
    );
    this.vipItems = data.data.list[0].data.items;
    this.orderItem = data.data.list[1].data.items;
    this.orderTit = data.data.list[1].type_name;
    this.orderImg = data.data.list[1].header.left_image.img_url;
    this.walletItem = data.data.list[2].data.items;
    this.walletTit = data.data.list[2].type_name;
    this.walletImg = data.data.list[2].header.left_image.img_url;
    this.serviceItem = data.data.list[3].data.items;
    this.serviceTit = data.data.list[3].type_name;
    this.serviceImg = data.data.list[3].header.left_image.img_url;
    // console.log(data.data.list[1])
  },
  mounted() {
    let name = this.common.getCookie("username");
    if (name) {
      this.msg = name;
      this.reg = "退出登录";
    } else {
      this.msg = "登录";
      this.reg = "注册";
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/css/mine.scss";
</style>
