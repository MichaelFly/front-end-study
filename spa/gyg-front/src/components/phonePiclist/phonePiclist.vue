<template>
  <el-main class="piclistWrap">
    <div>
      <div class="title">
        <h3>
          <p></p>
          <span>{{options.title}}</span>
        </h3>
      </div>
      <div class="content clearfix" v-for="(item,index) in options.listData" :key="index" @click="options.rowClick(item.id)">
        <div class="image">
          <img :src="$store.state.imgServer+item[options.propDatas.imgUrl]" alt="">
        </div>
        <div class="contentRight">
          <p>{{item[options.propDatas.title]}}</p>
          <span v-if="item[options.propDatas.industry]">所属行业：{{item[options.propDatas.industry]}}</span>
          <span v-if="item[options.propDatas.publishTime]" class="time">发布时间：{{item[options.propDatas.publishTime] | cutTime}}</span>
        </div>
      </div>
    </div>
  </el-main>
</template>

<script>
  export default {
    props:['options'],
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
  @import "phonePiclist";
</style>
