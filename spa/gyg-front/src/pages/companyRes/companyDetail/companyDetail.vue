<template>
  <el-main class="wrap">
    <break-crumb :options="options"></break-crumb>

    {{this.$route.query.id}}
    <list-detail :options="detailOptions"></list-detail>
  </el-main>
</template>
<script>
  import listDetail from '@/components/listDetail/listDetail'
  import companyResApi from '@/api/companyRes/companyResApi'
  import breakCrumb from '@/components/breakCrumb/breakCrumb'
  export  default {
    components:{
      listDetail,
      breakCrumb
    },
    data(){
      return{
        detailOptions:{
          title:'',
          publishTime:'',
          content:'',
        },
        options:{
          title:'企业动态',
          subTitle:'更多企业动态'
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
        companyResApi.orgTrendsDetail({URI:this.$route.query.id}).then(res=>{
          if(this.$commonFun.isSucc(res.status)){
            this.detailOptions={
              title:res.data.title,
              publishTime:res.data.publishTime,
              content:res.data.content
            }
          }

        })
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "companyDetail";
</style>
