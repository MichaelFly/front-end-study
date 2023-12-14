<template>
  <el-main class="wrap">
    <div class="outer clearfix">
      <div class="con-wrap clearfix" v-for="(item,index) in options.listData" :key="index" @click="options.rowClick(item.id)">
        <div class="images">
          <img :src="$store.state.imgServer+item.img_url">
        </div>
        <div class="content">
          <span class="isTop" v-if="item.isTop === 1">[置顶]</span>
          <p :title="item.title">{{item.title}}</p>
          <span v-if="item.isDemand === '1'" class="isDemand">需求</span>
          <p>{{item.content | filterTags}}</p>
        </div>
      </div>
    </div>
    <el-pagination
      background
      class="footer"
      v-if="options.pageInfo"
      layout="prev, pager, next"
      :total="options.pageInfo.total"
      @current-change="options.pageInfo.handleCurrentChange">
    </el-pagination>
  </el-main>
</template>

<script>
  export default {
    props:["options"],
    filters: {
      filterTags(value){
        value = value.replace(/(\n)/g, "");
        value = value.replace(/(\t)/g, "");
        value = value.replace(/(\r)/g, "");
        value = value.replace(/<\/?[^>]*>/g, "");
        value = value.replace(/\s*/g, "");
        value = value.replace(/&nbsp;/ig,'');
        return value;
      }
    },
  }
</script>

<style lang="less" scoped>
  @import "picList2";
</style>
