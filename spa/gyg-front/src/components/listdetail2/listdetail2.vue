<template>
  <el-main class="listDetail">
    <div class="infoWrap clearfix">
      <div class="info">
        <h3>{{options.name}}</h3>
        <p>
          <i class="iconfont icon-fenlei_"></i>
          <span>行业类别:{{options.industry}}</span>
        </p>
        <p>
          <i class="iconfont icon--fanweineiqianzhi"></i>
          <span>所属片区:{{options.district}}</span>
        </p>
        <p>
          <i class="iconfont icon-gongsi00"></i>
          <span>企业规模:{{options.scale}}</span>
        </p>
        <p>
          <i class="iconfont icon-dizhi"></i>
          <span>公司地址:{{options.address}}</span>
        </p>
      </div>
      <div class="logo">
        <img :src="$store.state.imgServer+options.logo" alt="">
      </div>
    </div>
    <div class="detail">
      <h3>公司简介</h3>
      <div class="content clearfix" v-html="options.introduce">

      </div>
    </div>
  </el-main>
</template>
<script>
  export default {
    props: ['options'],
    data() {
      return {}
    }
  }
</script>
<style lang="less" scoped>
@import "listdetail2";
</style>
