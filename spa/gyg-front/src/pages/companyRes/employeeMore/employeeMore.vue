<template>
  <el-main class="wrap">
    <div class="breadWrap">
      <div class="breadContent clearfix">
        <label>当前位置：</label>
        <el-breadcrumb class="breadRight" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/index'}">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/companyRes'}">企业资源</el-breadcrumb-item>
          <el-breadcrumb-item>就业招工</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="content">
      <div class="title clearfix">
        <h3>职位招聘列表</h3>
        <span>|</span>
        <span>排序：</span>
        <div>
          <span @click="timeSelect(timeActive)">发布时间</span>
          <div class="fl">
            <div class="up" :class="{active:timeActive}" @click="timeSelect(timeActive)"></div>
            <div class="down" :class="{active:!timeActive}" @click="timeSelect(timeActive)"></div>
          </div>
        </div>
        <div>
          <span @click="salarySelect(salaryActive)">薪资待遇</span>
          <div class="fl">
            <div class="up" :class="{active:salaryActive}" @click="salarySelect(salaryActive)"></div>
            <div class="down" :class="{active:!salaryActive}" @click="salarySelect(salaryActive)"></div>
          </div>
        </div>
        <!--<div>-->
          <!--<i class="iconfont icon-bianji" :class="{active:sortActive === '1'}" @click="sortSelect('1')"></i>-->
          <!--<i class="iconfont icon-bianji" :class="{active:sortActive === '2'}" @click="sortSelect('2')"></i>-->
          <!--<span v-if="sortActive === '1'">按职位</span>-->
          <!--<span v-if="sortActive === '2'">按公司</span>-->
        <!--</div>-->
      </div>
      <div class="table">
        <div class="clearfix" v-for="(item,index) in jobList" :key="index" @click="toDetail(item.id)">
          <div>
            <h3>
              <span v-if="item.isTop == 1" class="isTop">[置顶]</span>
              <p class="isTitle">{{item.title}}</p>
              <p class="salary">{{item.salary}}</p>
              <p class="yuan">{{item.yuan}}</p>
              <p class="urgent" v-if="item.isUrgency == '1'">紧急</p>
              <p class="recommend" v-if="item.isRecommend === '1'">推荐</p>
            </h3>
            <h3>
              <span>学历 ：{{item.eduBackground}}</span>
              <span>|</span>
              <span>经验：{{item.experience}}</span>
              <span>{{item.publishTime | cutTime}}</span>
              <span>发布</span>
            </h3>
          </div>
          <div>
            <p>{{item.orgName}} </p>
          </div>
          <div>
            <img :src="$store.state.imgServer+item.logo" alt="">
          </div>
        </div>
        <!--<div>-->
          <!--<div v-for="(item,index) in jobList" :key="index" @click="toDetail(item.id)">-->
            <!--<h3>-->
              <!--<span v-if="item.isTop ==='1'" class="isTop">[置顶]</span>-->
              <!--<span>{{item.title}}</span>-->
              <!--<span v-if="item.isUrgency ==='1'" class="urgent">紧急</span>-->
              <!--<span v-if="item.isRecommend ==='1'" class="recommend">推荐</span>-->
            <!--</h3>-->
            <!--<p>-->
              <!--<span>{{item.orgName}}</span>-->
              <!--<span>{{item.salary}}</span>-->
              <!--<span>|</span>-->
              <!--<span>{{item.create_time.split(" ")[0]}}</span>-->
              <!--<span>发布</span>-->
            <!--</p>-->
          <!--</div>-->
        <!--</div>-->
      </div>
      <el-pagination
        class="footer"
        background
        layout="prev, pager, next"
        :total="total"
        :currentPage="currentPage"
        :limit = "limit"
        @current-change="handleCurrentChange">test
      </el-pagination>
    </div>
  </el-main>
</template>

