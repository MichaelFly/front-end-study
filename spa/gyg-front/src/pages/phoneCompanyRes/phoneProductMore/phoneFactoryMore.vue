<template>
  <el-main class="proWrap">
    <div class="contentWrap" ref="phonTableListWrapper">
      <div>
        <div class="phoneTitle">
          <h3>厂房租赁列表</h3>
        </div>
        <phonTableListCity :options="tableOptions"></phonTableListCity>
      </div>
    </div>
  </el-main>
</template>

<script>
  import companyResApi from '@/api/companyRes/companyResApi'
  import phonTableListCity from '@/components/phonTableListRental/phoneTableListRental.vue'
  export default {
    name: 'industryGuide',
    components: {
      phonTableListCity
    },
    data(){
      return {
        tableOptions: {
          tableData: [],
          propDatas: {
            title: 'title',
            type: 'rentalType',
            publishTime: 'create_time'
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
        vm.$router.push({path: "/phoneCompanyRes/phoneFactoryDetail", query: {id: id}})
      },
      getDatas() {
        let vm = this;
        companyResApi.orgRentalList({
          limit: vm.tableOptions.pageInfo.limit,
          offset: (vm.tableOptions.pageInfo.currentPage - 1) * vm.tableOptions.pageInfo.limit + 1,
          rentalType: vm.tableOptions.type
        }).then(res => {
          if (vm.$commonFun.isSucc(res.status)) {
            vm.tableOptions.tableData = vm.tableOptions.tableData.concat(res.data.rows);
            vm.tableOptions.pageInfo.total = res.data.total;
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
  @import "phoneProductMore";
</style>
