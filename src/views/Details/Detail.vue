<template>
  <div>
    <van-nav-bar :fixed="true" title="商品" left-text=" " left-arrow>
      <van-icon name="more-o" :size="26" slot="right" />
    </van-nav-bar>
    <div class="content">
      <div class="cont">
        <!-- 大图轮播 -->
        <div class="swiperImg">
          <van-swipe @change="onChange">
            <van-swipe-item v-for="(image, index) in images" :key="index">
              <img v-lazy="image" width="100%" />
            </van-swipe-item>
            <div class="custom-indicator" slot="indicator">{{ current + 1 }}/2</div>
          </van-swipe>
        </div>
        <!-- 标题价格 -->
        <div class="tit_price">
          <p class="tit">皇家royal canin PR27小型犬成犬专用狗粮2kg</p>
          <p class="description">健康膳食 亮丽皮毛</p>
          <div class="price_box">
            <div class="price">
              <span class="pro_price">
                ￥
                <span class="sale_pri">116.00</span>
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
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ],
      current: 0,
      value: 1
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickIcon() {},
    onClickButton() {},
    onChange(index) {
      this.current = index;
    }
  }
};
</script>
<style lang="scss" scoped>
.fcol3 {
  color: #333;
}
.bgfff {
  background: #fff;
}
.c666 {
  color: #666;
}
.pt10,
.pb10 {
  padding-top: 10px;
}
.bbt {
  border-bottom: 1px solid #e5e5e5;
}
a {
  color: #333;
}
.fcol9 {
  color: #999;
}
.ellipsis {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;
}
.w60 {
  width: 60%;
}
.w40 {
  width: 40%;
}
.ftr {
  text-align: right;
}
.c999 {
  color: #999;
}
.ft12 {
  font-size: 12px;
}
.content {
  width: 100%;
  height: 100%;
  background: #fff;
  .cont {
    min-height: 900px;
    .swiperImg {
      transform:translate(0,0);
      .custom-indicator {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 30px;
        height: 30px;
        color: #fff;
        background: #999;
        border-radius: 50%;
        font-size: 12px;
        text-align: center;
        line-height: 30px;
      }
    }
    .tit_price {
      padding-bottom: 10px;
      .tit {
        font-size: 13px;
        color: #333333;
        padding: 0 10px;
      }
      .description {
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        vertical-align: middle;
        font-size: 12px;
        color: #e75656;
        padding: 0 10px;
      }
      .price_box {
        .price {
          display: flex;
          padding-top: 10px;
          margin-top: 10px;
          margin-left: 10px;
          border-top: #e5e5e5 solid 1px;
          span {
            display: inline-block;
            width: 50%;
          }
          .pro_price {
            display: flex;
            color: #ea5858;
            line-height: 25px;
            font-size: 12px;
            .sale_pri {
              font-size: 20px;
              line-height: 25px;
            }
            del {
              line-height: 25px;
              display: flex;
              color: #333;
              margin-left: -25px;
            }
          }
          .pro_origin {
            text-align: right;
            padding-right: 10px;
            a {
              display: inline-block;
              img {
                height: 25px;
              }
            }
          }
        }
      }
    }
    .promotion {
      .promo {
        padding-top: 10px;
        margin-left: 10px;
        div {
          float: left;
        }
        .text {
          width: 10%;
          font-weight: bold;
          font-size: 13px;
          color: #999;
          line-height: 31px;
        }
        .rela {
          width: 85%;
          margin-left: 5%;
          a {
            padding-bottom: 10px;
            width: 100%;
            color: #333;
            line-height: 31px;
            font-size: 12px;
            .icon {
              color: red;
              border: 1px solid red;
              border-radius: 2px;
            }
          }
        }
      }
    }
    .mould_4,
    .handcursor {
      margin: 10px 0;
      a {
        display: block;
        padding: 10px;
        font-size: 13px;
        color: #666;
        border-bottom: 1px solid #e5e5e5;
        line-height: 17px;
        i {
          vertical-align: middle;
          img {
            width: 15px;
          }
        }
        span {
          display: inline-block;
          vertical-align: middle;
        }
        .tit {
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          vertical-align: middle;
          width: 80%;
          text-align: right;
        }
      }
    }
    .handcursor {
      a {
        border: none;
      }
    }
    .specifications {
      li {
        padding: 10px 0;
        color: #666;
        margin-left: 10px;
        font-size: 13px;
        .tit {
          display: inline-block;
          width: 15%;
          color: #999;
          font-size: 12px;
          vertical-align: top;
        }
        div {
          display: inline-block;
          width: 85%;
          color: #333;
          font-size: 14px;
          span {
            color: #fff;
            background-color: #f03e3e !important;
            padding: 5px 20px;
            line-height: 1;
            display: inline-block;
            margin-right: 5px;
            margin-bottom: 5px;
            border-radius: 5px;
          }
        }
      }
    }
    .buy_num {
      display: flex;
      padding: 10px;
      span {
        display: inline-block;
        width: 20%;
        color: #333;
        font-size: 13px;
        line-height: 30px;
      }
      .van-stepper {
        border: 1px solid #333;
        border-radius: 5px;
      }
    }
    .address {
      li {
        padding: 10px;
        font-size: 13px;
        color: #333;
        margin-left: 10px;
        img {
          width: 15px;
        }
      }
    }
    .mould_9 {
      a {
        display: block;
        .tag-item {
          display: inline-block;
          width: 33.33%;
          text-align: center;
          img {
            width: 20px;
            height: 20px;
            vertical-align: middle;
          }
          span {
            margin-left: 2px;
          }
        }
      }
    }
  }
  .footer {
    position: fixed;
    bottom: 0;
    z-index: 999;
  }
}
</style>
