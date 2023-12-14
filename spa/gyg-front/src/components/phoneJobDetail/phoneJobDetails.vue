<template>
  <el-main class="jobWrap">
    <div class="jobList" v-for="(item,index) in options.listData" :key="index" @click="options.rowClick(item.id)">
      <div class="jobOne clearfix">
        <div class="image">
          <img :src="$store.state.imgServer+item[options.propDatas.imgUrl]" alt="">
        </div>
        <div class="jName clearfix">
          <h3>
            <p class="name">{{item[options.propDatas.title]}}</p>
            <p class="money" v-if="item.salary === '1'">
              <span>3千</span>
              <span>元以下/月</span>
            </p>
            <p class="money" v-if="item.salary === '2'">
              <span>3千-5千</span>
              <span>元/月</span>
            </p>
            <p class="money" v-if="item.salary === '3'">
              <span>5千-1万</span>
              <span>元/月</span>
            </p>
            <p class="money" v-if="item.salary === '4'">
              <span>1万-2万</span>
              <span>元/月</span>
            </p>
            <p class="money" v-if="item.salary === '5'">
              <span>2万</span>
              <span>元以上/月</span>
            </p>
          </h3>
          <p>{{item[options.propDatas.orgName]}}</p>
        </div>
        <div class="jdetail clearfix">
          <h3>
            <p>学历：{{item[options.propDatas.eduBackground]}}</p>
            <p class="space"></p>
            <p>经验：{{item[options.propDatas.experience]}}</p>
            <p class="time">{{item[options.propDatas.publishTime] | cutTime}}</p>
          </h3>
        </div>
      </div>
    </div>
  </el-main>
</template>
<script>
  export default {
    props:["options"],
    filters: {
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
        return value;
      }
    },
  }
</script>

<style lang="less" scoped>
  @import "phoneJobDetails.less";
</style>
