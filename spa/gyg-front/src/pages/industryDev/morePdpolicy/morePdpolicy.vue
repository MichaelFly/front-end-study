<template>
  <el-main class="wrap">
    <div class="breadWrap">
      <div class="breadContent clearfix">
        <label>当前位置：</label>
        <el-breadcrumb class="breadRight" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item  :to="{ path: '/index'}">首页</el-breadcrumb-item>
          <el-breadcrumb-item  :to="{ path: '/industryDev'}">产业发展</el-breadcrumb-item>
          <el-breadcrumb-item>郫都政策</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="mainWrap">
      <TableList :options="tableOptions"></TableList>
    </div>
  </el-main>
</template>
<script>
  import industryDevApis from '@/api/industryDev/industryDevApis'
  import TableList from '@/components/tableList/TableList.vue'
  export default {
    name: 'morePdpolicy',
    components: {
      TableList
    },
    data () {
      return {
        tableOptions:{
          tableData: [],
          propDatas:{
            title:'title',
            publishTime:'publishTime'
          },
          rowClick:this.rowClick,
          pageInfo:{
            total:10,
            limit:10,
            currentPage:1,
            handleCurrentChange:this.handleCurrentChange
          },
          type:''
        }
      }
    },
    mounted () {
      let vm = this;
      vm.getDatas();

    },
    methods: {
      initTable(tableData,total){
        let vm = this;
        vm.tableOptions.tableData = tableData;
        vm.tableOptions.pageInfo.total = total;
      },
      getDatas(){
        let vm = this;
        industryDevApis.piduPolicyList({
          limit:vm.tableOptions.pageInfo.limit,
          offset:(vm.tableOptions.pageInfo.currentPage-1)*10+1,
          type:vm.tableOptions.type
        }).then(res=>{
          if (vm.$commonFun.isSucc(res.status)) {
            vm.initTable(res.data.rows,res.data.total)
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
      handleCurrentChange(val){
        let vm = this;
        vm.tableOptions.pageInfo.currentPage = val;
        vm.getDatas();
      },
      rowClick(id){
        let vm = this;
        window.open(this.$router.resolve({path: "/industryDev/morePdpolicy/detail",query: {pdpolicyId: id}}).href, '_blank');
        // vm.$router.push({path: "/industryDev/morePdpolicy/detail",query: {pdpolicyId: id}})
      },
    }
  }
</script>
<style lang="less" scoped>
@import "../commonLess/secondPage";
</style>
