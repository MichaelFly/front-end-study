<template>
  <el-main class="proWrap">
    <div class="contentWrap" ref="phonTableListWrapper">
      <div>
        <div class="phoneTitle">
          <h3>就业招工列表</h3>
        </div>

      </div>
      <!--<div class="jobList">-->
        <!--<div class="jobOne clearfix">-->
          <!--<div class="image">-->
            <!--<img src="" alt="">-->
          <!--</div>-->
          <!--<div class="jName clearfix">-->
            <!--<h3>-->
              <!--<p>Java开发工程师</p>-->
              <!--<p>-->
                <!--<span>3000-5000</span>-->
                <!--<span>元/月</span>-->
              <!--</p>-->
            <!--</h3>-->
            <!--<p>范德萨范德萨发的范德萨发的范德萨发的发的</p>-->
          <!--</div>-->
          <!--<div class="jdetail clearfix">-->
            <!--<h3>-->
              <!--<p>学历：本科以上</p>-->
              <!--<p class="space"></p>-->
              <!--<p>经验：5年以上</p>-->
              <!--<p class="time">2018-11-11</p>-->
            <!--</h3>-->
          <!--</div>-->
        <!--</div>-->

      <!--</div>-->
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
        companyResApi.employmentServicesList({
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
