<template>
  <el-container class="is-vertical">
    <header-bar :header="header">
      <div slot="headerDiy">我是slotsss插入的</div>
    </header-bar>
    <!--<el-container style="width: 1000px;height: 300px;margin: 150px auto">-->
      <MTable :options="tableOptions" ref="myTable"></MTable>
      <!--<router-view/>-->
    <!--</el-container>-->
  </el-container>
</template>
<script>
  import HeaderBar from '@/components/header/Header.vue'
  import MTable from '@/components/table/Table.vue'
  import tableJs from './tableJs'

  export default {
    name: 'tableTest',
    components: {
      MTable,
      HeaderBar
    },
    data () {
      return {
        header:{
          title:'头部测试',
          isShowReturn:true,
          titleIcon:''
        },
        tableOptions: {
          handleSelectionChange(rows) {
          },
          sortChange({
                       column,
                       prop,
                       order
                     }) {
          },
          toolbar: [],
          pageSizes: [10, 20, 50],
          rowClick() {
          },
          rowDblclick() {
          },
          pageInfo: {
            pageSize: 10,
            currentPage: 1,
            handleSizeChange() {
            },
            handleCurrentChange() {
            }
          }
        }
      }
    },
    mounted () {
      let vm = this

      let total = 200
      let dataList = [
        {
          date: '2016-05-02',
          name: '王小虎5',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎6',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎7',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎8',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      vm.initTable(dataList,vm.tableOptions.pageInfo.currentPage, vm.tableOptions.pageInfo.pageSize, total,)
    },
    methods: {
      initTable (dataList, pageNo, pageSize, total) {
        let vm = this
        // 选中行事件
        let handleSelectionChangeFun = (rows) => {
          //alert(`您选中了${rows.length}行`)
        }
        let handleCurrentChangeFun = async (val) => {
          vm.tableOptions.pageInfo.currentPage = val;
          await tableTest.proxy({
            userId:'1',
            currentPage: vm.tableOptions.pageInfo.currentPage-1,
            pageSize: vm.tableOptions.pageInfo.pageSize
          }).then((data) => {
            vm.initTable(data.data.data.content,vm.tableOptions.pageInfo.currentPage, vm.tableOptions.pageInfo.pageSize, data.data.data.totalElements)
          })
        };
        // 排序改变事件
        let sortChangeFun = ({
                               column,
                               prop,
                               order
                             }) => {
          //alert(`排序${prop} - ${order}`)
        }
        let rowClick = () => {
        }
        let rowDblclick = () => {
        }
        let rowEditFun = (i, row) => {
          console.log(row)
        }
        // 改变pageSize事件
        let handleSizeChangeFun = async (val) => {
          vm.tableOptions.pageInfo.pageSize = Number(val);
          vm.tableOptions.pageInfo.currentPage = 1;
          await tableTest.proxy({
            userId:'1',
            currentPage: vm.tableOptions.pageInfo.currentPage-1,
            pageSize: vm.tableOptions.pageInfo.pageSize
          }).then((data) => {
            vm.initTable(data.data.data.content,vm.tableOptions.pageInfo.currentPage, vm.tableOptions.pageInfo.pageSize, data.data.data.totalElements)
          })
        };


        vm.tableOptions = tableJs({
          dataList: dataList,
          pageNo: pageNo,
          pageSize: pageSize,
          total: total
        }).getTableOptions({
          handleSizeChangeFun: handleSizeChangeFun,
          handleCurrentChangeFun: handleCurrentChangeFun,
          handleSelectionChangeFun: handleSelectionChangeFun,
          sortChangeFun: sortChangeFun,
          rowClick: rowClick,
          rowDblclick: rowDblclick,
          rowEditFun: rowEditFun
        })
      },
    }
  }
</script>
<style>

</style>
