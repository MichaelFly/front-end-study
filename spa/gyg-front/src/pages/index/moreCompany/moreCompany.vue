<template>
  <el-main class="wrap">
    <div class="breadWrap">
      <div class="breadContent clearfix">
        <label>当前位置：</label>
        <el-breadcrumb class="breadRight" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item  :to="{ path: '/index'}">首页</el-breadcrumb-item>
          <el-breadcrumb-item>企业列表</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="mainWrap">
      <div class="filterWrap">
        <span class="title">园区企业列表</span>
      </div>
      <PicList :options="picListOptions"></PicList>
    </div>
  </el-main>
</template>
<script>
  import companyList from '@/api/companyList/companyList'
  import PicList from '@/components/companyList/companyList'
  export default {
    name: 'moreCompany',
    components: {
      PicList
    },
    data () {
      return {
        picListOptions:{
          listData: [],
          propDatas:{
            imgUrl:'logo',
            title:'name',
            industry:'industry',
            district:'district',
            content:'introduce'
          },
          rowClick:this.rowClick,
          pageInfo:{
            total:10,
            limit:10,
            currentPage:1,
            handleCurrentChange:this.handleCurrentChange
          }
        }
      }
    },
    mounted () {
      let vm = this;
      vm.getDatas();

    },
    methods: {
      initTable(listData,total){
        let vm = this;
        vm.picListOptions.listData = listData;
        vm.picListOptions.pageInfo.total = total;
      },
      getDatas(){
        let vm = this;
        companyList.companyList({
          limit:vm.picListOptions.pageInfo.limit,
          offset:(vm.picListOptions.pageInfo.currentPage-1)*10+1
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
      toTop() {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
      },
      handleCurrentChange(val){
        let vm = this;
        vm.picListOptions.pageInfo.currentPage = val;
        vm.toTop();
        vm.getDatas();
      },
      rowClick(val){
        let vm = this;
        window.open(this.$router.resolve({path: "/index/moreCompany/detail",query: {id: val}}).href, '_blank');
        // vm.$router.push({path: "/index/moreCompany/detail",query: {id: val}})
      },
    }
  }
</script>
<style lang="less" scoped>
@import "../commonLess/secondPage";
</style>
