<template>
  <el-main class="wrap">
    <div class="banner"></div>
    <!--发展政策-->
    <div class="development">
      <h3 class="leftBarTitle">
        <i class="iconfont icon-zhankai1"></i>
        <span>发展政策</span>
        <span @click="morePolicy">更多 >></span>
      </h3>
      <div class="listWrap">
        <p v-for="(item,index) in policyList" :key="index" class="clearfix" @click="policyDetail(item.id)">
          <span :title="item.title"><i class="dot"></i><i v-if="item.isTop" class="istop">[ 置顶 ]</i>{{item.title}}</span>
          <span>{{item.type | cityType}}</span>
          <span>{{item.publishTime | cutTime}}</span>
        </p>
      </div>
    </div>
    <!--科技创新-->
    <div class="techBg">
      <div class="techMain">
        <h3 class="leftBarTitle">
          <i class="iconfont icon-wuliudanao"></i>
          <span>科技创新</span>
          <span @click="moreTech">更多 >></span>
        </h3>
        <div class="techWrap clearfix">
          <div class="imgWrap">
            <div v-if="index<3" v-for="(item,index) in techList" @click="techDetail(item.id)">
              <img :src="$store.state.imgServer+item.imgUrl" alt="">
              <p class="title">{{item.title}}</p>
            </div>
          </div>
          <div class="content">
            <p  v-if="index>=3&&index<13" v-for="(item,index) in techList" :key="index" @click="techDetail(item.id)">
              <i class="dot"></i><i v-if="item.isTop" class="istop">[ 置顶 ]</i>
              {{item.title}}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!--郫都政策   申报提示-->
    <div class="twoPart clearfix">
      <div class="left">
        <h3 class="leftBarTitle">
          <i class="iconfont icon-icon"></i>
          <span>申报提示</span>
          <span @click="moreTip">更多 >></span>
        </h3>
        <div class="listWrap">
          <p v-for="(item,index) in policyApplicationList" :key="index" @click="tipDetail(item.id)">
            <span :title="item.title">
              <i class="dot"></i>
              <i v-if="item.isTop" class="istop">[ 置顶 ]</i>
              {{item.title}}
            </span>
            <span>{{item.type | cityType}}</span>
            <span>{{item.publishTime | cutTime}}</span>
          </p>
        </div>
      </div>
      <div class="right">
        <h3 class="leftBarTitle">
          <i class="iconfont icon-zhinanzhidao"></i>
          <span>郫都政策</span>
          <span @click="morePdpolicy">更多 >></span>
        </h3>
        <div class="listWrap">
          <p v-for="(item,index) in piduPolicyList" :key="index" @click="pdpolicyDetail(item.id)">
            <span :title="item.title" style="width: 300px;">
              <i class="dot"></i>
              <i v-if="item.isTop" class="istop">[ 置顶 ]</i>
              {{item.title}}
            </span>
            <span style="float: right;width: 100px">{{item.publishTime | cutTime}}</span>
          </p>
        </div>
      </div>
    </div>
    <!--创新引导-->
    <div class="innovation">
      <div class="innovationWrap">
        <h3 class="leftBarTitle">
          <i class="iconfont icon-daohangtubiao"></i>
          <span>创新引导</span>
          <span @click="moreGuide">更多 >> </span>
        </h3>
        <div class="listWrap">
          <p v-for="(item,index) in innovationGuideList" :key="index" class="clearfix" @click="guideDetail(item.id)">
            <span :title="item.title">
              <i class="dot"></i>
              <i v-if="item.isTop" class="istop">[ 置顶 ]</i>
              {{item.title}}
            </span>
            <span>{{item.type | cityType}}</span>
            <span>{{item.publishTime | cutTime}}</span>
          </p>
        </div>
      </div>
    </div>

  </el-main>
</template>
<script>
  import industryDevApis from '@/api/industryDev/industryDevApis'
  export default {
    name: 'industryDev',
    components: {

    },
    data () {
      return {
        policyList:[],
        techList:[],
        piduPolicyList:[],
        innovationGuideList:[],
        policyApplicationList:[],
      }
    },
    mounted () {
      let vm = this;
      vm.getIndustryPolicyList();
      vm.getTechInnovationList();
      vm.getPiduPolicyList();
      vm.getInnovationGuideList();
      vm.getPolicyApplicationList();
    },
    methods: {
      getIndustryPolicyList(){
        let vm = this;
        industryDevApis.industryPolicyList({
          limit:10
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
      getPiduPolicyList(){
        let vm = this;
        industryDevApis.piduPolicyList({
          limit:10
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
      getTechInnovationList(){
        let vm = this;
        industryDevApis.techInnovationList({
          limit:13
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
      getPolicyApplicationList(){
        let vm = this;
        industryDevApis.policyApplicationList({
          limit:10
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
      /*更多政策*/
      morePolicy(){
        let vm = this;
        // vm.$router.push({path: "/industryDev/morePolicy"})
        window.open(this.$router.resolve({path: "/industryDev/morePolicy"}).href, '_blank');
      },
      /*政策详情*/
      policyDetail(val){
        let vm = this;
        window.open(this.$router.resolve({path: "/industryDev/morePolicy/detail",query: {policyId: val}}).href, '_blank');
        // vm.$router.push({path: "/industryDev/morePolicy/detail",query: {policyId: val}})
      },
      /*更多郫都政策*/
      morePdpolicy(){
        let vm = this;
        window.open(this.$router.resolve({path: "/industryDev/morePdpolicy"}).href, '_blank');
        // vm.$router.push({path: "/industryDev/morePdpolicy"})
      },
      /*郫都政策详情*/
      pdpolicyDetail(val){
        let vm = this;
        window.open(this.$router.resolve({path: "/industryDev/morePdpolicy/detail",query: {pdpolicyId: val}}).href, '_blank');
        // vm.$router.push({path: "/industryDev/morePdpolicy/detail",query: {pdpolicyId: val}})
      },
      /*更多科技*/
      moreTech(){
        let vm = this;
        window.open(this.$router.resolve({path: "/industryDev/moreTech"}).href, '_blank');
        // vm.$router.push({path: "/industryDev/moreTech"})
      },
      /*科技详情*/
      techDetail(val){
        let vm = this;
        window.open(this.$router.resolve({path: "/industryDev/moreTech/detail",query: {techId: val}}).href, '_blank');
        // vm.$router.push({path: "/industryDev/moreTech/detail",query: {techId: val}})
      },
      /*更多创新引导*/
      moreGuide(){
        let vm = this;
        window.open(this.$router.resolve({path: "/industryDev/moreGuide"}).href, '_blank');
        // vm.$router.push({path: "/industryDev/moreGuide"})
      },
      /*创新引导详情*/
      guideDetail(val){
        let vm = this;
        window.open(this.$router.resolve({path: "/industryDev/moreGuide/detail",query: {guideId: val}}).href, '_blank');
        // vm.$router.push({path: "/industryDev/moreGuide/detail",query: {guideId: val}})
      },
      /*更多创新引导*/
      moreTip(){
        let vm = this;
        window.open(this.$router.resolve({path: "/industryDev/moreTip"}).href, '_blank');
        // vm.$router.push({path: "/industryDev/moreTip"})
      },
      /*创新引导详情*/
      tipDetail(val){
        let vm = this;
        window.open(this.$router.resolve({path: "/industryDev/moreTip/detail",query: {tipId: val}}).href, '_blank');
        // vm.$router.push({path: "/industryDev/moreTip/detail",query: {tipId: val}})
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
@import "industryDev";
</style>
