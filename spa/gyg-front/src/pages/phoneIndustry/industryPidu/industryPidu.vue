<template>
  <el-main class="indexDywrap">
    <div class="contentWrap" ref="phonTableListWrapper">
      <div>
        <div class="phoneTitle">
          <h3>郫都政策列表</h3>
        </div>
        <phonTableList :options="tableOptions"></phonTableList>
      </div>
    </div>
  </el-main>
</template>

<script>
  import industryDevApis from '@/api/industryDev/industryDevApis'
  import phonTableList from '@/components/phonTableList/phonTableList.vue'
  export default {
    name: 'industryPidu',
    components: {
      phonTableList
    },
    data(){
      return {
        tableOptions: {
          tableData: [],
          propDatas: {
            title: 'title',
            publishTime: 'publishTime',
          },
          rowClick: this.rowClick,
          pageInfo: {
            limit: 15,
            currentPage: 1,
            total:10
          },
          type: ''
        }
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
          if(vm.tableOptions.pageInfo.total !== vm.tableOptions.tableData.length){
          vm.tableOptions.pageInfo.currentPage++;
          vm.getDatas();
          }
        }
      })
    },
    methods: {
      rowClick(id) {
        let vm = this;
        vm.$router.push({path: "/phoneIndustry/industryPidu/detail", query: {id: id}})
      },
      getDatas() {
        let vm = this;
        industryDevApis.piduPolicyList({
          limit: vm.tableOptions.pageInfo.limit,
          offset: (vm.tableOptions.pageInfo.currentPage - 1) * vm.tableOptions.pageInfo.limit + 1,
        }).then(res => {
          if (vm.$commonFun.isSucc(res.status)) {
            vm.tableOptions.tableData = vm.tableOptions.tableData.concat(res.data.rows);
            vm.tableOptions.pageInfo.total = res.data.total;
            vm.sw = true;
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
  @import "industryPidu";
</style>
