<template>
  <div>
    <van-nav-bar title=" " :fixed="true" left-text=" " left-arrow @click-left="onClickLeft" />
    <div class="content">
      <div class="pad_mian">
        <h3>账号密码登录</h3>
        <div class="rela">
          <div class="tel">
            <van-cell-group>
              <van-field v-model="value" type="tel" placeholder="用户名/手机号/邮箱号" />
            </van-cell-group>
            <span class="line"></span>
            <van-cell-group>
              <van-field v-model="sms" center clearable placeholder="请输入密码">
                <van-button slot="button" :round="true" plain hairline size="small" type="default">忘记密码</van-button>
              </van-field>
            </van-cell-group>
            <span class="line"></span>
          </div>
        </div>
        <!-- 按钮 -->
        <div class="btn">
            <van-button :disabled="bool" size="large" round type="info">登录</van-button>
        </div>
        <!-- 切换登录方式 -->
        <p class="login_tab">
            <a @click="go_login_tel">短信验证码登录</a>
            <a>新用户注册</a>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      sms:'',
      bool:true
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    go_login_tel() {
      this.$router.push({
        name:'login_tel'
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
  background: #fff;
  position: fixed;
  top: 46px;
  z-index: 99;
  .pad_mian {
    padding: 10px 40px;
    h3 {
      font-size: 20px;
      color: #333;
      margin: 10px 0;
    }
    .btn {
        margin-top: 37px;
    }
    .login_tab {
        color: #333;
        font-size: 12px;
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
    }
  }
}
.line {
  width: 100%;
  padding: 27px 0;
  border-bottom: 1px solid #d0d0d0;
  display: block;
  margin-top: -50px;
}
</style>
