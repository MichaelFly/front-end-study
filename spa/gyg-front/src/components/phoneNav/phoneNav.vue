
/** * 描述 ：公共手机菜单组件 lcj */
<template>
  <header class="phoneNav">
    <div class="logo">
      <img :src="logoImgUrl" alt="">
    </div>
    <div class="navIcon">
      <i @click="showMenu" class="iconfont icon-fenlei11"></i>
    </div>
    <!--弹出的nav-->
    <transition name="el-fade-in-linear">
      <div class="phoneNavContent" v-show="phoneNavShow" @touchmove.prevent>
        <div class="cover" @click="closeMenu"></div>
        <div class="rightNav">
          <el-menu
            class="phoneRightNav"
            mode="vertical"
            text-color="#ffffff">
            <template v-for="(item,index) in options.data">
              <el-menu-item v-if="item.children.length===0" :index="item.frontUrl">
                <a @click="closeMenu" v-if="item.outlink" :href="item.frontUrl" target="_blank">{{item.label}} <span class="rightArrow"> > </span></a>
                <router-link v-else @click.native="closeMenu"
                             :to="{path:item.frontUrl}"
                >
                  {{item.label}}<span class="rightArrow"> > </span>
                </router-link>
              </el-menu-item>
              <el-submenu v-else :index="item.frontUrl">
                <template slot="title">{{item.label}}</template>
                <el-menu-item v-for="itemChild in item.children" :key="itemChild.navId" :index="item.frontUrl">
                  <a @click="closeMenu" v-if="itemChild.outlink" :href="`${$store.state.uploadServer}${itemChild.frontUrl}`" target="_blank">{{itemChild.label}}<span class="rightArrow"> > </span></a>
                  <router-link v-else @click.native="closeMenu"
                               :to="{path:itemChild.frontUrl}"
                  >
                    {{itemChild.label}}<span class="rightArrow"> > </span>
                  </router-link>
                </el-menu-item>
              </el-submenu>
            </template>
          </el-menu>
          <div class="directorMail">
            <router-link to="/phoneMail" @click.native="closeMenu">主任信箱 <i class="iconfont icon-xinxi"></i></router-link>
          </div>
        </div>
      </div>
    </transition>

  </header>
</template>
<script>
  export default {
    name: 'phoneNav',
    props: ["options"],
    components: {

    },
    data() {
      return {
        logoImgUrl: 'static/images/mobileLogo.png',
        phoneNavShow:false
      };
    },
    watch:{

    },
    mounted: function () {
      let vm = this;
    },
    computed: {},
    methods: {
      closeMenu(){
        let vm = this;
        vm.phoneNavShow = false;
      },
      showMenu(){
        let vm = this;
        vm.phoneNavShow = true;
      }
    }
  }
</script>
<style lang="less" scoped>
@import "phoneNav";
</style>
