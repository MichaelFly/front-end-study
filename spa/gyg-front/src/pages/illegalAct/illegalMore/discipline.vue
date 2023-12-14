<template>
  <el-main class="wrap">
    <div class="nav">
      <span>当前位置：</span>
      <span @click="toPath('index')">网站首页 ></span>
      <span @click="toPath('illegalAct')">曝光台 ></span>
      <span> 企业动态 </span>
    </div>
    <pic-list :options="picList"></pic-list>
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
          subTitle:''
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
        illegalAct.disciplineItemsList({
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
      handleCurrentChange(val){
        let vm = this;
        vm.picList.pageInfo.currentPage = val;
        vm.getData();
      },
      rowClick(row,event,column){
        let vm = this;
        window.open(this.$router.resolve({path:"/illegalAct/illegalDetail",query:{id:row}}).href, '_blank');
        // vm.$router.push({path:"/illegalAct/illegalDetail",query:{id:row}})
      },
      toPath(val){
        this.$router.push({path:val})
      },
    }

  }
</script>

<style lang="less" scoped>
  @import "illegalMore";
</style>
