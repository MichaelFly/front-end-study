<template>
  <el-main class="phoneWrap">
    <div class="outer clearfix" v-for="(item,index) in options.listData" :key="index" @click="options.rowClick(item.id)">
      <div class="image">
        <img :src="$store.state.imgServer+item[options.propDatas.imgUrl]" alt="">
      </div>
      <div class="content">
        <h3>
          <p>{{item[options.propDatas.title]}}</p>
          <span v-if="item.isDemand ==='1'">需求</span>
        </h3>
        <p>{{item[options.propDatas.content] |filterTags}}</p>
      </div>
    </div>
  </el-main>
</template>

<script>
  export default {
    props:["options"],
    filters:{
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
    }
  }
</script>

<style lang="less" scoped>
  @import "phoneSecondList.less";
</style>
