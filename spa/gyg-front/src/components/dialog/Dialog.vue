/**  * 描述 ：公共组件 - 弹窗 lxc*/
<template>
  <el-dialog :width="options.width" v-dialogDrag :visible.sync="options.visible" custom-class="myDialog" :class="options.class">
    <div slot="title" class="dialogTitleBar">
      <i v-if="options.arrow" class="el-icon-arrow-left" @click="options.arrowBack" style="cursor: pointer;margin-left:-90px"></i> {{ options.title }}
    </div>
    <slot name="dialogContent" ref="dialogContent"></slot>
    <div slot="footer" ref="dialogFooter"></div>
  </el-dialog>
</template>

<script>
  export default {
    props: ["options"],
    name: "Mdialog",
    components: {},
    data() {
      return {

      }
    },
    mounted: async function() {
    },
    methods: {

    }
  }
</script>

<style lang="less" scoped>
  .bigDialog{
    /deep/ .el-dialog {
      &.myDialog{
        width: 900px;
      }
    }
  }
  /deep/ .el-dialog {
    .el-dialog__footer{
      display: none;
    }
    &.myDialog{
      width: 600px;
      .el-dialog__header{
         padding:20px;
         background:#f6f7fb;
         border-bottom:1px solid #7b99b3;
        .dialogTitleBar{
          font-size: 16px;
          color: #586d80;
        }
      }
      .el-dialog__body{
        /*padding-right: 45px;*/
        .el-form-item__label{
          font-size: 16px;
          color: #7b99b3;
        }
        .el-form-item__content{
          .el-input{
            font-size: 16px;
            color: #98a6b2;
          }
          .el-select{
            width: 100%;
          }
          .el-radio__label{
            font-size: 16px;
            color: #7b99b3;
          }
          .btns{
            display: inline-block;
            float: right;
            .el-button{
              width: 180px;
              color: #fefefe;
              font-size: 16px;
              border-radius:0;
              &.el-button--default{
                 background:#d1dee8 ;
               }
              &.el-button--primary{
                background: #108cee;
                 margin-left:40px;
               }
            }
          }
        }

      }

    }
  }

</style>

