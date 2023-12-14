<template>
  <el-main class="wrap">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path:'/companyRes' }">企业资源</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path:'/companyRes/factoryMore' }">厂房租售</el-breadcrumb-item>
      <el-breadcrumb-item>企业动态</el-breadcrumb-item>
    </el-breadcrumb>
    <list-detail :options="options"></list-detail>
  </el-main>
</template>
<script>
  import listDetail from '@/components/listDetail/listDetail'
  import companyResApi from '@/api/companyRes/companyResApi'
  export  default {
    components:{
      listDetail
    },
    data(){
      return{
        options:{
          title:'',
          publishTime:'',
          content:'',
        }
      }
    },
    updated() {
      window.scroll(0, 0);
    },
    mounted(){
      this.getDetail();
    },
    methods:{
      getDetail(){
        companyResApi.orgResourcesDetail({URI:this.$route.query.id}).then(res=>{
          if(this.$commonFun.isSucc(res.status)){
            this.options={
              title:res.data.title,
              publishTime:res.data.publishTime,
              content:res.data.content
            }
          }
          this.option = res.data
          console.log(res.data)
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "factoryDetail";
</style>
