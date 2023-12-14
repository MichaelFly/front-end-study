<template>
  <el-main class="proWrap">
    <div class="contentWrap" ref="phonTableListWrapper">
      <div>
        <div class="phoneTitle">
          <h3>就业招工列表</h3>
        </div>
      </div>
      <job-list :options="options"></job-list>
    </div>
  </el-main>
</template>

<script>
  import jobList from '@/components/phoneJobDetail/phoneJobDetails'
  import companyResApi from '@/api/companyRes/companyResApi'
  export default {
    components:{
      jobList
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
            imgUrl:'logo',
            publishTime:'publishTime',
            experience:'experience',
            orgName:'orgName',
            eduBackground:'eduBackground',
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
        vm.$router.push({path:'/phoneCompanyRes/phoneJobDetail',query:{id:val}})
      },
      getData(){
        let vm = this;
        companyResApi.employmentServicesByOrg({
          URI:vm.$route.query.orgId,
          limit:vm.options.pageInfo.limit,
          offset:(vm.options.pageInfo.currentPage - 1) * vm.options.pageInfo.limit + 1,
        }).then(res=>{
          console.log(res)
          if (vm.$commonFun.isSucc(res.status)){
            vm.options.listData = vm.options.listData.concat(res.data.rows);
            vm.options.pageInfo.total = res.data.total;
            vm.sw = true;
            res.data.rows.forEach(list =>{
              switch (list.eduBackground) {
                case "0":
                  list.eduBackground = "不限";
                  break;
                case "1":
                  list.eduBackground="高中及以上";
                  break;
                case "2":
                  list.eduBackground="大专及以上";
                  break;
                case "3":
                  list.eduBackground="本科及以上";
                  break;
                case "4":
                  list.eduBackground="硕士及以上";
                  break;
                case "5":
                  list.eduBackground="博士";
                  break;
              }
              switch (list.experience) {
                case "0":
                  list.experience = "不限";
                  break;
                case "1":
                  list.experience="1-3年";
                  break;
                case "2":
                  list.experience="3-5年";
                  break;
                case "3":
                  list.experience="5-10年";
                  break;
                case "4":
                  list.experience="10年以上";
                  break;
              }
            });
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
  @import "phoneJobMore.less";
</style>
