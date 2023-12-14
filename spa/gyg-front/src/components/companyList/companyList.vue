/**  * 描述 ：公共组件 - 企业list */
<template>
  <el-main class="">
    <div class="companyList">
      <div v-for="(item,index) in options.listData" :key="index" class="item" @click="options.rowClick(item.id)">
        <div class="itemWrap clearfix">
          <div class="leftImg">
            <img :src="$store.state.imgServer+item[options.propDatas.imgUrl]" alt="">
          </div>
          <div class="rightContent">
            <h3>{{item[options.propDatas.title]}}</h3>
            <div class="rightDetail">
              <div class="left"><p>{{item[options.propDatas.content] | filterTags}}</p></div>
              <div class="mid">所属行业:{{item[options.propDatas.industry]}}</div>
              <div class="right">所属片区:{{item[options.propDatas.district]}}</div>
            </div>
          </div>
        </div>
        <p class="line"></p>
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
        fileList: []
      }
    },
    methods: {

    },
    filters: {
      filterTags(value){
        value = value.replace(/(\n)/g, "");
        value = value.replace(/(\t)/g, "");
        value = value.replace(/(\r)/g, "");
        value = value.replace(/<\/?[^>]*>/g, "");
        value = value.replace(/\s*/g, "");
        value = value.replace(/&nbsp;/g,"");
        return value;
      },
    }
  }
</script>
<style lang="less" scoped>
  @import "companyList";
</style>
