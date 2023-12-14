<template>
  <el-main class="listDetail">
    <h3 class="title">{{options.title}}</h3>
    <p class="secondTitle">
      <span v-if="options.readNum >-2" class="time">发布时间：{{options.createTime}}</span>
      <span v-if="!options.readNum" class="time">发布时间：{{nowTime |formatDate}}</span>
      <span v-if="options.readNum >-2" class="readNum">阅读量：{{options.readNum}}</span>
      <span v-if="!options.readNum" class="readNum">阅读量：0</span>
    </p>
    <div class="img">
      <!--<img :src="imgFront+options.imgUrl" alt="">-->
    </div>
    <div class="content clearfix" v-html="options.content">
    </div>
  </el-main>
</template>
<script>
  export default {
    props: ['options'],
    data() {
      return {
        nowTime:'',
      }
    },

    mounted() {
      this.nowTime = new Date().getTime();
    },
    filters: {
      formatDate: function (value) {
        let date = new Date(value);
        let y = date.getFullYear();
        let MM = date.getMonth() + 1;
        MM = MM < 10 ? ('0' + MM) : MM;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        let h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        let m = date.getMinutes();
        m = m < 10 ? ('0' + m) : m;
        let s = date.getSeconds();
        s = s < 10 ? ('0' + s) : s;
        return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
      }
    }
  }
</script>
<style lang="less" scoped>
@import "listDetail";
</style>
