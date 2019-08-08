<template>
  <div>
    <van-nav-bar title=" " :fixed="true" left-text=" " left-arrow @click-left="onClickLeft" />
    <div class="content">
      <div class="pad_mian">
        <h3>快速注册</h3>
        <div class="rela">
          <div class="tel">
            <van-cell-group>
              <van-field v-model="value" type="tel" placeholder="请输入手机号" />
            </van-cell-group>
            <span class="line"></span>
            <van-cell-group>
              <van-field v-model="sms" center clearable placeholder="短信验证码">
                <van-button slot="button" :round="true" plain hairline size="small" type="danger">获取验证码</van-button>
              </van-field>
            </van-cell-group>
            <span class="line"></span>
            <van-cell-group>
              <van-field v-model="pwd" center :type="type" clearable placeholder="请输入6-20位密码">
              </van-field>
            </van-cell-group>
            <span class="line"></span>
          </div>
        </div>
        <!-- 按钮 -->
        <div class="btn">
            <van-button :disabled="bool" size="large" round type="info">下一步</van-button>
        </div>
        <!-- 切换登录方式 -->
        <p class="login_tab">
            <a @click="go_login_pwd">账号密码登录</a>
            <a>新用户注册</a>
        </p>
        <p class="tip">
            点击“下一步”，即表示您阅读并同意
            <a href="https://wap.epet.com/article.html?do=userAgreement"
            >《E宠商城用户协议》</a>
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
      pwd:'',
      type:'password',
      bool:true
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    go_login_pwd() {
      this.$router.push({
        name:'login_pwd'
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
    .tip {
        font-size: 10px;
        color: #333;
        padding: 4px;
        text-align: center;
        margin-top: 16px;
        a {
            color: #ff5757;
        }
    }
  }
}
.line {
  width: 100%;
  padding: 27px 0;
  border-bottom: 1px solid #d0d0d0;
  display: block;
  margin-top: -54px;
}
</style>
