<template>
  <el-main class="listWrap">
    <div v-for="(item,index) in options.dataList" @click="options.rowClick(item.id)" :key="index">
      <h3 :title="item.title">
        <span class="dot"></span>
        <p v-if="options.propDatas.title" class="title">{{item[options.propDatas.title]}}</p>
        <p v-if="item[options.propDatas.isDemand] ==='1'" class="isDemand">{{item[options.propDatas.isDemand] | isDem}}</p>
        <p v-if="options.propDatas.orgName" class="orName">{{item[options.propDatas.orgName]}}</p>
        <p v-if="options.propDatas.publishTime" class="orName">{{item[options.propDatas.publishTime] | cutTime}}</p>
      </h3>
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
      },
      isDem(value){
        if (!value) return '';
        if(value==='1'){
          return '需求'
        }else{
          return
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "phoneList.less";
</style>
