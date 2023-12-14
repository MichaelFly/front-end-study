<template>
  <el-main class="comDetailwrap">
      <div class="fisrt clearfix">
        <div class="des">
          <p><i class="iconfont icon-fenlei_"></i>行业类别：{{companyDetails.industry}}</p>
          <p><i class="iconfont icon--fanweineiqianzhi"></i>所属片区：{{companyDetails.district}}</p>
          <p><i class="iconfont icon-gongsi00"></i>企业规模：{{companyDetails.scale}}</p>
        </div>
        <div class="logo">
          <img :src="$store.state.imgServer+companyDetails.logo" alt="">
        </div>
       <div  class="address">
         <p><i class="iconfont icon-dizhi"></i>公司地址：{{companyDetails.address}}</p>
       </div>
      </div>
      <div class="second">
        <h3>
          <p></p>
          <p>公司简介</p>
        </h3>
        <p v-html="companyDetails.introduce"></p>
      </div>
  </el-main>
</template>

<script>
  import companyList from '@/api/companyList/companyList'
  export default {
    data(){
      return{
        companyDetails:{
          address:'',
          district:'',
          industry:'',
          introduce:'',
          logo:'',
          scale:'',
        }
      }
    },
    mounted(){
      let vm = this;
      vm.getDatas();
    },
    methods:{
      getDatas(){
        let vm = this;
        companyList.companyDetail({id:vm.$route.query.id}).then(res=>{
          if (vm.$commonFun.isSucc(res.status)){
            vm.companyDetails = res.data;
          }else{
           vm.$message({
             type:'error',
             message:'错误'
           })
          }
        }).catch(error=>{
          console.log(error)
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "indexCompanyDetail.less";
</style>
