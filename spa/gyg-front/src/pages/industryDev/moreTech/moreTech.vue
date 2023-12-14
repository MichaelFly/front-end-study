<template>
  <el-main class="wrap">
    <div class="breadWrap">
      <div class="breadContent clearfix">
        <label>当前位置：</label>
        <el-breadcrumb class="breadRight" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item  :to="{ path: '/index'}">首页</el-breadcrumb-item>
          <el-breadcrumb-item  :to="{ path: '/industryDev'}">产业发展</el-breadcrumb-item>
          <el-breadcrumb-item>科技创新</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="mainWrap">
      <PicList :options="picListOptions"></PicList>
    </div>
  </el-main>
</template>
<script>
  import industryDevApis from '@/api/industryDev/industryDevApis'
  import PicList from '@/components/picList/PicList'
  export default {
    name: 'moreTech',
    components: {
      PicList
    },
    data () {
      return {
        picListOptions:{
          listData: [],
          propDatas:{
            imgUrl:'imgUrl',
            title:'title',
            publishTime:'publishTime',
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
        industryDevApis.techInnovationList({
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
        window.open(this.$router.resolve({path: "/industryDev/moreTech/detail",query: {techId: val}}).href, '_blank');
        // vm.$router.push({path: "/industryDev/moreTech/detail",query: {techId: val}})
      },
    }
  }
</script>
<style lang="less" scoped>
@import "../commonLess/secondPage";
</style>
