<template>
  <el-main class="wrap">
    <div class="breadWrap">
      <div class="breadContent clearfix">
        <label>当前位置：</label>
        <el-breadcrumb class="breadRight" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/index'}">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/companyRes'}">企业资源</el-breadcrumb-item>
          <el-breadcrumb-item>企业动态</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="content">
      <div class="title">
        <h3>企业动态列表</h3>
      </div>
      <pic-list :options="picListOptions"></pic-list>
    </div>
  </el-main>
</template>

<script>
  import breakCrumb from '@/components/breakCrumb/breakCrumb'
  import PicList from '@/components/picList/PicList'
  import companyResApi from '@/api/companyRes/companyResApi'
  export default {
    components:{
      breakCrumb,
      PicList,
    },
    data(){
      return{
        options:{
          title:'企业动态',
          subTitle:"更多企业动态"
        },
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
    mounted(){
      let vm = this;
      vm.getData();
    },
    methods: {
      initData(listData, total) {
        let vm = this;
        vm.picListOptions.listData = listData;
        vm.picListOptions.pageInfo.total = total;
      },
      getData() {
        let vm = this;
        companyResApi.orgTrendsList({
          limit: vm.picListOptions.pageInfo.limit,
          offset: (vm.picListOptions.pageInfo.currentPage - 1) * 10 + 1,
        }).then(res => {
          console.log(res)
          if (vm.$commonFun.isSucc(res.status)) {
            vm.initData(res.data.rows, res.data.total)
          }
        }).catch(error => {
          console.log(error)
        })
      },
      toTop() {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
      },
      handleCurrentChange(val) {
        let vm = this;
        vm.picListOptions.pageInfo.currentPage = val;
        vm.toTop();
        vm.getData();
      },
      rowClick(row, event, column) {
        let vm = this;
        window.open(this.$router.resolve({path: "/companyRes/companyDyDetails", query: {id: row}}).href, '_blank');
        // vm.$router.push({path: "/companyRes/companyDyDetails", query: {id: row}})
      },
      path(val){
        let vm = this;
        switch (val) {
          case '1':
            vm.$router.push({path:'/'});
            break;
          case '2':
            vm.$router.push({path:'/companyRes'});
            break;
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "companyDyMore";
</style>
