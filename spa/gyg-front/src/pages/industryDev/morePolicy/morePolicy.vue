<template>
  <el-main class="wrap">
    <div class="breadWrap">
      <div class="breadContent clearfix">
        <label>当前位置：</label>
        <el-breadcrumb class="breadRight" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item  :to="{ path: '/index'}">首页</el-breadcrumb-item>
          <el-breadcrumb-item  :to="{ path: '/industryDev'}">产业发展</el-breadcrumb-item>
          <el-breadcrumb-item>发展政策</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="mainWrap">
      <div class="filterWrap">
        <span class="title">发展政策列表</span>
        <label>类型：</label>
        <span class="item" :class="index===filterActive?'active':''" v-for="(item,index) in filterType" @click="filterTable(item.value,index)">{{item.label}}</span>
      </div>
      <TableList :options="tableOptions"></TableList>
    </div>
  </el-main>
</template>
<script>
  import industryDevApis from '@/api/industryDev/industryDevApis'
  import TableList from '@/components/tableList/TableList.vue'
  export default {
    name: 'morePolicy',
    components: {
      TableList
    },
    data () {
      return {
        filterType:[
          {
            label:'全部',
            value:''
          },
          {
            label:'国家级',
            value:'1'
          },
          {
            label:'省级',
            value:'2'
          },
          {
            label:'市级',
            value:'3'
          },
          {
            label:'区级',
            value:'4'
          },
        ],
        filterActive:0,
        tableOptions:{
          tableData: [],
          propDatas:{
            title:'title',
            type:'type',
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
        industryDevApis.industryPolicyList({
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
        window.open(this.$router.resolve({path: "/industryDev/morePolicy/detail",query: {policyId: id}}).href, '_blank');
        // vm.$router.push({path: "/industryDev/morePolicy/detail",query: {policyId: id}})
      },
      filterTable(val,index){
        let vm = this;
        vm.tableOptions.type = val;
        vm.filterActive = index;
        vm.tableOptions.pageInfo.limit = 10;
        vm.tableOptions.pageInfo.currentPage = 1;
        vm.getDatas();
      }
    }
  }
</script>
<style lang="less" scoped>
@import "../commonLess/secondPage";
</style>
