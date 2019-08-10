<template>
  <div>
    <div :class="{fixed:isFixed}">
      <van-nav-bar title="商品列表" left-text left-arrow @click-left="onClickLeft">
        <van-icon name="more-o" :size="26" color="#999" slot="right" />
      </van-nav-bar>
    </div>
    <div class="mould_2">
      <div class="sort" @click="go(value1)">
        <van-dropdown-menu>
          <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu>
      </div>
      <div class="tab">
        <van-tabs v-model="active" :line-width="0">
          <van-tab v-for="(item,index) in tab" :key="index" :title="item.title">
            <div class="goods_list">
              <ul>
                <li
                  v-for="(item,index) in goods_list"
                  :key="index"
                  :data-id="item.gid"
                  @click="go_detail(item.gid,)"
                >
                  <van-card
                    :price="item.sale_price"
                    :desc="item.presubject"
                    :title="item.subject"
                    :thumb="item.photo"
                  >
                    <div slot="tags" style="padding:10px 0px">
                      <van-tag plain type="danger" style="margin-right:5px;">{{item.comments}}</van-tag>
                      <van-tag plain type="danger">{{item.sold}}</van-tag>
                    </div>
                    <div slot="footer">
                      <img src="@/assets/addcart.png" alt width="30px" />
                    </div>
                  </van-card>
                </li>
              </ul>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <!-- 回到顶部按钮 -->
    <div class="back_top" @click="back_top" v-show="bool"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      value1: 0,
      tab:[{
          title:'默认',
      },{
          title:'销量',
      },{
          title:'价格',
      },{
          title:'筛选',
      }],
      bool: false,
      isFixed: false,
      option1: [
        { text: "默认", value: 0 },
        { text: "按人气", value: 1 },
        { text: "最新上架", value: 2 },
        { text: "按评论", value: 3 }
      ],
      goods_list: [],
      gid:''
    };
  },
  async created() {
    let data = await this.$axios(
      "https://www.easy-mock.com/mock/5d47e6b9d7bb1d0fc358c102/menus/goods-list"
    );
    this.goods_list = data.data.list;

    // console.log(data)

    //  监听滚动事件
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    async go(val) {
      this.active = 0;
      if (val == 1) {
        let data = await this.$axios(
          "https://www.easy-mock.com/mock/5d47e6b9d7bb1d0fc358c102/menus/sort-rq"
        );
        this.goods_list = data.data.list;
      } else if (val == 0) {
        let data = await this.$axios(
          "https://www.easy-mock.com/mock/5d47e6b9d7bb1d0fc358c102/menus/goods-list"
        );
        this.goods_list = data.data.list;
      } else if (val == 2) {
        let data = await this.$axios(
          "https://www.easy-mock.com/mock/5d47e6b9d7bb1d0fc358c102/menus/sort-zx"
        );
        this.goods_list = data.data.list;
      } else if (val == 3) {
        let data = await this.$axios(
          "https://www.easy-mock.com/mock/5d47e6b9d7bb1d0fc358c102/menus/soer-pl"
        );
        this.goods_list = data.data.list;
      }
    },
    go_detail(id) {
      this.gid = id;
      this.$store.commit('setGid',id);
      this.$router.push({
        name:'detail'
      });
    },
    // 回到顶部
    back_top() {
      window.scrollTo(0, 0);
    },
    handleScroll() {
      // 顶部搜索框的显示隐藏
      if (scrollY > 0) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
      // 回到顶部按钮的显示隐藏
      if (scrollY > 300) {
        this.bool = true;
      } else {
        this.bool = false;
      }
    },
    onClickLeft() {
      this.$router.push({
        name:'home'
      });
    },
  },
  mounted() {
    this.go(this.value1);
  }
};
</script>
<style lang="scss" scoped>
.fixed {
  position: fixed;
  top: 0px;
  background: #fff;
  width: 100%;
  z-index: 99;
}
.back_top {
  position: fixed;
  right: 10px;
  bottom: 65px;
  width: 28px;
  height: 28px;
  background: url(../../assets/back_top.png);
  background-size: 100% auto;
  z-index: 10;
}
.mould_2 {
  display: flex;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 8;
  position: sticky;
  .sort {
    width: 25%;
    position: absolute;
    top: 0;
    z-index: 9;
  }
  .tab {
    width: 100%;
  }
}
</style>
