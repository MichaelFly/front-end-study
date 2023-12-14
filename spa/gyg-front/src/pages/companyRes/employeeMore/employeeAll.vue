<template>
  <el-main class="wrap">
    <break-crumb :options="optionList"></break-crumb>
    <div class="title-content">
      <h3>{{companyDetails.orgName}}</h3>
      <p>行业类别：印务包装</p>
      <p>所属片区：北片区</p>
      <p>企业规模：10-20人</p>
    </div>
    <div class="more-job" v-if="companyDetails.recruitListList.length !=0">
      <h3 class="title">职位信息  ({{companyDetails.recruitListList.length}})</h3>
      <div v-for="(item,index) in companyDetails.recruitListList" :key="index">
        <span @click="toDetail(item.id)">{{item.title}}</span>
      </div>
    </div>
  </el-main>
</template>

<script>
  import companyResApi from '@/api/companyRes/companyResApi'
  import breakCrumb from '@/components/breakCrumb/breakCrumb'
  export default {
    components:{
      breakCrumb,
    },
    data(){
      return{
        optionList:{
          title:'就业招工',
        },
        companyDetails:{
          orgName:'',
          recruitListList:{
            title:'',
            length:'',
            id:''
          },

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
        companyResApi.employmentServicesDetailId({URI:vm.$route.query.id}).then(res=>{
          console.log(res)
          if(vm.$commonFun.isSucc(res.status)){
            vm.companyDetails = res.data
          }
        }).catch(error=>{
          console.log(error)
        })
      },
      getMoreJob(){
        let vm = this;

        vm.$router.push({path:'/companyRes/employeView'})
      },
      toDetail(val){
        let vm = this;
        window.open(this.$router.resolve({path:'/companyRes/employeeDetail',query:{id:val}}).href, '_blank')
        // vm.$router.push({path:'/companyRes/employeeDetail',query:{id:val}})
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "employeeAll";
</style>
