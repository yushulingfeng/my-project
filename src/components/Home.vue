<template>
  <div>
    <div class="main_topMenus">
      <div id="search_menus" :class="{fixed:isFixed}">
        <van-search
          placeholder="请输入搜索关键词"
          v-model="value"
          right-icon="comment-o"
          background="none"
          shape="round"
        />
        <div class="tab">
          <ul>
            <li class="ft">精选</li>
            <li>进口狗粮</li>
            <li>国产狗粮</li>
            <li>内外驱虫</li>
            <li>五官护理</li>
          </ul>
        </div>
      </div>
      <div class="banner-menu">
        <!-- 轮播图片 -->
        <div class="banner">
          <van-swipe :autoplay="3000" indicator-color="#fff">
            <van-swipe-item v-for="(image, index) in images" :key="index" show-indicators="false">
              <img v-lazy="image" width="100%" />
            </van-swipe-item>
          </van-swipe>
        </div>
        <!-- E宠Menus -->
        <div class="menus">
          <ul>
            <li v-for="(item,index) in menus" :key="index">
              <a :title="item.name">
                <img :src="item.img_url" alt />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 新人专享 -->
    <div class="boxImg">
      <a>
        <img :src="column_img1" alt />
      </a>
      <a>
        <img :src="column_img2" alt />
      </a>
    </div>
    <!-- 单广告banner -->
    <div class="mould_1">
      <img
        src="https://img2.epetbar.com/2019-07/19/09/72e654583dfa013a899c3d242533fa6b.gif?x-oss-process=style/water"
        alt
        width="100%"
      />
    </div>
    <!-- 每日疯抢和E宠团 -->
    <div class="mould_2">
      <div class="mould_2Z">
        <div class="mould_2z L">
          <div class="mould_2Ltop">
            <img
              src="https://static.epetbar.com/static_wap/appmall/main/index_icon_berserk_mark_415.png?version=03"
              alt
              height="16px"
            />
            <div class="text">
              <span style="color:#fff">16点场</span>
              <span
                style="background:#fff;margin-top:1px;border-top-right-radius:20px;border-bottom-right-radius:20px;"
              >即将开始</span>
            </div>
          </div>
          <div class="mould_2Lbottom">
            <ul>
              <li>
                <a>
                  <img
                    src="https://img1.epetbar.com/2019-01/17/13/952c3dcc634194139128c27515166915.jpg?x-oss-process=style/fill&$1=200&$2=200"
                    alt
                  />
                  <p>
                    ￥
                    <span>22.00</span>
                  </p>
                  <p>
                    <del>￥220.00</del>
                  </p>
                  <div class="discount">
                    <img
                      src="https://static.epetbar.com/static_wap/appmall/main/index_icon_berserk_discount.png?version=03"
                      alt
                    />
                  </div>
                </a>
              </li>
              <li>
                <a>
                  <img
                    src="https://img1.epetbar.com/goods/sales/20190429161946_639617.jpg?x-oss-process=style/fill&$1=200&$2=200"
                    alt
                  />
                  <p>
                    ￥
                    <span>18.80</span>
                  </p>
                  <p>
                    <del>￥188.00</del>
                  </p>
                  <div class="discount">
                    <img
                      src="https://static.epetbar.com/static_wap/appmall/main/index_icon_berserk_discount.png?version=03"
                      alt
                    />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="mould_2z R">
          <div class="mould_2Ltop">
            <div class="rela">
              <img
                src="https://static.epetbar.com/static_wap/appmall/main/index_icon_egroup_415.png?version=03"
                alt
              />
            </div>
          </div>
          <div class="mould_2Lbottom">
            <ul>
              <li>
                <a>
                  <img
                    src="https://img1.epetbar.com/2018-06/07/15/ce2003c0872b3a3f4248a7bf22704b18.jpg?x-oss-process=style/fill&$1=200&$2=200"
                    alt
                  />
                  <p>
                    ￥
                    <span>448.00</span>
                  </p>
                  <p>
                    <del>￥709.00</del>
                  </p>
                  <div class="discount">
                    <img
                      src=""
                      alt
                    />
                  </div>
                </a>
              </li>
              <li>
                <a>
                  <img
                    src="https://img1.epetbar.com/2017-07/07/10/e42f200dcb637af2bece225a6d5db009.jpg?x-oss-process=style/fill&$1=200&$2=200"
                    alt
                  />
                  <p>
                    ￥
                    <span>65.00</span>
                  </p>
                  <p>
                    <del>￥165.00</del>
                  </p>
                  <div class="discount">
                    <img
                      src=""
                      alt
                    />
                  </div>
                </a>
              </li>
            </ul>
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
      value: "",
      //    首页轮播img
      images: [
        "https://img2.epetbar.com/2019-08/01/17/05754ef487f32b44d3e92cbe198b10d8.jpg?x-oss-process=style/water",
        "https://img2.epetbar.com/2019-08/02/01/be8d8d84f99e4d93559d0bb863e563b1.jpg?x-oss-process=style/water",
        "https://img2.epetbar.com/2019-07/31/20/45185c2479de9639122b5c33a9cb4d37.jpg?x-oss-process=style/water",
        "https://img2.epetbar.com/2019-08/01/20/bbedb417429da39a2c284303537f7329.jpg?x-oss-process=style/water",
        "https://img2.epetbar.com/2019-07/31/18/21cea437bad8d4f7df020c88704b8140.jpg?x-oss-process=style/water",
        "https://img2.epetbar.com/2019-08/01/09/e1da0a8cb1fccc720d350d17631a4458.jpg?x-oss-process=style/water",
        "https://img2.epetbar.com/2019-08/01/09/a2a1397b1bc18ad809ecd59c1a127d30.png?x-oss-process=style/water"
      ],
      //    精选菜单
      menus: [],
      //    新人专享img*2
      column_img1: "",
      column_img2: "",
      // 顶部搜索吸附
      isFixed: false
    };
  },
  methods: {
    onSearch() {},
    onCancel() {},
    handleScroll() {
      if (scrollY > 0) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    }
  },
  //    数据请求
  async mounted() {
    //    首页数据请求
    let data = await this.$axios(
      "https://www.easy-mock.com/mock/5d47e6b9d7bb1d0fc358c102/menus/menus"
    );
    //  精选菜单
    this.menus = data.data.datas.list[0].data.menus;
    //  新人专享图片路径
    this.column_img1 = data.data.datas.list[2].data.column_images[0][0].img_url;
    this.column_img2 = data.data.datas.list[2].data.column_images[1][0].img_url;

    // let goods = await this.$axios(
    //   "https://www.easy-mock.com/mock/5d47e6b9d7bb1d0fc358c102/menus/goods"
    // );
    // console.log(goods.data.data)

    //  监听滚动事件
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>
<style lang="scss" scoped>
// @import "../css/home.scss";
.main_topMenus {
  width: 100%;
  min-height: 450px;
  position: relative;
  #search_menus {
    padding: 10px 0px;
  }
  .fixed {
    width: 100%;
    background: #fff;
    position: fixed;
    top: 0px;
    z-index: 99;
    .tab li {
      color: #000;
    }
  }
  .van-search {
    position: relative;
    z-index: 9;
  }
  .tab ul {
    display: flex;
    justify-content: space-around;
    position: relative;
    z-index: 9;
    li {
      padding: 0px 11px;
      font-size: 14px;
      line-height: 44px;
      text-align: center;
      color: #fff;
    }
    .ft {
      font-size: 20px;
      font-weight: 700;
    }
  }
  .banner-menu {
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    .banner {
      height: 321px;
    }
  }
  .menus {
    position: relative;
    top: -30px;
  }
  .menus ul {
    width: 100%;
    display: flex;
    justify-content: center;
    li {
      width: 20%;
    }
    img {
      width: 100%;
    }
  }
}

