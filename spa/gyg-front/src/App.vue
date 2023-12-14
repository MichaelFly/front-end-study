<template>
  <el-container id="app">
    <router-view/>
  </el-container>
</template>

<script>
  export default {
    name: 'app',
    components: {
    },
    created () {

    },
    mounted: async function () {

    }
  }
</script>

<style rel="stylesheet/less" lang="less">
  @import "./assets/less/common.less";
  @import "./assets/icon/iconfont.css";
</style>
