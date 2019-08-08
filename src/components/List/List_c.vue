<template>
  <div>
    <!-- 国产狗粮 商品列表 -->
    <div class="big_tit">
      <van-divider dashed>
        <h3>国产狗粮</h3>
      </van-divider>
    </div>
    <div class="domestic_dog_food">
      <ul>
        <li v-for="(item,index) in douestic_dog_food_lists" :key="index" :data-id="item.gid" @click="go_detail(item.gid)">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 国产狗粮商品列表
      douestic_dog_food_lists: []
    };
  },
  methods:{
    go_detail() {
      
    }
  },
  async created() {
      let datas = await this.$axios(
      "https://www.easy-mock.com/mock/5d47e6b9d7bb1d0fc358c102/menus/list"
    );
    this.douestic_dog_food_lists = datas.data.list;
  }
};
</script>