<script>
  // import TableList from '@/components/tableList/TableList.vue'
  import companyResApi from '@/api/companyRes/companyResApi'
  export default {
    // components:{
    //   TableList
    // },
    data(){
      return{
        options:{
          title:'就业招工',
          subTitle:'更多就业招工信息'
        },
        changeItem:[
          {label:'发布时间',value:'create_time'},
          {label:'薪资待遇',value:'salary'},
        ],
        checked:false,
        tableOptions:{
          tableData:[],
          propDatas:[
            {label:'职位名称',value:'title'},
            {label:'公司名称',value:'orgName'},
            {label:'薪资',value:'salary'},
            {label:'发布时间',value:'create_time'},
          ],
          rowClick:this.rowClick,
          pageInfo:{
            total:10,
            limit:10,
            currentPage:1,
            handleCurrentChange:this.handleCurrentChange
          },

        },
        isActive:'',
        timeActive:true,
        salaryActive:true,
        sortActive:'1',
        jobList:[],
        yuan:'',
        total:10,
        limit:10,
        currentPage:1,
        asc:'',
        desc:'',
        sort:'',
        order:''
      }
    },
    filters: {
      cutTime: function (value) {
        if (!value) return '';
        value = value.toString();
        let str = value.split(" ");
        return str[0]
      },
      filterTags(value){
        value = value.replace(/(\n)/g, "");
        value = value.replace(/(\t)/g, "");
        value = value.replace(/(\r)/g, "");
        value = value.replace(/<\/?[^>]*>/g, "");
        value = value.replace(/\s*/g, "");
        return value;
      }
    },
    mounted(){
      let vm = this;
      vm.getDatas();
    },
    methods:{
      initTable(tableData,total){
        let vm = this;
        vm.jobList = tableData;
        vm.total = total;
      },
      getDatas(){
        let vm = this;
        companyResApi.employmentServicesList({
          limit:vm.limit,
          offset:(vm.currentPage-1)*10+1,
          orderBy:vm.sort,
        }).then(res=>{
          if (vm.$commonFun.isSucc(res.status)){
           res.data.rows.forEach(list =>{
             switch (list.salary) {
               case "1":
                 list.salary = "3000";
                 list.yuan="元以下/月";
                 break;
               case "2":
                 list.salary="3000-5000";
                 list.yuan="元/月";
                 break;
               case "3":
                 list.salary="5000-10000";
                 list.yuan="元/月";
                 break;
               case "4":
                 list.salary="10000-20000";
                 list.yuan="元/月";
                 break;
               case "5":
                 list.salary="20000";
                 list.yuan="元以上/月";
                 break;
             }
             switch (list.eduBackground) {
               case "0":
                 list.eduBackground = "不限";
                 break;
               case "1":
                 list.eduBackground="高中及以上";
                 break;
               case "2":
                 list.eduBackground="大专及以上";
                 break;
               case "3":
                 list.eduBackground="本科及以上";
                 break;
               case "4":
                 list.eduBackground="硕士及以上";
                 break;
               case "5":
                 list.eduBackground="博士";
                 break;
             }
             switch (list.experience) {
               case "0":
                 list.experience = "不限";
                 break;
               case "1":
                 list.experience="1-3年";
                 break;
               case "2":
                 list.experience="3-5年";
                 break;
               case "3":
                 list.experience="5-10年";
                 break;
               case "4":
                 list.experience="10年以上";
                 break;
             }
           });
            vm.initTable(res.data.rows,res.data.total)
          } else{
            vm.$message({
              type:'error',
              message:'获取失败！'
            });
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
        vm.currentPage = val;
        vm.toTop();
        vm.getDatas();
      },
      toDetail(val){
        let vm = this;
        window.open(this.$router.resolve({path:'/companyRes/employeeDetail',query:{id:val}}).href, '_blank');
        // vm.$router.push({path:'/companyRes/employeeDetail',query:{id:val}})
      },
      getList(){
        let vm = this;
        setTimeout(function () {
          vm.$router.push({path: "/companyRes/employeView"})
        },500)
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
      timeSelect(val){
        let vm = this;
        vm.sort = 'createTime';
        vm.timeActive = !vm.timeActive;
        if (val=== true){
          vm.order = 'desc';
          vm.sort +=','+ 'desc';
        } else{
          vm.sort +=','+ 'asc';
        }
        vm.limit = 10;
        vm.currentPage = 1;
        vm.getDatas();
      },
      salarySelect(val){
        let vm = this;
        vm.sort = 'salary';
        vm.salaryActive = !vm.salaryActive;
        if (val === true){
          vm.order = 'desc';
          vm.sort +=','+ 'desc';
        }else{
          vm.order = 'asc';
          vm.sort += ','+'asc';
        }
        vm.limit =10;
        vm.currentPage = 1;
        vm.getDatas();
      },
      sortSelect(val){
        let vm = this;
        switch (val) {
          case '1':
            vm.sortActive = val;
            vm.limit =10;
            vm.currentPage = 1;
            vm.getDatas();
            break;
          case '2':
            vm.sortActive = val;
            vm.limit =10;
            vm.currentPage = 1;
            vm.getDatas();
            vm.$router.push({path:'/companyRes/employeView'});
            break;
        }
      },
    }
  }
</script>

<style lang="less" scoped>
  @import "employeeMore";
</style>
