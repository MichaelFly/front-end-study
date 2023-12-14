<template>
  <el-main class="wrap">
    <div class="outer">
      <span>当前位置：</span>
      <span>网站首页 > </span>
      <span>企业资源 > </span>
      <span>企业产品</span>
    </div>
    <div class="title" v-if="subTitle"><h3>{{options.subTitle}}</h3></div>
  </el-main>
</template>

<script>
  export default {
    props:['options'],
    data(){
      return{
        subTitle:true
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "breakCrumb";
</style>
