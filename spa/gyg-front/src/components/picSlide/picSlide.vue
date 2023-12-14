<template>
  <el-main>
    <div class="outer">
      <h3>
        <span>{{options.title}}</span>
        <span @click="options.getMore">{{options.more}}</span>
      </h3>
      <div class="img" v-for="(item,index) in options.getList" :key="index" @click="options.getDetail(item.id)" >
        <div class="images">
          <img :src="item.imgUrl" alt="">
        </div>
        <h3>{{item.title}}</h3>
        <h3>{{item.publishTime}}</h3>
      </div>
    </div>
  </el-main>
</template>

<script>
  export default {
    props:['options']
  }
</script>

<style lang="less" scoped>
  @import "picSlide";
</style>

