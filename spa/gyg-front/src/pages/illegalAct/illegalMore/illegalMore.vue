<template>
  <el-main class="wrap">
    <div class="breadWrap">
      <div class="breadContent clearfix">
        <label>当前位置：</label>
        <el-breadcrumb class="breadRight" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/index'}">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/illegalAct'}">曝光台</el-breadcrumb-item>
          <el-breadcrumb-item>违纪事项</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="content">
      <div class="title clearfix">
        <h3>违法违纪列表</h3>
      </div>
      <div class="list clearfix">
        <div v-for="(item,index) in list" :key="index" class="clearfix" @click="rowClick(item.id)">
          <i class="dot"></i>
          <span v-if="item.isTop === 1" class="isTop">[置顶]</span>
          <p>{{item.title}}</p>
          <p>{{item.publishTime |cutTime}}</p>
        </div>
      </div>
      <el-pagination
        background
        class="footer"
        layout="prev, pager, next"
        :total="total"
        @current-change="handleCurrentChange">
      </el-pagination>
      <!--<pic-list :options="picList"></pic-list>-->
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
    filters: {
      cutTime: function (value) {
        if (!value) return '';
        value = value.toString();
        let str = value.split(" ");
        return str[0]
      },
    },
    data(){
      return {
        navList:{
          illegalAct:true,
          title:'',
          subTitle:''
        },
        list:[],
        total:0,
        currentPage:'',
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
        vm.list = listData;
        vm.total = total;
      },
      getData(){
        let vm = this;
        illegalAct.disciplineItemsList({
          limit:10,
          offset:(vm.currentPage-1)*10+1,
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
        vm.currentPage = val;
        vm.getData();
      },
      rowClick(row,event,column){
        let vm = this;
        window.open(this.$router.resolve({path:"/illegalAct/illegalDetail",query:{id:row}}).href, '_blank');
        // vm.$router.push({path:"/illegalAct/illegalDetail",query:{id:row}})
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