.boxImg {
  display: flex;
  margin-bottom: 10px;
  img {
    width: 100%;
  }
}

.mould_1 {
  margin-bottom: 5px;
}

.mould_2 {
  box-shadow: 1px 2px 25px 0px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  margin: 0 10px;
  .mould_2Z {
    display: flex;
  }
  .mould_2z {
    width: 50%;
    padding: 15px 0;
  }
  .L .mould_2Ltop {
    display: flex;
    .text {
      width: 100%;
      background: #fb4752;
      border-radius: 20px;
      height: 18px;
      line-height: 16px;
      font-size: 12px;
      text-align: center;
      margin-left: 3px;
      box-sizing: border-box;
      span {
        width: 49.5%;
        display: inline-block;
        background-origin: content-box;
      }
    }
  }
  .mould_2Ltop {
    .rela {
      margin: 0px 10px;
      img {
        height: 17px;
      }
    }
  }
  .mould_2Lbottom ul {
    display: flex;
    margin-top: 15px;
    margin-right: 10px;
    li {
      width: 50%;
      position: relative;
      a {
        margin-left: 10px;
        display: block;
        text-align: center;
      }
      img {
        width: 80%;
      }
      p {
        color: #ff5757;
        font-size: 10px;
        text-align: center;
        span {
          font-size: 14px;
          font-weight: 700;
          margin-left: -5px;
        }
        del {
          color: #999;
        }
      }
      .discount {
        position: absolute;
        top: 0px;
        right: 0px;
      }
      .discount img {
        width: 26px;
        height: 18px;
      }
    }
  }
}
</style>

