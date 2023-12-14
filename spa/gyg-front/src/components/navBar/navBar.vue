
/** * 描述 ：公共菜单组件 lcj */
<template>
  <el-header class="navBar" :class="[navFix,notTransparent,fixBg]" height="60px">
    <div class="wrap clearfix" @click="hideSearch">
      <div class="logo">
        <div class="img">
          <img :src="logoImgUrl" >
        </div>
        <!--<div class="imgTxt">-->
          <!--<p>modern industrial park</p>-->
          <!--<p>成都现代工业港</p>-->
        <!--</div>-->
      </div>
      <!--导航-->
      <div class="navRight">
        <el-menu
                 class="el-menu-demo flyMenu"
                 :default-active="defaultActive"
                 mode="horizontal"
                 text-color="#ffffff"
        >
          <template v-for="(item,index) in options.data">
            <el-menu-item v-if="item.children.length===0" :index="item.frontUrl" class="navChange">
              <a v-if="item.outlink" :href="item.frontUrl" target="_blank">{{item.label}}</a>
              <router-link v-else
                           :to="{path:item.frontUrl}"
                           >
                {{item.label}}
              </router-link>
            </el-menu-item>
            <el-submenu v-else :index="item.frontUrl">
              <template slot="title"><span class="mapShow">{{item.label}}</span></template>
              <el-menu-item v-for="itemChild in item.children" :key="itemChild.navId" :index="item.frontUrl">
                <a v-if="itemChild.outlink" :href="`${$store.state.uploadServer}${itemChild.frontUrl}`" target="_blank" style="font-size: 16px;">{{itemChild.label}}</a>
                <router-link v-else
                             :to="{path:itemChild.frontUrl}"
                >
                  {{itemChild.label}}
                </router-link>
              </el-menu-item>
            </el-submenu>
          </template>
        </el-menu>
        <!--搜索-->
        <div class="searchWrap">
          <i v-if="showMenu" @click="showMenu=!showMenu" class="iconfont icon-fangdajing"></i>
        </div>
        <div v-if="!showMenu" class="searchContent" id="search">
          <el-input placeholder="请输入内容" v-model="searchContent" @keyup.enter.native="toPath(searchContent)">
            <template slot="append"><i class="iconfont icon-fangdajing" @click="toPath(searchContent)"></i></template>
          </el-input>
        </div>
        <div class="companyEntry">
          <router-link to="/index/directorMail">主任信箱</router-link>
          <a :href="`${$store.state.loginSite}/login`" target="_blank">企业入口</a><!--部署-->
        </div>
      </div>
    </div>
  </el-header>
</template>
<script>
  export default {
    name: 'navBar',
    props: ["options"],
    components: {

    },
    data() {
      return {
        navFix:'',
        fixBg:'',
        notTransparent:'',
        isScroll:false,
        logoImgUrl: 'static/images/logo.png',
        defaultActive:this.$router.currentRoute.fullPath,
        showMenu:true,
        searchContent:''
      };
    },
    watch:{
      '$route' (to,from){
        let vm = this;
        vm.changeIsScroll(vm.$router.currentRoute.name);
      }
    },
    mounted: function () {
      let vm = this;
      vm.changeIsScroll(vm.$router.currentRoute.name);
      window.addEventListener('scroll', vm.handleScroll)
    },
    computed: {},
    methods: {
      changeIsScroll(val){
        let vm = this;
        if(val==='index'||val==='industryDev'||val==='companyRes'||val==='illegalAct'){
          vm.isScroll = true;
          vm.notTransparent = '';
          if(val==='index'){
            vm.fixBg = 'index'
          }else if(val==='industryDev'){
            vm.fixBg = 'industryDev'
          }else if(val==='companyRes'){
            vm.fixBg = 'companyRes'
          }else if(val==='illegalAct'){
            vm.fixBg = 'illegalAct'
          }
        }else{
          vm.notTransparent = 'notTransparent';
          vm.isScroll = false;
        }

      },
      hideSearch: function(event){

        let sp = document.getElementById("search");

        if(sp){

          if(!sp.contains(event.target)){            //这句是说如果我们点击到了id为search以外的区域

            this.showMenu = true;

          }

        }

      },
      toPath(val){
        let vm = this;
        if(vm.searchContent == ""){
          vm.$message({
            type: 'error',
            message: '输入不能为空！'
          });
        }else{
          // vm.$router.push({path:'/searchList',query:{keyword:val}});
          window.open(this.$router.resolve({path:'/searchList',query:{keyword:val}}).href, '_blank');
          vm.searchContent = '';
        }
      },
      handleScroll () {
        let vm = this;
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if(scrollTop>=80&&vm.isScroll){
          vm.navFix = 'navFix'
        }else{
          vm.navFix = ''
        }
      },
    }
  }
</script>
<style lang="less" scoped>
@import "navBar";
</style>
