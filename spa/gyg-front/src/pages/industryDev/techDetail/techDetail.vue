<template>
  <el-main class="wrap">
    <div class="breadWrap">
      <div class="breadContent clearfix">
        <label>当前位置：</label>
        <el-breadcrumb class="breadRight" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/index'}">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/industryDev'}">产业发展</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/industryDev/moreTech'}">科技创新</el-breadcrumb-item>
          <el-breadcrumb-item>详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="mainWrap">
      <div class="content">
        <listDetail :options="options"></listDetail>
        <div class="contentFooter clearfix">
          <p v-if="prev.id" @click="changeDetail(prev.id)">上一条 : {{prev.title}}</p>
          <p v-if="next.id" @click="changeDetail(next.id)">下一条 : {{next.title}}</p>
        </div>
      </div>
    </div>


  </el-main>
</template>
<script>
  import industryDevApis from '@/api/industryDev/industryDevApis'
  import listDetail from '@/components/listDetail/listDetail'
  export default {
    name: 'techDetail',
    components: {
      listDetail
    },
    data () {
      return {
        techId:'',
        options:{
          title:'',
          publishTime:'',
          readNum:'',
          imgUrl:'',
          content:''
        },
        prev:{
          id:'',
          title:''
        },
        next:{
          id:'',
          title:''
        },
      }
    },
    updated() {
      window.scroll(0, 0);
    },
    mounted () {
      let vm = this;
      vm.techId = vm.$router.history.current.query.techId;
      vm.getDetail()
    },
    methods: {
      getDetail(){
        let vm = this;
        industryDevApis.techDetail({
          URI:vm.techId
        }).then(res=>{
          if (vm.$commonFun.isSucc(res.status)) {
            console.log(res);
            vm.options = {
              title:res.data.title,
              publishTime:res.data.publishTime,
              readNum:res.data.visitCount,
              imgUrl:res.data.imgUrl,
              content:res.data.content
            };
            vm.prev.id = res.data.previousId;
            if(vm.prev.id){
              vm.prev.title = res.data.previousTitle;
            }
            vm.next.id = res.data.nextId;
            if(vm.next.id){
              vm.next.title = res.data.nextTitle;
            }
          }else{
            vm.$message({
              type: 'error',
              message: '错误！'
            });
          }
        }).catch(err=>{
          console.log(err)
        })
      },
      changeDetail(id){
        let vm = this;
        vm.techId = id;
        vm.getDetail();
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../commonLess/detail";
</style>
