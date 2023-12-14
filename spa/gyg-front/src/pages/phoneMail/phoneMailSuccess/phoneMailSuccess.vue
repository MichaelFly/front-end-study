<template>
  <el-main class="successWrap">
    <div class="sucssLogo">
      <i class="iconfont icon-sure"></i>
      <p>恭喜您，信息已经提交成功！</p>
      <p>请随时保持手机畅通</p>
      <p>将由相关人员与您联系！</p>
      <div class="btn" @click="toIndex">
        <p>返回首页</p>
      </div>
    </div>
    <phone-footer class="footer"></phone-footer>
  </el-main>
</template>

<script>
  import phoneFooter from '@/components/phoneFooter/phoneFooter'
  export default {
    components: {phoneFooter},
    methods:{
      name: 'phoneMailSuccess',
      toIndex(){
        let vm = this;
        vm.$router.push({path:'/phoneIndex'});
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "phoneMailSuccess.less";
</style>
