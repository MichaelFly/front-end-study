<!--lcj-->
<template>
  <el-container  class="is-vertical">
    <navBar v-if="!mobileFlag" :options="leftBarOption"></navBar>
    <phoneNav v-if="mobileFlag" :options="leftBarPhone"></phoneNav>
    <router-view class="routerWrap"/>
    <footerBar v-if="!mobileFlag"></footerBar>
  </el-container>
</template>
<script>
  import navBar from '../components/navBar/navBar.vue'
  import phoneNav from '../components/phoneNav/phoneNav.vue'
  import footerBar from '../components/footerBar/footerBar'

  export default {
    name: 'layout',
    components: {
      navBar,
      phoneNav,
      footerBar,
    },
    data() {
      return {
        mobileFlag: false,
        menuState: "home",
        leftBarOption: {
          title: "头部菜单配置",
          data: [
            {
              "value": 1,
              "navId": 101,
              "show": true,
              "label": "首页",
              "frontUrl": "/index",
              "parentId": 0,
              "children": []
            },
            {
              "value": 2,
              "navId": 201,
              "show": true,
              "label": "产业发展",
              "frontUrl": "/industryDev",
              "parentId": 0,
              "children": []
            },
            {
              "value": 3,
              "navId": 301,
              "show": true,
              "label": "园区党建",
              // "outlink": true,
              "frontUrl": "/parkPar",
              "parentId": 0,
              "children": []
            },
            {
              "value": 4,
              "navId": 401,
              "show": true,
              "label": "企业资源",
              "frontUrl": "/companyRes",
              "parentId": 0,
              "children": []
            },
            {
              "value": 5,
              "navId": 501,
              "show": true,
              "label": "曝光台",
              "frontUrl": "/illegalAct",
              "parentId": 0,
              "children": []
            },
            {
              "value": 6,
              "navId": 601,
              "show": true,
              "label": "数据指标",
              "frontUrl": "/dataTarget",
              "parentId": 0,
              "children": []
            },
            {
              "value": 7,
              "navId": 701,
              "show": true,
              "label": "地图展示",
              "frontUrl": "/mapShow",
              "parentId": 0,
              "children": [
                {
                  "value": 1,
                  "navId": 711,
                  "show": true,
                  "label": "3D园区地图",
                  "outlink": true,
                  "frontUrl": "/district/map-3DSouth",
                  "parentId": 7
                },
                {
                  "value": 2,
                  "navId": 712,
                  "show": true,
                  "label": "电子信息功能区地图",
                  "outlink": true,
                  "frontUrl": "/district/map-industry",
                  "parentId": 7
                },
                {
                  "value": 3,
                  "navId": 713,
                  "show": true,
                  "label": "招商地图",
                  "outlink": true,
                  "frontUrl": "/district/map-investment",
                  "parentId": 7
                }
              ]
            },
          ]
        },
        leftBarPhone: {
          title: "头部菜单配置",
          data: [
            {
              "value": 1,
              "navId": 101,
              "show": true,
              "label": "首页",
              "frontUrl": "/phoneIndex",
              "parentId": 0,
              "children": []
            },
            {
              "value": 2,
              "navId": 201,
              "show": true,
              "label": "产业发展",
              "frontUrl": "/phoneIndustry",
              "parentId": 0,
              "children": []
            },
            {
              "value": 3,
              "navId": 301,
              "show": true,
              "label": "园区党建",
              "outlink": true,
              "frontUrl": "http://hlwxh.huidu.cc/",
              "parentId": 0,
              "children": []
            },
            {
              "value": 4,
              "navId": 401,
              "show": true,
              "label": "企业资源",
              "frontUrl": "/phoneCompanyRes",
              "parentId": 0,
              "children": []
            },
            {
              "value": 5,
              "navId": 501,
              "show": true,
              "label": "曝光台",
              "frontUrl": "/phoneIllegalAct",
              "parentId": 0,
              "children": []
            },
            {
              "value": 6,
              "navId": 601,
              "show": true,
              "label": "数据指标",
              "frontUrl": "/phonedataTarget",
              "parentId": 0,
              "children": []
            },
            {
              "value": 7,
              "navId": 701,
              "show": true,
              "label": "地图展示",
              "frontUrl": "/mapShow",
              "parentId": 0,
              "children": [
                {
                  "value": 1,
                  "navId": 711,
                  "show": true,
                  "label": "3D园区地图",
                  "outlink": true,
                  "frontUrl": "/district/map-3DSouth",
                  "parentId": 7
                },
                {
                  "value": 2,
                  "navId": 712,
                  "show": true,
                  "label": "电子信息功能区地图",
                  "outlink": true,
                  "frontUrl": "/district/map-industry",
                  "parentId": 7
                },
                {
                  "value": 3,
                  "navId": 713,
                  "show": true,
                  "label": "招商地图",
                  "outlink": true,
                  "frontUrl": "/district/map-investment",
                  "parentId": 7
                }
              ]
            },
          ]
        }
      }
    },
    mounted() {
      let vm = this;
      vm.mobileFlag = vm.isMobile();
    },
    methods: {
      isMobile() {
        let userAgentInfo = navigator.userAgent;

        let mobileAgents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];

        let mobile_flag = false;

        //根据userAgent判断是否是手机
        for (let v = 0; v < mobileAgents.length; v++) {
          if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
            mobile_flag = true;
            break;
          }
        }

        let screen_width = window.screen.width;
        let screen_height = window.screen.height;

        //根据屏幕分辨率判断是否是手机
        if (screen_width < 500 && screen_height < 800) {
          mobile_flag = true;
        }

        return mobile_flag;
      }
    }
  }
</script>
<style lang="less">
  .routerWrap{
    display: block;
  }
</style>
