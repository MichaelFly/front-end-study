<template>
  <el-main class="phoneaffairDetail">
    <phone-Details :options="options"></phone-Details>
  </el-main>
</template>

<script>
  import phoneDetails from '@/components/phoneCommonDetail/phonedetail'
  import index from '@/api/index/index'
  export default {
    components: {phoneDetails},
    data(){
      return{
        options:{
          title:'',
          imgUrl:'',
          content:'',
        }
      }
    },
    mounted(){
      let vm = this;
      vm.getDetail();
    },
    methods:{
      getDetail(){
        let vm = this;
        index.affairServicesDetail({
          URI:vm.$route.query.id
        }).then(res=>{
          if (vm.$commonFun.isSucc(res.status)) {
            vm.options = {
              title:res.data.title,
              // publishTime:res.data.publishTime,
              // readNum:res.data.visitCount,
              imgUrl:res.data.imgUrl,
              content:res.data.content
            };
            vm.detailTitle = res.data.title;
            // vm.prev.id = res.data.previousId;
            // if(vm.prev.id){
            //   vm.prev.title = res.data.previousTitle;
            // }
            // vm.next.id = res.data.nextId;
            // if(vm.next.id){
            //   vm.next.title = res.data.nextTitle;
            // }
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
    }
  }
</script>

<style lang="less" scoped>
  @import "phoneAffairDetails";
</style>
