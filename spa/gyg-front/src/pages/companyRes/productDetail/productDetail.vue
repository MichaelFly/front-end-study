<template>
  <el-main class="wrap">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path:'/companyRes' }">企业资源</el-breadcrumb-item>
      <el-breadcrumb-item>金融服务</el-breadcrumb-item>
    </el-breadcrumb>
    <list-detail :options="options"></list-detail>
    <div class="footer">
      <span v-if="prev.id" @click="toCompanyDetail(prev.id)">上一条：{{prev.title}}</span>
      <span v-if="next.id" @click="toCompanyDetail(next.id)">下一条：{{next.title}}</span>
    </div>
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
        },
        prev:{
          id:'',
          title:'',
        },
        next:{
          id:'',
          title:'',
        }
      }
    },
    updated() {
      window.scroll(0, 0);
    },
    mounted(){
      let vm = this;
      vm.getDetail();
    },
    methods:{
      getDetail(){
        let vm = this;
        companyResApi.detail({URI:vm.$route.query.id}).then(res=>{
          if(vm.$commonFun.isSucc(res.status)){
            vm.options={
              title:res.data.title,
              publishTime:res.data.publishTime,
              content:res.data.content
            }
            vm.prev.id = res.data.previousId;
            if(vm.prev.id){
              vm.prev.title = res.data.previousTitle;
            }
            vm.next.id = res.data.nextId;
            if(vm.next.id){
              vm.next.title = res.data.nextTitle;
            }
          }
          console.log(res.data)
        }).catch(error =>{
          console.log(error)
        })
      },
      toCompanyDetail(val){
        let vm = this;
        vm.$route.query.id= val;
        vm.getDetail();
        this.backTop();
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "productDetail";
</style>
