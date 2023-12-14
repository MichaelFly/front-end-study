/**
* 描述 ：table头部组件 lxc
*/
<template >
  <div class="tableHeader clearfix">
    <div class="leftBtns" style="display: inline-block">
      <button v-for="item in tableHeader.leftbtns" :class="item.className" @click="item.onclick">
        <i :class="item.icon"></i>{{item.text}}</button>
    </div>
    <div class="searchGroup" style="display: inline-block;float: right">
      <el-input placeholder="请输入内容" v-model="tableHeader.searchContent" class="input-with-select" @keyup.enter.native="searchClick">
        <el-select v-model="tableHeader.selectValue" slot="prepend" placeholder="请选择" @change="selectChange">
          <el-option v-for="item in tableHeader.selectItems" :label="item.label" :value="item.value" :key="item.value"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search" @click="searchClick" ></el-button>
      </el-input>
    </div>
  </div>
</template>
<script>

  export default {
    props: ["tableHeader"],
    name: 'tableHeader',
    components: {

    },
    data() {
      return {


      }
    },
    mounted: function () {

    },
    methods: {
      selectChange:function (val) {
        let vm=this;
        vm.$props.tableHeader.selectValue=val;
      },
      searchClick:function () {
          let vm=this;
          vm.$emit('search')
      }

    }
  }
</script>

<style lang="less" scoped>
  .tableHeader{
     padding:22px 0;
     background:#fff;
    .leftBtns{
      button{
        height: 40px;
        width: 127px;
        margin-left: 20px;
        color: #fefefe;
        font-size: 16px;
        text-align: center;
        background-color: #108cee;
        cursor:pointer;
        &.greyBtn{
          background-color: #d1dee8;
        }
        &.tabBtn{
          width: auto;
          height: 20px;
          text-align: center;
          background: none;
          color: #666;
          margin: 0;
          padding-left: 30px;
          padding-right: 30px;
          font-weight: bold;
          border-right: 1px solid #999;
          font-size: 16px;
          &.active{
            color: #4aacf7;
          }
          i{
            display: none;
          }
        }
        i{
          margin-right: 8px;
        }
      }

    }
    .searchGroup{
    margin-right:50px;
      /deep/ .input-with-select{
             .el-input-group__prepend{
               border-radius:0;
               background:#fff;
               .el-input__inner{
                 width: 114px;
                 font-size: 16px;
                 color: #7b99b3;

               }
             }
              .el-input__inner{
                width: 300px;
                border-radius: 0;
              }
              .el-input-group__append{
                border-radius:0;
                background: #d1dee8;
                padding:0 8px;
                .el-button--default{
                  color: #fff;
                  font-size: 27px;
                }

              }
             }

    }

  }


</style>
