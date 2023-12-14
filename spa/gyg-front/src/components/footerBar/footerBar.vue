/**  * 描述 ：公共组件 - footer */
<template>
  <footer class="footer" :class="fixBg">
      <div class="content">
        <div class="relationship clearfix">
          <label>友情链接:</label>
          <div class="relationshipList">
            <a v-for="(item,index) in relationshipList" :href="item.href" target="_blank" :key="index">{{item.name}}</a>
          </div>
        </div>
        <div class="footerContent clearfix">
          <div class="left">
            <div class="imgWrap" v-for="(item,index) in codeList">
              <el-popover
                :visible-arrow=false
                trigger="click">
                <div class="coverWrap" style="">
                  <img :src="item.imgUrl" alt="">
                </div>
                <div class="img"  slot="reference">
                  <img :src="item.imgUrl" alt="">
                </div>
              </el-popover>
              <!--<div class="img">-->
                <!--<img :src="item.imgUrl" alt="">-->
              <!--</div>-->
              <p>{{item.name}}</p>
            </div>
          </div>
          <div class="mid">
            <div>
              <p>电话：028-87972199</p>
              <!--<p>邮箱：12345678@xx.com</p>-->
              <p>地址：成都市郫都区西源大道4799号</p>
            </div>
            <div>
              <!--<p>川ICP备 15024075号-1 | 川ICP证-B2-20160094号</p>-->
              <p>版权所有：Copyright © 成都市现代工业港管理委员会</p>
              <p>主办单位：成都现代工业港管理委员会 </p>
            </div>
          </div>
          <!--<div class="right">-->
            <!--<div class="img" v-for="(item,index) in footerRightList">-->
              <!--<img :src="item.imgUrl" alt="">-->
            <!--</div>-->
          <!--</div>-->
        </div>
      </div>
  </footer>
</template>

<script>
  export default {
    name:'footerBar',
    data() {
      return {
        fixBg:'',
        relationshipList:[
          {name:'国家工业和信息化部',href:'http://www.miit.gov.cn/'},
          {name: '四川省经济和信息化委员会',href:'http://www.scjm.gov.cn/'},
          {name:'成都市经济和信息化委员会',href:'http://www.cdgy.gov.cn/'},
          {name:'成都市中小企业服务中心',href:'http://www.cdsme.com/'},
          {name:'成都人社局',href:'http://www.cdhrss.gov.cn/index.action'},
          {name:'成都市科学技术局',href:'http://www.cdst.gov.cn/'},
          {name:'郫都区人民政府',href:'http://www.pidu.gov.cn/'},
        ],
        codeList:[
          {
            imgUrl:'static/images/weixin.png',
            name:'微信公众号'
          },
          {
            imgUrl:'static/images/weibo.png',
            name:'新浪微博'
          },
        ],
        footerRightList:[
          {
            imgUrl:'static/images/footer1.png',
          },
          {
            imgUrl:'static/images/footer2.png',
          },
        ],
      }
    },
    watch:{
      '$route' (to,from){
        let vm = this;
        vm.changeBgColor(vm.$router.currentRoute.name);
      }
    },
    mounted: function () {
      let vm = this;
      vm.changeBgColor(vm.$router.currentRoute.name);
    },
    methods: {
      changeBgColor(val){
        let vm = this;
        if(val==='index'||val==='industryDev'||val==='companyRes'||val==='illegalAct'){
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
          vm.fixBg = 'notTransparent';
        }
      },
    }
  }
</script>
<style lang="less" scoped>
@import "footerBar";
</style>
