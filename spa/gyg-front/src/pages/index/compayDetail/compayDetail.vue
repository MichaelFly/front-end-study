<template>
  <el-main class="wrap">
    <div class="breadWrap">
      <div class="breadContent clearfix">
        <label>当前位置：</label>
        <el-breadcrumb class="breadRight" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/index'}">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/index/moreCompany'}">企业列表</el-breadcrumb-item>
          <el-breadcrumb-item>详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="mainWrap">
      <listDetail :options="options"></listDetail>
    </div>
  </el-main>
</template>
<script>
  import companyList from '@/api/companyList/companyList'
  import listDetail from '@/components/listdetail2/listdetail2'
  export default {
    name: 'listdetail2',
    components: {
      listDetail
    },
    data () {
      return {
        id:'',
        options:{
          address:"",
          district:"",
          industry:"",
          introduce:"",
          logo:"",
          name:"",
          scale:""
        }
      }
    },
    mounted () {
      let vm = this;
      vm.id = vm.$router.history.current.query.id;
      vm.getDetail()
    },
    methods: {
      getDetail(){
        let vm = this;
        companyList.companyDetail({
          id:vm.id
        }).then(res=>{
          if (vm.$commonFun.isSucc(res.status)) {
            console.log(res)
            vm.options = {
              address:res.data.address,
              district:res.data.district,
              industry:res.data.industry,
              introduce:res.data.introduce,
              logo:res.data.logo,
              name:res.data.name,
              scale:res.data.scale
            }

          }else{
            vm.$message({
              type: 'error',
              message: '错误！'
            });
          }
        }).catch(err=>{
          console.log(err)
        })
      },
      changeDetail(id){
        let vm = this;
        vm.id = id;
        vm.getDetail();
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../commonLess/detail";
</style>
