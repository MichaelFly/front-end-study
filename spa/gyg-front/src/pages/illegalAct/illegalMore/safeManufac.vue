<template>
  <el-main class="wrap">
    <div class="breadWrap">
      <div class="breadContent clearfix">
        <label>当前位置：</label>
        <el-breadcrumb class="breadRight" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/index'}">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/illegalAct'}">曝光台</el-breadcrumb-item>
          <el-breadcrumb-item>安全生产</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="content">
      <div class="title clearfix" style="margin-bottom: 20px;">
        <h3>安全生产列表</h3>
      </div>
      <pic-list :options="picList"></pic-list>
    </div>
  </el-main>
</template>

<script>
  import picList from '@/components/picList/PicList'
  import illegalAct from '@/api/illegalAct/illegalActApi'
  export default {
    components:{
      picList
    },
    data(){
      return {
        navList:{
          illegalAct:true,
          title:'',
          subTitle:'',
          imgUrl:''
        },
        picList:{
          listData:[],
          propDatas:{
            imgUrl: 'imgUrl',
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
      vm.navList.title = vm.$route.query.title;
      vm.navList.subTitle = vm.$route.query.subTitle;
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
        illegalAct.safeManufactureList({
          limit:10,
          offset:(vm.picList.pageInfo.currentPage-1)*10+1,
        }).then(res=>{
          if(vm.$commonFun.isSucc(res.status)){
            vm.initData(res.data.rows,res.data.total)
          }else{
            vm.$message({
              type: 'error',
              message: '错误！'
            });
          }
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
        console.log(row.id)
        window.open(this.$router.resolve({path:"/illegalAct/safeManufacDetail",query:{id:row}}).href, '_blank');
        // vm.$router.push({path:"/illegalAct/safeManufacDetail",query:{id:row}})
      },
      path(val){
        let vm = this;
        switch (val) {
          case '1':
            vm.$router.push({path:'/'});
            break;
          case '2':
            vm.$router.push({path:'/illegalAct'});
            break;
        }
      },
    }

  }
</script>

<style lang="less" scoped>
  @import "illegalMore";
</style>
