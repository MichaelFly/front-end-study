/**  * 描述 ：公共组件 - list */
<template>
  <el-main class="">
    <div class="listWrap">
      <p v-for="(item,index) in options.tableData" :key="index" class="clearfix" @click="options.rowClick(item.id)">
        <span class="left" :title="item[options.propDatas.title]"><i class="dot"></i><i v-if="item.isTop" class="istop">[ 置顶 ]</i>{{item[options.propDatas.title]}}</span>
        <span class="mid" v-if="item[options.propDatas.type]">
          <template v-if="options.propDatas.typeFormatter==='newsType'">
            {{item[options.propDatas.type] | newsType}}
          </template>
          <template v-else>
            {{item[options.propDatas.type] | cityType}}
          </template>

        </span>
        <span class="right">{{item[options.propDatas.createTime] | cutTime}}</span>
      </p>
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
        console.log(value)
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
    padding: 20px;
    background: #fff;
    border: 1px solid @borderColor;
    min-height: 402px;
    > p {
      font-size: @font14;
      line-height: 40px;
      color: @color2;
      cursor: pointer;
      &:hover{
        color: @bluehoverColor;
        > span:nth-of-type(1) {
          .dot{
            background: @bluehoverColor;
          }
        }
      }
      >span{
        height: 40px;
      }
      > span.left {
        float: left;
        display: block;
        width: 750px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        .dot{
          float: left;
          display: block;
          width: 5px;
          height: 5px;
          background: @dotColor;
          margin-top: 17px;
          margin-right: 10px;
        }
      }
      > span.mid {
        float: left;
        display: block;
        width: 250px;
        text-align: center;
      }
      > span.right {
        float: right;
        display: block;
        width: 120px;
        text-align: center;
      }
    }
  }
</style>
