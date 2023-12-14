<template>
  <el-main class="wrap">
    <div class="breadWrap">
      <div class="breadContent clearfix">
        <label>当前位置：</label>
        <el-breadcrumb class="breadRight" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/index'}">首页</el-breadcrumb-item>
          <el-breadcrumb-item>园区动态</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="mainWrap">
      <div class="filterWrap">
        <span class="title">园区动态列表</span>
        <label>类型：</label>
        <span class="item" :class="index===filterActive?'active':''" v-for="(item,index) in filterType"
              @click="filterTable(item.value,index)">{{item.label}}</span>
      </div>
      <TableList :options="tableOptions"></TableList>
    </div>
  </el-main>
</template>
<script>
  import index from '@/api/index/index'
  import TableList from '@/components/tableList/TableList.vue'

  export default {
    name: 'moreParknews',
    components: {
      TableList
    },
    data() {
      return {
        filterType: [
          {
            label: '全部',
            value: ''
          },
          {
            label: '通知',
            value: '1'
          },
          {
            label: '热点',
            value: '2'
          },
          {
            label: '喜讯',
            value: '3'
          },
        ],
        filterActive:0,
        tableOptions: {
          tableData: [],
          propDatas: {
            title: 'title',
            type: 'newsType',
            publishTime: 'publishTime',
            typeFormatter:'newsType'
          },
          rowClick: this.rowClick,
          pageInfo: {
            total: 10,
            limit: 10,
            currentPage: 1,
            handleCurrentChange: this.handleCurrentChange
          },
          type: ''
        }
      }
    },
    mounted() {
      let vm = this;
      vm.getDatas();

    },
    methods: {
      initTable(tableData, total) {
        let vm = this;
        vm.tableOptions.tableData = tableData;
        vm.tableOptions.pageInfo.total = total;
      },
      getDatas() {
        let vm = this;
        index.parkTrendsList({
          limit: vm.tableOptions.pageInfo.limit,
          offset: (vm.tableOptions.pageInfo.currentPage - 1) * 10 + 1,
          newsType: vm.tableOptions.type
        }).then(res => {
          if (vm.$commonFun.isSucc(res.status)) {
            vm.initTable(res.data.rows, res.data.total)
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
      handleCurrentChange(val) {
        let vm = this;
        vm.tableOptions.pageInfo.currentPage = val;
        vm.getDatas();
      },
      rowClick(id) {
        let vm = this;
        window.open(this.$router.resolve({path: "/index/moreParknews/detail", query: {id: id}}).href, '_blank');
        // vm.$router.push({path: "/index/moreParknews/detail", query: {id: id}})
      },
      filterTable(val,index) {
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
