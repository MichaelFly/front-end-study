<template>
  <el-main class="proWrap">
    <div class="contentWrap" ref="phonTableListWrapper">
      <picList :options="options"></picList>
    </div>
  </el-main>
</template>

<script>
  import illegalAct from '@/api/illegalAct/illegalActApi'
  import picList from '@/components/phonePiclist/phonePiclist'
  export default {
    name: 'industryTech',
    components: {
      picList
    },
    data(){
      return {
        options:{
          propDatas:{
            imgUrl:'imgUrl',
            title:'title',
            publishTime:'publishTime',
          },
          listData:[],
          rowClick:this.rowClick,
          title:'环保通报列表',
          pageInfo: {
            limit: 6,
            currentPage: 1,
            total:10
          },
        },
      }
    },
    created(){
    },
    mounted() {
      let vm = this;
      vm.getDatas();
      window.addEventListener('scroll',function(){
        let scrollTop = 0;
        if(document.documentElement&&document.documentElement.scrollTop){
          scrollTop = document.documentElement.scrollTop;
        }else if(document.body){
          scrollTop = document.body.scrollTop;
        }
        if(scrollTop+window.innerHeight>=document.body.offsetHeight){
          if(vm.options.pageInfo.total !== vm.options.listData.length){
            vm.options.pageInfo.currentPage++;
            vm.getDatas();
          }
        }
      })
    },
    methods: {
      rowClick(val) {
        let vm = this;
        vm.$router.push({path:'/phoneIllegalAct/phoneIllegalDetail',query:{id:val}})
      },
      getDatas() {
        let vm = this;
        illegalAct.ecoReportList({
          limit: vm.options.pageInfo.limit,
          offset: (vm.options.pageInfo.currentPage - 1) * vm.options.pageInfo.limit + 1,
        }).then(res => {
          if (vm.$commonFun.isSucc(res.status)) {
            vm.options.listData = vm.options.listData.concat(res.data.rows);
            vm.options.pageInfo.total = res.data.total;
          } else {
            vm.$message({
              type: 'error',
              message: '错误！'
            });
          }
        }).catch(err => {
          console.log(err);
        })
      },
    }
  }
</script>

<style lang="less" scoped>
  @import "phoneIllMore";
</style>
