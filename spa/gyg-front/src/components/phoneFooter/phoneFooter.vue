/**  * 描述 ：公共组件 - footer */
<template>
  <footer class="phoneFooter">
    <h3>版权所有：Copyright © 成都市郫都区政府工业管委会</h3>
    <p>
      川ICP备 15024075号-1 | 川ICP证-B2-20160094号
      <img :src="footerRightList[0].imgUrl" alt="">
    </p>
  </footer>
</template>

<script>
  export default {
    name:'phoneFooter',
    data() {
      return {
        footerRightList:[
          {
            imgUrl:'static/images/footer1.png',
          },
          {
            imgUrl:'static/images/footer2.png',
          },
        ],
      }
    },
    watch:{

    },
    mounted: function () {

    },
    methods: {


    }
  }
</script>
<style lang="less" scoped>
@import "phoneFooter";
</style>
