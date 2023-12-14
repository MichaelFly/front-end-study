/**  * 描述 ：手机列表公共组件 - list */
<template>
  <el-main class="">
    <div class="listWrap">
      <div class="item" v-for="(item,index) in options.tableData" :key="index" @click="options.rowClick(item.id)">
        <h3>
          <span class="dot"></span>
          <span>{{item[options.propDatas.title]}}</span>
        </h3>
        <p>
          <span class="left">{{item[options.propDatas.type] | rentalType}}</span>
          <span class="right">{{item[options.propDatas.publishTime] | cutTime}}</span>
        </p>
      </div>
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
      },
      rentalType(value){
        if (!value) return '';
        if(value==='1'){
          return '招租'
        }else if(value==='2'){
          return '求租'
        }else{
          return '售卖'
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  .listWrap{
    background: #fff;
    .item{
      padding: 0.5rem;
      border-bottom: 0.02rem solid rgba(223, 223, 223, 0.6);
      &:last-of-type{
        border-bottom: none;
      }
      >h3{
        font-size: 0.42rem;
        color: @color1;
        width: 100%;
        .textOverflow();
        height: 0.6rem;
        line-height: 0.6rem;
        .dot{
          float: left;
          display: block;
          width: 0.15rem;
          height: 0.15rem;
          background: rgba(6, 207, 207, 0.5);
          margin-top: 0.25rem;
          margin-right: 0.15rem;
        }
      }
      >p{
        margin-top: 0.3rem;
        font-size: 0.3rem;
        height: 0.4rem;
        line-height: 0.4rem;
        color: @color2;
        span.left{
          float: left;
          text-indent: 1.2em;
        }
        span.right{
          float: right;
        }
      }
    }
  }
</style>
