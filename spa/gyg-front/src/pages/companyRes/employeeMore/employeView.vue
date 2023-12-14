<template>
  <el-main class="wrap">
    <div class="nav">
      <div class="first">
        <span>当前位置：</span>
        <span @click="path('1')">首页 > </span>
        <span @click="path('2')">企业资源 ></span>
        <span>企业动态</span>
      </div>
    </div>
    <div class="content">
      <div class="title clearfix">
        <h3>职位招聘列表</h3>
        <span>|</span>
        <span>排序：</span>
        <div>
          <span>发布时间</span>
          <div class="fl">
            <div class="up" :class="{active:timeActive === '1'}" @click="timeSelect('1')"></div>
            <div class="down" :class="{active:timeActive === '2'}" @click="timeSelect('2')"></div>
          </div>
        </div>
        <div>
          <i class="iconfont icon-bianji" :class="{active:sortActive === '1'}" @click="sortSelect('1')"></i>
          <i class="iconfont icon-bianji" :class="{active:sortActive === '2'}" @click="sortSelect('2')"></i>
          <span v-if="sortActive === '1'">按职位</span>
          <span v-if="sortActive === '2'">按公司</span>
        </div>
      </div>
      <div class="table" v-for="(item,index) in companyList" :key="index">
        <div>
          <div>
            <h3>{{item.orgName}}</h3>
            <p v-for="(job,index) in item.recruitList" :key="index" @click="toDetail(job.id)" class="job">
              <span class="first">
                <span v-if="job.status == 3" class="istop">[置顶]</span>
                <span class="title">{{job.title}}</span>
                <span v-if="job.status == 1" class="urgent">紧急</span>
                <span v-if="job.status == 2" class="recommend">推荐</span>
              </span>
              <span>{{job.salary}}</span>
              <span>|</span>
              <span>{{job.publishTime}}</span>
            </p>
            <p class="get-more" v-if="item.recruitList.length >2">{{item.recruitList.length}}更多</p>
          </div>
        </div>
      </div>
      <el-pagination
        class="footer"
        background
        layout="prev, pager, next"
        :total="total"
        @current-change="handleCurrentChange">
      </el-pagination>
      <!--<table-list :options="tableOptions"></table-list>-->
    </div>
  </el-main>
</template>

<script>
  import companyResApi from '@/api/companyRes/companyResApi'
  export default {
    data(){
      return{
        options:{
          title:'就业招工',
          subTitle:'更多就业招工'
        },
        changeItem:[
          {label:'发布时间',value:'发布时间'},
        ],
        checked:true,
        total:0,
        currentPage:1,
        publishTime:'',
        getLength:false,
        sortActive:'2',
        timeActive:'1',
        companyList:[],
      }
    },
    mounted(){
      let vm = this;
      vm.getDatas();
    },
    methods:{
      initTable(tableData,total){
        let vm = this;
        vm.companyList = tableData;
        vm.total = total;
      },
      getDatas(){
        let vm = this;
        companyResApi.employmentServicesByOrgList({
          limit:5,
          publishTime:vm.publishTime,
        }).then(res=>{
          console.log(res)
          if(vm.$commonFun.isSucc(res.status)){
            vm.initTable(res.data.rows,res.data.total)
            vm.currentPage = res.data.current;
            vm.getJobList = res.data.rows;
            vm.total = res.data.total;
            res.data.rows.forEach(list=>{
              list.recruitList.forEach(salaryType=>{
                switch (salaryType.salary) {
                  case "1":
                    salaryType.salary = "3000元以下";
                    break;
                  case "2":
                    salaryType.salary = "3000-5000元";
                    break;
                  case "3":
                    salaryType.salary = "5000-10000元";
                    break;
                  case "4":
                    salaryType.salary = "10000-20000元";
                    break;
                  case "5":
                    salaryType.salary = "20000元以上";
                    break;
                }
              })
            })
          }else{
            vm.$message({
              type: 'error',
              message: '错误！'
            });
          }
        }).catch(error=>{
          console.log(error)
        })
      },
      sortChange(val){
        let vm = this;
        vm.tableOptions.type = val;
        vm.getDatas();
      },
      getList(){
        let vm = this;
        vm.checked = false;
        setTimeout(function () {
          vm.$router.push({path: "/companyRes/employeeMore"})
        },100)
      },
      handleCurrentChange(val){
        let vm = this;
        vm.currentPage = val;
      },
      getMoreJob(val){
        // console.log(val)
        let vm = this;
        vm.$router.push({path:'/companyRes/employeeAll',query:{id:val}})
      },
      toDetail(val){
        let vm = this;
        vm.$router.push({path:'/companyRes/employeeDetail',query:{id:val,path:'就业招工'}})
      },
      getShort(){
        let vm = this;
        vm.publishTime = 'desc';
        vm.getDatas();
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
      },
      sortSelect(val){
        let vm = this;
        switch (val) {
          case '1':
            vm.sortActive = val;
            vm.$router.push({path:'/employeeMore'});
            break;
          case '2':
            vm.sortActive = val;
            break;
        }
      },
      timeSelect(val){
        let vm = this;
        vm.sort = 'create_time';
        switch (val) {
          case '1':
            vm.order = 'asc';
            vm.timeActive = val;
            vm.getDatas();
            break;
          case '2':
            vm.order = 'desc';
            vm.timeActive = val;
            vm.getDatas();
            break;
        }
      },
    }
  }
</script>

<style lang="less" scoped>
  @import "employeView";
</style>
