<template>
  <el-main class="phoneIndustryWrap">
    <div class="banner">
      <img :src="bannerImg" alt="">
    </div>
    <!--发展政策-->
    <div class="development">
      <h3 class="leftBarTitle">
        <i class="iconfont icon-zhankai1"></i>
        <span>发展政策</span>
        <span class="titleMore" @click="morePolicy">更多 >></span>
      </h3>
      <div class="listWrap">
        <div class="item" v-for="(item,index) in policyList" :key="index"  @click="policyDetail(item.id)">
          <h3>
            <span class="dot"></span>
            <span>{{item.title}}</span>
          </h3>
          <p>
            <span class="left">{{item.type | cityType}}</span>
            <span class="right">{{item.publishTime | cutTime}}</span>
          </p>
        </div>
      </div>
    </div>
    <!--科技创新-->
    <div class="tech">
      <h3 class="leftBarTitle">
        <i class="iconfont icon-wuliudanao"></i>
        <span>科技创新</span>
        <span class="titleMore" @click="moreTech">更多 >></span>
      </h3>
      <div class="listWrap">
        <div class="item clearfix"
             v-for="(item,index) in techList"
             @click="techDetail(item.id)">
          <div class="img">
            <img width="100%" height="100%" :src="$store.state.imgServer+item.imgUrl" alt="">
          </div>
          <div class="content">
            <h3>{{item.title}}</h3>
            <div class="itemFoot clearfix">
              <span class="time">{{item.publishTime | cutTime}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--申请提示-->
    <div class="development">
      <h3 class="leftBarTitle">
        <i class="iconfont icon-icon"></i>
        <span>申报提示</span>
        <span class="titleMore" @click="moreTip">更多 >></span>
      </h3>
      <div class="listWrap">
        <div class="item" v-for="(item,index) in policyApplicationList" :key="index"  @click="tipDetail(item.id)">
          <h3>
            <span class="dot"></span>
            <span>{{item.title}}</span>
          </h3>
          <p>
            <span class="left">{{item.type | cityType}}</span>
            <span class="right">{{item.publishTime | cutTime}}</span>
          </p>
        </div>
      </div>
    </div>
    <!--郫都政策-->
    <div class="piduPolicy">
      <h3 class="leftBarTitle">
        <i class="iconfont icon-zhinanzhidao"></i>
        <span>郫都政策</span>
        <span class="titleMore" @click="morePdpolicy">更多 >></span>
      </h3>
      <div class="listWrap">
        <p class="item clearfix" v-for="(item,index) in piduPolicyList" :key="index" @click="pdpolicyDetail(item.id)">
          <span :title="item.title" class="title">
            <i class="dot"></i>
            {{item.title}}
          </span>
          <span class="time">{{item.publishTime | cutTime}}</span>
        </p>
      </div>
    </div>
    <!--创新引导-->
    <div class="development mt140">
      <h3 class="leftBarTitle">
        <i class="iconfont icon-daohangtubiao"></i>
        <span>创新引导</span>
        <span class="titleMore" @click="moreGuide">更多 >></span>
      </h3>
      <div class="listWrap">
        <div class="item" v-for="(item,index) in innovationGuideList" :key="index"  @click="guideDetail(item.id)">
          <h3>
            <span class="dot"></span>
            <span>{{item.title}}</span>
          </h3>
          <p>
            <span class="left">{{item.type | cityType}}</span>
            <span class="right">{{item.publishTime | cutTime}}</span>
          </p>
        </div>
      </div>
    </div>
    <phoneFooter></phoneFooter>
  </el-main>
</template>
<script>
  import industryDevApis from '@/api/industryDev/industryDevApis'
  import phoneFooter from '@/components/phoneFooter/phoneFooter'

  export default {
    name: 'phoneIndustry',
    components: {
      phoneFooter
    },
    data() {
      return {
        bannerImg:'static/images/industryPhoneBanner.png',
        policyList:[],
        techList:[],
        policyApplicationList:[],
        piduPolicyList:[],
        innovationGuideList:[],
      }
    },
    mounted() {
      let vm = this;
      vm.getIndustryPolicyList();
      vm.getTechInnovationList();
      vm.getPolicyApplicationList();
      vm.getPiduPolicyList();
      vm.getInnovationGuideList();
    },
    methods: {
      getIndustryPolicyList(){
        let vm = this;
        industryDevApis.industryPolicyList({
          limit:5
        }).then(res=>{
          if (vm.$commonFun.isSucc(res.status)) {
            vm.policyList = res.data.rows;
          }else{
            vm.$message({
              type: 'error',
              message: '错误！'
            });
          }
        }).catch(err=>{
          console.log(err);
        })
      },
      getTechInnovationList(){
        let vm = this;
        industryDevApis.techInnovationList({
          limit:5
        }).then(res=>{
          if (vm.$commonFun.isSucc(res.status)) {
            vm.techList = res.data.rows;
          }else{
            vm.$message({
              type: 'error',
              message: '错误！'
            });
          }
        }).catch(err=>{
          console.log(err);
        })
      },
      getPolicyApplicationList(){
        let vm = this;
        industryDevApis.policyApplicationList({
          limit:5
        }).then(res=>{
          if (vm.$commonFun.isSucc(res.status)) {
            // console.log(res);
            vm.policyApplicationList = res.data.rows;
          }else{
            vm.$message({
              type: 'error',
              message: '错误！'
            });
          }
        }).catch(err=>{
          console.log(err);
        })
      },
      getPiduPolicyList(){
        let vm = this;
        industryDevApis.piduPolicyList({
          limit:5
        }).then(res=>{
          if (vm.$commonFun.isSucc(res.status)) {
            vm.piduPolicyList = res.data.rows;
          }else{
            vm.$message({
              type: 'error',
              message: '错误！'
            });
          }
        }).catch(err=>{
          console.log(err);
        })
      },
      getInnovationGuideList(){
        let vm = this;
        industryDevApis.innovationGuideList({
          limit:5
        }).then(res=>{
          if (vm.$commonFun.isSucc(res.status)) {
            vm.innovationGuideList = res.data.rows;
          }else{
            vm.$message({
              type: 'error',
              message: '错误！'
            });
          }
        }).catch(err=>{
          console.log(err);
        })
      },
      /*更多政策*/
      morePolicy(){
        let vm = this;
        vm.$router.push({path: "/phoneIndustry/industryPolicy"})
      },
      /*政策详情*/
      policyDetail(val){
        let vm = this;
        vm.$router.push({path: "phoneIndustry/industryPolicy/detail",query: {id: val}})
      },
      /*更多科技*/
      moreTech(){
        let vm = this;
        vm.$router.push({path: "/phoneIndustry/industryTech"})
      },
      /*科技详情*/
      techDetail(val){
        let vm = this;
        vm.$router.push({path: "/phoneIndustry/industryTech/detail",query: {id: val}})
      },
      /*更多申报提示*/
      moreTip(){
        let vm = this;
        vm.$router.push({path: "/phoneIndustry/industryTip"})
      },
      /*申报提示详情*/
      tipDetail(val){
        let vm = this;
        vm.$router.push({path: "/phoneIndustry/industryTip/detail",query: {id: val}})
      },
      /*更多郫都政策*/
      morePdpolicy(){
        let vm = this;
        vm.$router.push({path: "/phoneIndustry/industryPidu"})
      },
      /*郫都政策详情*/
      pdpolicyDetail(val){
        let vm = this;
        vm.$router.push({path: "/phoneIndustry/industryPidu/detail",query: {id: val}})
      },
      /*更多创新引导*/
      moreGuide(){
        let vm = this;
        vm.$router.push({path: "/phoneIndustry/industryGuide"})
      },
      /*创新引导详情*/
      guideDetail(val){
        let vm = this;
        vm.$router.push({path: "/phoneIndustry/industryGuide/detail",query: {id: val}})
      },
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
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "phoneIndustry";
</style>

