/**
* 描述 ：公共头部组件
*/
<template class="header_sty">
  <el-header>
    <div style="height: 100%;width: 100%" class="headercom clearfix">
      <div class="title" style="float: left;line-height: 60px"><span class="titleImg"><i :class="header.titleIcon"></i></span>{{header.title}}</div>
      <i class="separated" v-if="header.isShowReturn"></i>
      <div class="return" title="返回" v-if="header.isShowReturn" @click="backFun"><i class="iconfont icon-icon13"></i></div>
      <div class="headerDiy">
        <slot name="headerDiy"></slot>
      </div>
      <div style="float: right;height: 38px;margin-top: 9px;margin-bottom: auto">
        <div class="headerRightIconWrap">
          <span title="消息" @click="goMessage"><i class="iconfont icon-xiaoxi1"></i></span>
          <i class="separated"></i>
          <span @click="clearToken" title="退出"><i class="iconfont icon-tuichu"></i></span>
        </div>
        <div class="header-Images headNav" >
          <p class="headNav-img">
            <span class="userName">{{userName}}</span>
            <i title="个人中心" @click="goUserCenter">
              <img width="100%" height="100%" :src="headImg" alt="">
            </i>
          </p>
        </div>
      </div>
    </div>
  </el-header>
</template>
<script>
  export default {
    props: ["header"],
    name: 'HeaderBar',
    components: {

    },
    data() {
      return {
        userProject: false,
        userName:'',
        headImg:'',
      }
    },
    mounted: function () {
      let vm = this;
      vm.userName = localStorage.getItem('userName');
    },
    methods: {
      // overShow() {
      //   this.userProject = true;
      // },
      // outHide() {
      //   this.userProject = false;
      // },
      backFun() {
        let vm = this
        vm.$router.go(-1)

      },
      clearToken(){
        let vm = this;
        vm.$confirm('确认退出?', '提醒', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          customClass:'promptBox'
        }).then(() => {
          let vm = this;
          localStorage.removeItem("accessToken");
          localStorage.removeItem("userId");
          localStorage.removeItem("userName");
          vm.$router.push({path: '/'})
        }).catch(() => {
          vm.$message({
            type: 'info',
            message: '已取消退出'
          })
        });

      },
      goUserCenter(){
        let vm = this;
        vm.$router.push({path: '/userCenter'})
      },
      goMessage(){
        let vm = this;
        vm.$router.push({path: '/message'})
      }
    }
  }
</script>

<style scoped>
  @import "./header.styl";

  .headNav-img {
    margin: 0;
  }

  .separated {
    display: block;
    float: left;
    width: 0px;
    height: 15px;
    border: 1px solid #586d80;
    margin: 22.75px 15px 0 15px;
  }

  .headercom .return {
    float: left;
    width: 17px;
    height: 15px;
    margin-top: 22.75px;
    color: #586d80;
    /*background: url("./header_return.png") no-repeat;*/
    cursor: pointer;
  }
  .headercom .return>i{
    font-weight: bold;
  }
  .title .titleImg{
    display: inline-block;
    width: 30px;
    height: 30px;
    background: #ffb167;
    float: left;
    margin-left: 5px;
    margin-right: 10px;
    margin-top: 14px;
    line-height: 30px;
    text-align: center;
    color: #fff;
  }
  .headerRightIconWrap{
    float: left;
  }
  .headerRightIconWrap>span{
    float: left;
    margin-top: 10px;
    cursor: pointer;
    color: #586d80;
  }
  .headerRightIconWrap>span:hover i{
    color: #108cee;
  }
  .headerRightIconWrap>span>i{
    font-size: 20px;
  }
  .headerRightIconWrap>i.separated{
    margin-top: 10px;
  }
  .headerDiy{
    float: left;
    margin-left: 15px;
    line-height: 60px;
  }
  .userName{
    float: left;
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    color: #91a9be;
    font-size: 14px;
  }
</style>
