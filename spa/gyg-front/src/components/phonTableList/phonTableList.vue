/**  * 描述 ：手机列表公共组件 - list */
<template>
  <el-main class="">
    <div class="listWrap">
      <p v-for="(item,index) in options.tableData" :key="index" class="clearfix" @click="options.rowClick(item.id)">
        <span class="left" :title="item[options.propDatas.title]"><i class="dot"></i>{{item[options.propDatas.title]}}</span>
        <span class="mid phoneNewsType" :class="`type${item[options.propDatas.type]}`" v-if="item[options.propDatas.type]">
          <template v-if="options.propDatas.typeFormatter==='newsType'">
            {{item[options.propDatas.type] | newsType}}
          </template>
          <template v-else>
            {{item[options.propDatas.type] | cityType}}
          </template>
        </span>
        <span class="right">{{item[options.propDatas.publishTime] | cutTime}}</span>
      </p>
    </div>
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
      cutTime: function (value) {
        if (!value) return ''
        value = value.toString();
        let str = value.split(" ");
        return str[0]
      },
      cityType(value){
        if (!value) return '';
        if(value==='1'){
          return '国家级'
        }else if(value==='2'){
          return '省级'
        }else if(value==='3'){
          return '市级'
        }else{
          return '区级'
        }
      },
      newsType(value){
        if (!value) return '';
        if(value==='1'){
          return '通知'
        }else if(value==='2'){
          return '热点'
        }else{
          return '喜讯'
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  .listWrap {
    background: #fff;
    > p {
      font-size: 0.42rem;
      line-height: 1.5rem;
      height: 1.64rem;
      color: @color1;
      cursor: pointer;
      border-bottom: 0.03rem solid rgba(223, 223, 223, 0.6);
      > span.left {
        float: left;
        display: block;
        height: 1.5rem;
        max-width: 6.8rem;
        font-size: 0.42rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 4;
        .dot{
          float: left;
          display: block;
          width: 0.15rem;
          height: 0.15rem;
          background: @dotColor;
          margin-top: 0.76rem;
          margin-left: 0.45rem;
          margin-right: 0.2rem;
        }
      }
      > span.mid {
        float: left;
        margin-top: 0.55rem;
        margin-left: 0.3rem;
      }
      > span.right {
        float: right;
        display: block;
        width: 2rem;
        height: 1.5rem;
        text-align: center;
        font-size: 0.3rem;
        margin-right: 0.2rem;
      }
    }
  }
  /*新闻类型*/
  .phoneNewsType {
    display: inline-block;
    height: 0.45rem;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
    line-height: 0.45rem;
    font-size: 0.3rem;
    color: #fff;
    &.type1 {
      background: #6ce4ff;
    }
    &.type2 {
      background: #fc8f8f;
    }
    &.type3 {
      background: #9ebcfe;
    }
  }
</style>
