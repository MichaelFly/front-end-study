<template>
  <el-main class="wrap">
    <div class="breadWrap">
      <div class="breadContent clearfix">
        <label>当前位置：</label>
        <el-breadcrumb class="breadRight" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/index'}">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/companyRes'}">企业资源</el-breadcrumb-item>
          <el-breadcrumb-item>金融产品</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="content">
      <div class="sort">
        <span>金融产品列表</span>
        <!--<span>|</span>-->
        <!--<span>-->
          <!--查看：-->
          <!--&lt;!&ndash;<i class="iconfont icon-yidongduanicon-" @click="finProduct" :class="{active:isActive === 1}"></i>&ndash;&gt;-->
          <!--&lt;!&ndash;<i class="iconfont icon-dingdanguanli"  @click="finRequire" :class="{active:isActive === 2}"></i>&ndash;&gt;-->
        <!--</span>-->
        <!--<span :class="{active:isActive === '1'}" @click="finProduct(isActive)">金融产品</span>-->
        <!--<span :class="{active:isActive === '2'}" @click="finRequire(isActive)">金融需求</span>-->
      </div>
      <TableList :options="tableOptions" class="table"></TableList>
    </div>
  </el-main>
</template>

<script>
  import TableList from '@/components/tableList/TableList'
  import companyResApi from '@/api/companyRes/companyResApi'
  export default {
    components:{
      TableList
    },
    data(){
      return{
        options:{
          title:'金融服务',
          subTitle:'更多金融服务'
        },
        isActive:"1",
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
    mounted(){
      let vm = this;
      vm.getDatas();
      vm.path = "/companyRes/finacialDetail";
    },
    methods:{
      initTable(tableData,total){
        let vm = this;
        vm.tableOptions.tableData = tableData;
        vm.tableOptions.pageInfo.total = total;
      },
      getDatas(){
        let vm = this;
        companyResApi.financialProductsList({
          limit:vm.tableOptions.pageInfo.limit,
          offset:(vm.tableOptions.pageInfo.currentPage-1)*10+1,
        }).then(res =>{
          if(vm.$commonFun.isSucc(res.status)){
            vm.initTable(res.data.rows,res.data.total)
          }else{
            vm.$message({
              type:'error',
              message:'获取失败！'
            });
          }
        }).catch(error =>{
          console.log(error)
        })
      },
      getRequires(){
        let vm = this;
        companyResApi.financialDemandsList({}).then(res =>{
          if(vm.$commonFun.isSucc(res.status)){
            vm.initTable(res.data.rows,res.data.rows.length)
          }else{
            vm.$message({
              type:'error',
              message:'获取失败！'
            });
          }
        }).catch(error =>{
          console.log(error)
        })
      },
      handleCurrentChange(val){
        let vm = this;
        vm.tableOptions.pageInfo.currentPage = val;
        // vm.listTable.pageInfo.currentPage = val;
        vm.getDatas();
        // vm.getRequires();
      },
      rowClick(row,event,column){
        let vm = this;
        // console.log(row)
        window.open(this.$router.resolve({path:"/companyRes/finacialDetails",query:{id:row}}).href, '_blank');
        // vm.$router.push({path:"/companyRes/finacialDetails",query:{id:row}})
      },
      finProduct(val){
        let vm = this;
        vm.isActive ="1";
        vm.getDatas();
        this.path = "/details";

      },
      finRequire(val){
        let vm = this;
        vm.isActive = "2";
        vm.getRequires();
        this.path = "/companyRes/details"
      },
      toPath(val){
        let vm = this;
        switch (val) {
          case '1':
            vm.$router.push({path:'/'});
            break;
          case '2':
            vm.$router.push({path:'/companyRes'})
        }
      },
    }
  }
</script>

<style lang="less" scoped>
  @import "financialMore";
</style>
