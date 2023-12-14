<template>
  <el-main class="wrap">
    <div class="breadWrap">
      <div class="breadContent clearfix">
        <label>当前位置：</label>
        <el-breadcrumb class="breadRight" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/index'}">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{detailTitle}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="mainWrap">
      <div class="content">
        <listDetail :options="options"></listDetail>
        <div class="contentFooter clearfix noBorder">
          <p v-if="prev.id" @click="changeDetail(prev.id)">上一条 : {{prev.title}}</p>
          <p  v-if="next.id" @click="changeDetail(next.id)">下一条 : {{next.title}}</p>
        </div>
      </div>
    </div>
  </el-main>
</template>
<script>
  import index from '@/api/index/index'
  import listDetail from '@/components/listDetail/listDetail'
  export default {
    name: 'parknewsDetail',
    components: {
      listDetail
    },
    data () {
      return {
        id:'',
        detailTitle:'',
        options:{
          title:'',
          publishTime:' 1',
          readNum:'1 ',
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
    mounted () {
      let vm = this;
      vm.id = vm.$router.history.current.query.id;
      vm.getDetail()
    },
    methods: {
      getDetail(){
        let vm = this;
        index.affairServicesDetail({
          URI:vm.id
        }).then(res=>{
          if (vm.$commonFun.isSucc(res.status)) {
            vm.options = {
              title:res.data.title,
              publishTime:-1,
              readNum:-2,
              imgUrl:res.data.imgUrl,
              content:res.data.content
            };
            vm.detailTitle = res.data.title;
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
        vm.id = id;
        vm.getDetail();
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../commonLess/detail";
</style>
