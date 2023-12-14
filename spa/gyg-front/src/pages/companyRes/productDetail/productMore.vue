<template>
  <el-main class="wrap">
    <div class="breadWrap">
      <div class="breadContent clearfix">
        <label>当前位置：</label>
        <el-breadcrumb class="breadRight" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item  :to="{ path: '/'}">首页</el-breadcrumb-item>
          <el-breadcrumb-item  :to="{ path: '/companyRes'}">企业资源</el-breadcrumb-item>
          <el-breadcrumb-item>企业产品</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="mainWrap">
      <div class="filterWrap">
        <span class="title" style="font-weight: bold">企业产品列表</span>
        <label>类型：</label>
        <span class="item" :class="index===filterActive?'active':''" v-for="(item,index) in filterType" @click="filterTable(item.value,index)">{{item.label}}</span>
      </div>
      <pic-list :options="picList"></pic-list>
    </div>
  </el-main>
</template>

<script>
  import picList from '@/components/picList2/picList2'
  import companyResApi from '@/api/companyRes/companyResApi'
  export default {
    components:{
      picList
    },
    data(){
      return{
        isDemand:'',
        tableData:[],
        isActive:1,
        options:{
          title:'企业产品',
          subTitle:'更多企业产品'
        },
        picList:{
          listData:[],
          propDatas:{
            imgUrl: 'imgUrl',
            title:'title',
            content:'content',
            isDemand:'isDemand',
            publishTime:'create_time',
            isTop:'isTop',
          },
          rowClick:this.rowClick,
          pageInfo:{
            total:10,
            limit:10,
            currentPage:1,
            handleCurrentChange:this.handleCurrentChange
          }
        },
        filterActive:0,
        filterType:[
          {
            label:'全部',
            value:''
          },
          {
            label:'只看需求',
            value:'1'
          },
        ],

      }
    },
    mounted(){
      let vm = this;
      vm.getData();
    },
    methods:{
      initData(listData,total){
        let vm = this;
        vm.picList.listData = listData;
        vm.picList.pageInfo.total = total;
      },
      getData(){
        let vm = this;
        companyResApi.orgProductList({
          limit:vm.picList.pageInfo.limit,
          offset:(vm.picList.pageInfo.currentPage-1)*10+1,
          isDemand:vm.isDemand
        }).then(res=>{
          console.log(res)
          if (vm.$commonFun.isSucc(res.status)){
            vm.initData(res.data.rows,res.data.total)
          }
        }).catch(error=>{
          console.log(error)
        })
      },
      toTop() {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
      },
      handleCurrentChange(val){
        let vm = this;
        vm.picList.pageInfo.currentPage = val;
        vm.toTop();
        vm.getData();
      },
      rowClick(row,event,column){
        let vm = this;
        window.open(this.$router.resolve({path:"/companyRes/productDetails",query:{id:row}}).href, '_blank');
        // vm.$router.push({path:"/companyRes/productDetails",query:{id:row}})
      },
      productAll(val){
        let vm = this;
        vm.isDemand ='';
        vm.isActive = !vm.isActive;
        vm.getData();
      },
      productRequire(){
        let vm = this;
        vm.isDemand = 1;
        vm.isActive = !vm.isActive;
        vm.getData();
      },
      filterTable(val,index){
        let vm = this;
        vm.isDemand = val;
        vm.filterActive = index;
        vm.picList.pageInfo.limit = 10;
        vm.picList.pageInfo.currentPage = 1;
        vm.getData();
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "productMore";
  @import "../commonLess/secondPage";
</style>
