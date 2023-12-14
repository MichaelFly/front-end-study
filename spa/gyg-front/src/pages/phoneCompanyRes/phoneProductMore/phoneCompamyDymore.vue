<template>
  <el-main class="proWrap">
    <div class="contentWrap" ref="phonTableListWrapper">
      <div>
        <div class="phoneTitle">
          <h3>企业动态列表</h3>
        </div>
        <pic-list :options="options"></pic-list>
      </div>
    </div>
  </el-main>
</template>

<script>
  import picList from '@/components/phoneSecondList/phoneSecondList'
  import companyResApi from '@/api/companyRes/companyResApi'
  export default {
    components:{
      picList
    },
    mounted(){
      let vm = this;
      vm.initData();
    },
    data(){
      return{
        isDemand:"",
        options:{
          listData:[],
          propDatas:{
            title:'title',
            content:'content',
            imgUrl:'imgUrl'
          },
          rowClick:this.rowClick,
          pageInfo: {
            limit: 15,
            currentPage: 1,
            total:10
          },
        }
      }
    },
    mounted(){
      let vm = this;
      vm.getData();
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
            vm.getData();
          }
        }
      })
    },
    methods:{
      rowClick(val){
        let vm = this;
        vm.$router.push({path:'/phoneCompanyRes/phoneResourceDetail',query:{id:val}})
      },
      getData(){
        let vm = this;
        companyResApi.orgTrendsList({
          limit:vm.options.pageInfo.limit,
          offset:(vm.options.pageInfo.currentPage - 1) * vm.options.pageInfo.limit + 1,
        }).then(res=>{
          console.log(res)
          if (vm.$commonFun.isSucc(res.status)){
            vm.options.listData = vm.options.listData.concat(res.data.rows);
            vm.options.pageInfo.total = res.data.total;
            vm.sw = true;
            // vm.initData(res.data.rows,res.data.total)
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
    },
  }
</script>

<style lang="less" scoped>
  @import "phoneProductMore.less";
</style>
