/**  * 描述 ：公共组件 - 图片列表 */
<template>
  <el-main class="picListWrap">
    <div class="wrap clearfix">
      <div class="item" v-for="(item,index) in options.listData" @click="options.rowClick(item.id)">
        <div class="img">
          <img :src="$store.state.imgServer+item[options.propDatas.imgUrl]" alt="">
        </div>
        <div class="content">
          <h3 class="title">{{item[options.propDatas.title]}}</h3>
          <p v-if="options.propDatas.publishTime" class="time">发布时间：{{item[options.propDatas.publishTime] |cutTime}}</p>
          <p v-if="options.propDatas.industry">所属行业:{{item[options.propDatas.industry]}}</p>
          <p v-if="options.propDatas.district">所属片区:{{item[options.propDatas.district]}}</p>
          <p v-if="options.propDatas.content" class="comt">{{item[options.propDatas.content] | filterTags}}</p>
          <p v-if="options.propDatas.isDemand">{{item[options.propDatas.isDemand]}}</p>
        </div>
      </div>
    </div>
    <el-pagination
      background
      v-if="options.pageInfo"
      layout="prev, pager, next"
      :total="options.pageInfo.total"
      @current-change="options.pageInfo.handleCurrentChange">
    </el-pagination>
  </el-main>

</template>

<script>
  export default {
    props: ['options'],
    data() {
      return {

      }
    },
    methods: {
    },
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
  @import "picList";
</style>
