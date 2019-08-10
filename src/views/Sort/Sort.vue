<template>
  <div>
    <!-- 头部 -->
    <div class="header">
      <div id="sort">
        <span :class="{active:isActive}" @click="Active1">分类</span>
      </div>
      <a>
        <img src="@/assets/search-ico.png" alt class="search" />
      </a>
    </div>
    <div class="main_list">
      <div class="left_tit">
        <ul>
          <li
            v-for="(item,index) in left_List"
            :key="index"
            :data-id="item.cateid"
            v-text="item.name"
            :class="{act:isAct===index}"
            @click="act(index,item.cateid)"
          ></li>
        </ul>
      </div>
      <div class="right_lis" v-for="(item,index) in right_List1" :key="index">
        <a class="tit" v-text="item.title"></a>
        <ul>
          <li v-for="(lis,index) in item.list" :key="index" :data-id="item.id_param" @click="go_list">
            <img :src="lis.photo" alt />
            <p v-text="lis.name"></p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: true,
      //   左侧列表
      left_List: [],
      isAct: 0,
      //   为你推荐右侧数据
      right_List1: [],
      dataID: "88888"
    };
  },
  methods: {
    Active1() {
      this.isActive = true;
    },
    Active2() {
      this.isActive = false;
    },
    async act(index, id) {
      this.isAct = index;
      // 为您推荐右侧数据
      let data1 = await this.$axios(
        "https://www.easy-mock.com/mock/5d47e6b9d7bb1d0fc358c102/menus/" + id
      );
      this.right_List1 = data1.data.cate_list;
    },
    go_list() {
      this.$router.push({
        name:'list'
      });
    }
  },
  async created() {
       //   分类左侧标签栏
      let data = await this.$axios(
        "https://www.easy-mock.com/mock/5d47e6b9d7bb1d0fc358c102/menus/sort"
      );
      this.left_List = data.data.categorys;
    // console.log(data1.data);
  },
  mounted() {
       this.act(this.isAct, this.dataID);
  }
};
</script>
<style lang="scss" scoped>
@import "@/css/sort.scss";
.main_list {
  width: 100%;
  box-sizing: border-box;
  padding-top: 40px;
  .left_tit {
    position: fixed;
    top: 40px;
    left: 0;
    overflow-y: scroll;
    bottom: 0;
    padding-bottom: 45px;
    border-right: 5px solid #f3f4f5;
    ul li {
      padding: 15px 0;
      border-bottom: 1px solid #f3f4f5;
      width: 70px;
      height: 50px;
      font-size: 13px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      text-align: center;
    }
    .act {
      background: #f3f4f5;
      color: #41c856;
    }
  }
  .right_lis {
    margin-left: 75px;
    background: #fff;
    padding: 5px 5px 20px;
    .tit {
      font-size: 12px;
      color: #999;
      padding-left: 5px;
      margin-top: 15px;
      display: block;
    }
    ul {
      width: 100%;
      li {
        width: 33.33%;
        float: left;
        text-align: center;
        margin-top: 10px;
        padding: 0 5px;
        p {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          height: 20px;
          font-size: 13px;
          color: #333;
        }
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
