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
          <van-swipe :autoplay="3000" indicator-color="#fff" :show-indicators="false">
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
            <img :src="berserkImg" alt height="16px" />
            <div class="text">
              <span style="color:#fff" v-text="berserkTit"></span>
              <span
                style="background:#fff;margin-top:1px;border-top-right-radius:20px;border-bottom-right-radius:20px;"
              >即将开始</span>
            </div>
          </div>
          <div class="mould_2Lbottom">
            <ul>
              <li>
                <a>
                  <img :src="goodsImg1" alt />
                  <p>
                    ￥
                    <span v-text="sale_price2"></span>
                  </p>
                  <p>
                    <del v-text="little_price2"></del>
                  </p>
                  <div class="discount">
                    <img :src="discount_img" alt />
                  </div>
                </a>
              </li>
              <li>
                <a>
                  <img :src="goodsImg2" alt />
                  <p>
                    ￥
                    <span v-text="sale_price1"></span>
                  </p>
                  <p>
                    <del v-text="little_price1"></del>
                  </p>
                  <div class="discount">
                    <img :src="discount_img" alt />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="mould_2z R">
          <div class="mould_2Ltop">
            <div class="rela">
              <img :src="egroupImg" alt />
            </div>
          </div>
          <div class="mould_2Lbottom">
            <ul>
              <li>
                <a>
                  <img :src="goodsImg3" alt />
                  <p>
                    ￥
                    <span v-text="sale_price3"></span>
                  </p>
                  <p>
                    <del v-text="little_price3"></del>
                  </p>
                  <div class="discount">
                    <img src alt />
                  </div>
                </a>
              </li>
              <li>
                <a>
                  <img :src="goodsImg4" alt />
                  <p>
                    ￥
                    <span v-text="sale_price4"></span>
                  </p>
                  <p>
                    <del v-text="little_price4"></del>
                  </p>
                  <div class="discount">
                    <img src alt />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 品牌特卖 滑动轮播 -->
    <div class="mould_3">
      <div class="brand_tit">
        <h3>品牌特卖</h3>
        <a>
          <img
            src="https://img2.epetbar.com/nowater/2018-10/18/18/c67d590289194356f5329bc2fe571b5e.png"
            alt
          />
        </a>
      </div>
      <van-swipe indicator-color="#999">
        <van-swipe-item v-for="(item,index) in slip_images" :key="index">
          <div class="brand_swipe">
            <a class="topImg">
              <img :src="item.top_image.img_url" alt />
            </a>
            <div class="bottomImg">
              <a class="bottom_l">
                <img :src="item.left_down_image.img_url" alt />
              </a>
              <a class="bottom_r">
                <img :src="item.right_down_image.img_url" alt />
              </a>
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- E宠国际 滑动轮播+指示器-->
    <div class="mould_4">
      <div class="brand_tit">
        <h3>E宠国际</h3>
        <a>
          <img
            src="https://img2.epetbar.com/nowater/2018-10/18/18/c67d590289194356f5329bc2fe571b5e.png"
            alt
          />
        </a>
      </div>
      <van-swipe @change="onChange" :loop="false">
        <van-swipe-item v-for="(item,index) in advImg" :key="index">
          <div class="knowledge_swipe">
            <img class="br" :src="item.img_url" alt />
          </div>
        </van-swipe-item>

        <div class="custom-indicator" slot="indicator">{{ current + 1 }}/3</div>
      </van-swipe>
    </div>
    <!-- 新品馆 自定义滑块 -->
    <div class="mould_5">
      <div class="brand_tit">
        <h3>新品馆</h3>
        <a>
          <img
            src="https://img2.epetbar.com/nowater/2018-10/18/18/c67d590289194356f5329bc2fe571b5e.png"
            alt
          />
        </a>
      </div>
      <van-swipe @change="onChange1" :loop="false" :width="395">
        <van-swipe-item v-for="(item,index) in dog_food_lists" :key="index">
          <div class="dog_food_list">
            <a>
              <img :src="item.image.img_url" alt />
              <div>
                <p class="textline1" v-text="item.name"></p>
                <p class="effect">
                  <span>
                    <em v-text="item.labels[0]"></em>
                  </span>
                  <span>
                    <em v-text="item.labels[1]">无添加</em>
                  </span>
                </p>
                <p class="subject textline1" v-text="item.subject"></p>
                <p class="mt5">
                  <span>¥</span>
                  <span style="font-size:14px" v-text="item.sale_price"></span>
                  <span class="tip" v-text="item.sale_price_description"></span>
                </p>
                <p style="font-size:12px" v-text="item.normal_price"></p>
              </div>
              <div class="superico">
                <img :src="item.superscript.img_url" alt />
              </div>
            </a>
          </div>
        </van-swipe-item>
        <div class="custom-indicator" slot="indicator">{{ current1 + 1 }}/9</div>
      </van-swipe>
    </div>
    <!-- 小萌书  滑动轮播+指示器-->
    <div class="mould_6">
      <div class="brand_tit">
        <h3>小萌书</h3>
        <a>
          <img
            src="https://img2.epetbar.com/nowater/2018-10/18/18/c67d590289194356f5329bc2fe571b5e.png"
            alt
          />
        </a>
      </div>
      <van-swipe @change="onChange2" :loop="false">
        <van-swipe-item v-for="(item,index) in mould_6Imgs" :key="index">
          <div class="knowledge_swipe">
            <img class="br" :src="item.img_url" alt />
          </div>
        </van-swipe-item>

        <div class="custom-indicator" slot="indicator">{{ current2 + 1 }}/3</div>
      </van-swipe>
    </div>
    <!-- 国产狗粮  -->
    <div class="mould_7">
      <div class="brand_tit">
        <h3>国产狗粮</h3>
        <a>
          <img
            src="https://img2.epetbar.com/nowater/2018-10/18/18/c67d590289194356f5329bc2fe571b5e.png"
            alt
          />
        </a>
      </div>
      <div class="column">
        <a>
          <img
            class="br"
            src="https://img2.epetbar.com/2019-04/26/13/e6267b7270a20632d4e700bd9a6c31d2.png?x-oss-process=style/water"
            alt
          />
        </a>
        <van-swipe :loop="false" :width="110" :show-indicators="false">
          <van-swipe-item v-for="(item,index) in mould_7_goods" :key="index">
            <div class="goods_list_swiper">
              <a>
                <img :src="item.small_image.img_url" alt />
                <p>
                  ￥
                  <span v-text="item.sale_price"></span>
                </p>
                <p>
                  <del>
                    ￥
                    <del v-text="item.market_price"></del>
                  </del>
                </p>
              </a>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <div class="mould_8">
      <van-swipe :autoplay="2000" :loop="true" :width="130" :show-indicators="false">
        <van-swipe-item v-for="(item,index) in brand_list" :key="index">
          <div class="brand_list">
            <a>
              <img :src="item.img_url" alt="">
            </a>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 健康护理 -->
    <div class="mould_7">
      <div class="brand_tit">
        <h3>健康护理</h3>
        <a>
          <img
            src="https://img2.epetbar.com/nowater/2018-10/18/18/c67d590289194356f5329bc2fe571b5e.png"
            alt
          />
        </a>
      </div>
      <div class="column">
        <a>
          <img
            class="br"
            src="https://img2.epetbar.com/2019-04/30/10/40be28d8044f44818996c86d543070e2.jpg?x-oss-process=style/water"
            alt
          />
        </a>
        <van-swipe :loop="false" :width="110" :show-indicators="false">
          <van-swipe-item v-for="(item,index) in goods_list" :key="index">
            <div class="goods_list_swiper">
              <a>
                <img :src="item.small_image.img_url" alt />
                <p>
                  ￥
                  <span v-text="item.sale_price"></span>
                </p>
                <p>
                  <del>
                    ￥
                    <del v-text="item.market_price"></del>
                  </del>
                </p>
              </a>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <div class="mould_8">
      <van-swipe :autoplay="2000" :loop="true" :width="130" :show-indicators="false">
        <van-swipe-item v-for="(item,index) in goods_imgs" :key="index">
          <div class="brand_list">
            <a>
              <img :src="item.img_url" alt="">
            </a>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 生活日用 -->
    <div class="mould_7">
      <div class="brand_tit">
        <h3>生活日用</h3>
        <a>
          <img
            src="https://img2.epetbar.com/nowater/2018-10/18/18/c67d590289194356f5329bc2fe571b5e.png"
            alt
          />
        </a>
      </div>
      <div class="column">
        <a>
          <img
            class="br"
            src="https://img2.epetbar.com/2019-06/21/10/fc9222ebf6a603666277d25392c23b79.jpg?x-oss-process=style/water"
            alt
          />
        </a>
        <van-swipe :loop="false" :width="110" :show-indicators="false">
          <van-swipe-item v-for="(item,index) in life_list" :key="index">
            <div class="goods_list_swiper">
              <a>
                <img :src="item.small_image.img_url" alt />
                <p>
                  ￥
                  <span v-text="item.sale_price"></span>
                </p>
                <p>
                  <del>
                    ￥
                    <del v-text="item.market_price"></del>
                  </del>
                </p>
              </a>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <div class="mould_8">
      <van-swipe :autoplay="2000" :loop="true" :width="130" :show-indicators="false">
        <van-swipe-item v-for="(item,index) in life_imgs" :key="index">
          <div class="brand_list">
            <a>
              <img :src="item.img_url" alt="">
            </a>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 会到顶部按钮 -->
    <div class="back_top" @click="back_top" v-show="bool"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      bool:false,
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
      isFixed: false,
      // 每日疯抢
      berserkImg: "",
      sale_price1: "",
      sale_price2: "",
      little_price1: "",
      little_price2: "",
      sale_price3: "",
      sale_price4: "",
      little_price3: "",
      little_price4: "",
      berserkTit: "",
      discount_img: "",
      egroupImg: "",
      goodsImg1: "",
      goodsImg2: "",
      goodsImg3: "",
      goodsImg4: "",
      slip_images: [],
      current: 0,
      current1: 0,
      current2: 0,
      // E宠国际
      advImg: [],
      // 新品馆
      dog_food_lists: [],
      // 小萌书
      mould_6Imgs: [],
      mould_7_goods: [],
      brand_list:[],
      goods_list:[],
      goods_imgs:[],
      life_list:[],
      life_imgs:[],
    };
  },
  methods: {
    // 会到顶部
    back_top() {
     
        window.scrollTo(0,0);
      
    },
    onChange(index) {
      this.current = index;
    },
    onChange1(index) {
      this.current1 = index;
    },
    onChange2(index) {
      this.current2 = index;
    },
    onSearch() {},
    onCancel() {},
    handleScroll() {
      // 顶部搜索框的显示隐藏
      if (scrollY > 0) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
      // 会到顶部按钮的显示隐藏
      if(scrollY > 300) {
        this.bool = true;
      }else {
        this.bool = false;
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

    let goods = await this.$axios(
      "https://www.easy-mock.com/mock/5d47e6b9d7bb1d0fc358c102/menus/goods"
    );
    this.berserkImg = goods.data.data[3760].data.berserk.left.img_url;
    this.berserkTit = goods.data.data[3760].data.berserk.title;
    this.egroupImg = goods.data.data[3760].data.egroup.left.img_url;
    this.goodsImg3 = goods.data.data[3760].data.egroup.goods[0].image.img_url;
    this.goodsImg4 = goods.data.data[3760].data.egroup.goods[1].image.img_url;
    this.little_price1 =
      "￥" + goods.data.data[3760].data.berserk.goods[0].little_price;
    this.little_price2 =
      "￥" + goods.data.data[3760].data.berserk.goods[1].little_price;
    this.little_price3 =
      "￥" + goods.data.data[3760].data.egroup.goods[0].little_price;
    this.little_price4 =
      "￥" + goods.data.data[3760].data.egroup.goods[1].little_price;
    this.sale_price1 = goods.data.data[3760].data.berserk.goods[0].sale_price;
    this.sale_price2 = goods.data.data[3760].data.berserk.goods[1].sale_price;
    this.sale_price3 = goods.data.data[3760].data.egroup.goods[0].sale_price;
    this.sale_price4 = goods.data.data[3760].data.egroup.goods[1].sale_price;
    this.goodsImg1 = goods.data.data[3760].data.berserk.goods[0].image.img_url;
    this.goodsImg2 = goods.data.data[3760].data.berserk.goods[1].image.img_url;
    this.slip_images = goods.data.data[3858].data.slip_images;
    this.advImg = data.data.datas.list[8].data.images;
    this.dog_food_lists = data.data.datas.list[10].data.goods;
    this.mould_6Imgs = data.data.datas.list[12].data.images;
    this.mould_7_goods = data.data.datas.list[14].data.goods;
    this.brand_list = data.data.datas.list[15].data.images;
    this.goods_list = data.data.datas.list[17].data.goods;
    this.goods_imgs = data.data.datas.list[18].data.images;
    this.life_list = data.data.datas.list[20].data.goods;
    this.life_imgs = data.data.datas.list[21].data.images;
    // console.log(data.data.datas.list);
    //  监听滚动事件
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>
<style lang="scss" scoped>
@import "../css/home.scss";
.back_top {
  position: fixed;
    right: 10px;
    bottom: 65px;
    width: 28px;
    height: 28px;
    background: url(../assets/back_top.png);
    background-size: 100% auto;
    z-index: 10;
}
</style>

