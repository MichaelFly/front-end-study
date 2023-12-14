<template>
  <el-main class="indexDetails">
    <phone-Details :options="options"></phone-Details>
    <div class="detailsFooter clearfix">
      <p  v-if="prev.id" @click="changeDetail(prev.id)">上一条 : {{prev.title}}</p>
      <p  v-if="next.id" @click="changeDetail(next.id)">下一条 : {{next.title}}</p>
    </div>
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
          publishTime:'',
          readNum:'',
          content:'',
          imgUrl:'',
        },
        id:'',
        prev:{
          id:'',
          title:''
        },
        next:{
          id:'',
          title:''
        },
      }
    },
    updated() {
      window.scroll(0, 0);
    },
    mounted(){
      let vm = this;
      vm.id = vm.$router.history.current.query.id;
      vm.getDetails();
    },
    methods:{
      getDetails(){
        let vm = this;
        index.parkTrendDetail({URI:vm.id}).then(res=>{
          if (vm.$commonFun.isSucc(res.status)){
            vm.options = {
              title:res.data.title,
              publishTime: res.data.publishTime,
              readNum:res.data.visitCount,
              content:res.data.content,
              imgUrl: res.data.imgUrl,
            };
            vm.prev.id = res.data.previousId;
            if (vm.prev.id){
              vm.prev.title = res.data.previousTitle
            }
            vm.next.id = res.data.nextId;
            if (vm.next.id ){
              vm.next.title = res.data.nextTitle;
            }
          }else{
            vm.$message({
              type: 'error',
              message: '错误！'
            });
          }
        }).catch(error=>{
          console.log(error)
        })
      },
      changeDetail(id){
        let vm = this;
        vm.id = id;
        vm.getDetails();
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "phoneIndexDetail.less";
</style>
