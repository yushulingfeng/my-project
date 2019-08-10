<template>
  <div>
    <van-nav-bar :fixed="true" title="商品" left-text=" " left-arrow @click-left="onClickLeft">
      <van-icon name="more-o" :size="26" slot="right" />
    </van-nav-bar>
    <div class="content">
      <div class="cont">
        <!-- 大图轮播 -->
        <div class="swiperImg">
          <van-swipe @change="onChange">
            <van-swipe-item v-for="(item, index) in images" :key="index">
              <img v-lazy="item.image" width="100%" />
            </van-swipe-item>
            <div class="custom-indicator" slot="indicator">{{ current + 1 }}/2</div>
          </van-swipe>
        </div>
        <!-- 标题价格 -->
        <div class="tit_price" v-for="(item,index) in detail" :key="index" :data-id="item.gid">
          <p class="tit" v-text="item.subject"></p>
          <p class="description">健康膳食 亮丽皮毛</p>
          <div class="price_box">
            <div class="price">
              <span class="pro_price">
                ￥
                <span class="sale_pri" v-text="item.sale_price"></span>
                <del>
                  ￥
                  <span class="origin_pri">135.40</span>
                </del>
              </span>
              <span class="pro_origin">
                <a>
                  <img
                    src="https://static.epetbar.com/static_wap/appmall/lib/goods/quality_assurance.png"
                    alt
                  />
                </a>
              </span>
            </div>
          </div>
        </div>
        <!-- promotion 促销 -->
        <div class="promotion">
          <div class="promo clearfix">
            <div class="text">促销</div>
            <div class="rela">
              <a>
                <span class="icon">折扣</span>
                <span class="title">【省钱联盟】皇家专场，50年品质如一，营养礼包6折起</span>
              </a>
            </div>
          </div>
        </div>
        <!-- 新客优惠 -->
        <div>
          <div class="mould_4">
            <a>
              <span>
                <i>
                  <img
                    src="https://static.epetbar.com/static_wap/appmall/lib/goods/details_tag.png"
                    alt
                  />
                </i>
                <span class="fcol3">新客优惠</span>
              </span>
              <span class="tit fcol9">新客专题，超值折扣</span>
            </a>
          </div>
        </div>
        <!-- 超值搭配 -->
        <div>
          <div class="handcursor">
            <a>
              <span class="fcol3" style="width:30%">超值搭配</span>
              <span class="fcol9" style="width:65%;text-align:right">3.9元换购爱犬玩具大礼包</span>
            </a>
          </div>
        </div>
        <!-- specifications 规格 -->
        <div>
          <ul class="specifications">
            <li>
              <span>已选</span>
              <span style="color:#ea5858;">'2kg'</span>
            </li>
            <li>
              <span class="tit">规格</span>
              <div>
                <span>2kg</span>
              </div>
            </li>
          </ul>
        </div>
        <!-- 购买数量 -->
        <div>
          <div class="buy_num">
            <span>购买数量</span>
            <van-stepper v-model="value" :min="1" :max="10" integer />
          </div>
          <!-- 选择配送地址 -->
          <ul class="address bgfff bbt">
            <a href="https://wap.epet.com/place.html?fw=0">
              <li class="paddingtb10 ft13 rela arrow c333 ml10">
                <span class="ellipsis w60 pr10 handcursor">
                  <span>送至</span>
                  <i class="icon iconfont">
                    <img
                      src="//static.epetbar.com/static_wap/epetapp/pages/goods_detail/images/dress.png"
                      class="ingb"
                    />
                  </i>
                  <span>重庆 渝中区</span>
                </span>
                <span class="ellipsis w40 pr20 ftr c999">
                  <span class="hub b-all round5 ft12">E宠西部中央仓</span>
                </span>
              </li>
            </a>
          </ul>
        </div>
        <!-- 保证 -->
        <div>
          <div class="mould_9">
            <a>
              <div class="bgfff describe-ul ft12 c666">
                <span class="tag-item pt10 pb10">
                  <img
                    src="https://static.epetbar.com/static_wap/appmall/lib/goods/qualityassurance.png"
                    alt
                  />
                  <span></span>
                  <span>正品保证</span>
                </span>
                <span class="tag-item pt10 pb10">
                  <img
                    src="https://static.epetbar.com/static_wap/appmall/lib/goods/freeshipping.png"
                    alt
                  />
                  <span></span>
                  <span>99元包邮</span>
                </span>
                <span class="tag-item pt10 pb10">
                  <img
                    src="https://static.epetbar.com/static_wap/appmall/lib/goods/thirtydays.png"
                    alt
                  />
                  <span></span>
                  <span>30天退货</span>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="footer clearfix">
        <van-goods-action>
          <van-goods-action-icon icon="star-o" text="收藏" @click="onClickIcon" />
          <van-goods-action-icon icon="cart-o" :info="info" text="购物车" @click="onClickIcon" />
          <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
          <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
        </van-goods-action>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      info: 0,
      // 商品大图
      images: [],
      // 详情信息
      detail:[],
      current: 0,
      value: 1,
      gid:''
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        name:'list'
      });
    },
    onClickIcon() {
      this.$router.push({
        name:'cart'
      });
    },
    onClickButton() {
      this.info += this.value;
      this.common.setCookie('gid',this.gid,1);
      this.common.setCookie('buyNum',this.info,1)
    },
    onChange(index) {
      this.current = index;
    }
  },
  async created() {
    this.gid = this.$store.getters.getGid;
    let data = await this.$axios('https://www.easy-mock.com/mock/5d47e6b9d7bb1d0fc358c102/menus/p'+this.gid)
    this.images = data.data.datas[0].photos;
    let data1 = await this.$axios('https://www.easy-mock.com/mock/5d47e6b9d7bb1d0fc358c102/menus/'+this.gid)
    this.detail = data1.data.list;
  },
  mounted() {
    let num = this.common.getCookie('buyNum');
    if(num) {
      this.info = num;
    }
  }
  
};
</script>
<style lang="scss" scoped>
@import '@/css/detail.scss'
</style>
