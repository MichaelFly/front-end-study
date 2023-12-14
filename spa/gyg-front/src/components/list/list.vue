<template>
  <el-main class="wrap">
    <div class="outer">
      <div class="outer-wrap clearfix"  v-for="(item,index) in options.listData" :key="index" @click="options.rowClick(item)">
        <div class="content">
          <p>
            <span>{{item.title}}</span>
            <span v-if="item.isDemand === '1'" class="isDemand">需求</span>
          </p>
          <p>
            <span>{{item.content | filterTags}}</span>
            <span>发布时间 : {{item.publishTime | cutTime}}</span>
            <span>浏览量：{{item.visitCount}}</span>
          </p>
        </div>
      </div>
    </div>
    <el-pagination
      class="footer"
      background
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
      cutTime: function (value) {
        if (!value) return '';
        value = value.toString();
        let str = value.split(" ");
        return str[0]
      },
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
  @import "list";
</style>
