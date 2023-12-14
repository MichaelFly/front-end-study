<template>
  <el-main class="phoneDetailWrap">
    <div>
      <div class="detailTitle">
        <h3>{{options.title}}</h3>
        <p>
          <span v-if="options.publishTime">发布时间：{{options.publishTime}}</span>
          <span v-if="options.readNum">阅读量：{{options.readNum}}</span>
        </p>
      </div>
      <div class="detailContent">
        <div class="htmlContent" v-html="formatTags(options.content)"></div>
      </div>
    </div>
  </el-main>
</template>

<script>
  export default {
    props:["options"],
    methods:{
      formatTags(value){
        return value.replace(/<(?!img).*?>/g, "");
      }
    },
    filters: {

    }
  }
</script>

<style lang="less" scoped>
  @import "phonedetail.less";
</style>
