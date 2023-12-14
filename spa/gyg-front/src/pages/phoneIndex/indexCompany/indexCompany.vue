<template>
  <el-main class="companyWrap">
    <div class="contentWrap" ref="phonTableListWrapper">
      <pic-list :options="options"></pic-list>
    </div>
  </el-main>
</template>

<script>
  import BScroll from 'better-scroll'
  import companyList from '@/api/companyList/companyList'
  import picList from '@/components/phonePiclist/phonePiclist'
  export  default {
    components:{
      picList
    },
    data(){
      return{
        options:{
          propDatas:{
            imgUrl:'logo',
            title:'name',
            industry:'industry',
          },
          listData:[],
          rowClick:this.rowClick,
          title:'园区企业列表',
          pageInfo: {
            limit: 6,
            currentPage: 1,
            total:10
          },
        },
      }
    },
    created(){
      let vm = this;
      vm.getCompanyList();
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
            vm.getCompanyList();
          }
        }
      })
    },
    mounted(){

    },
    methods:{
      getCompanyList(){
        let vm = this;
        companyList.companyList({
          limit: vm.options.pageInfo.limit,
          offset: (vm.options.pageInfo.currentPage - 1) * vm.options.pageInfo.limit + 1,
        }).then(res=>{
          if (vm.$commonFun.isSucc(res.status)) {
            vm.options.listData = vm.options.listData.concat(res.data.rows);
            vm.options.pageInfo.total = res.data.total;
          }else{
            vm.$message({
              type: 'error',
              message: '错误！'
            });
          }
        }).catch(err=>{
          console.log(err);
        })
      },
      rowClick(val){
        let vm = this;
        vm.$router.push({path:'/phoneIndex/indexCompanyDetail',query:{id:val}})
      },
    }
  }
</script>

<style lang="less" scoped>
  @import "indexCompany.less";
</style>
