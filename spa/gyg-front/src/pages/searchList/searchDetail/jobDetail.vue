<template>
  <el-main class="wrap">
    <div class="breadWrap">
      <div class="breadContent clearfix">
        <label>当前位置：</label>
        <el-breadcrumb class="breadRight" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/index'}">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/searchList',query:{keyword:$route.query.keyword}}">全部搜索</el-breadcrumb-item>
          <el-breadcrumb-item>详情</el-breadcrumb-item>
          <!--<el-breadcrumb-item>详情</el-breadcrumb-item>-->
        </el-breadcrumb>
      </div>
    </div>
    <div class="content">
      <div class="job-name clearfix">
        <p>
          <span>发布时间：{{jobDetails.publishTime}}</span>
          <span>浏览量：{{jobDetails.visitCount}}</span>
        </p>
        <h3>{{jobDetails.title}}</h3>
        <p>
          <span>{{jobDetails.salary}}</span>
          <span>{{jobDetails.yuan}}</span>
        </p>
        <p>
          <span>学历：{{jobDetails.eduBackground}}</span>
          <span>|</span>
          <span>经验: {{jobDetails.experience}}</span>
          <span>|</span>
          <span>招聘人数：{{jobDetails.quantity}}人</span>
          <span>|</span>
          <span>年龄要求 : {{jobDetails.age}}</span>
          <span>|</span>
          <span>性别：{{jobDetails.sex}}</span>
        </p>
        <p>
          <span>行业类别 : {{jobDetails.industry}}</span>
          <span>所属片区 ：{{jobDetails.district}}</span>
          <span>企业规模 ：{{jobDetails.scale}}</span>
        </p>
      </div>
      <div class="job-content clearfix">
        <h3>职位信息</h3>
        <div>
          <p v-html="this.jobDetails.content" style="font-weight: normal;font-size: 14px;color: #999999;"></p>
        </div>
        <div>
          <h3>公司名称</h3>
          <h3>{{jobDetails.orgName}}</h3>
        </div>
        <div class="clearfix">
          <div>
            <h3>联系方式</h3>
            <p>{{jobDetails.contactor}} : {{jobDetails.phone}}</p>
          </div>
          <div>
            <h3>公司地址</h3>
            <p>{{jobDetails.address}}</p>
          </div>
        </div>
      </div>
      <div class="other-jobs clearfix" v-if="getMore">
        <h3>
          <span>该公司其他职位</span>
          <span v-if="showMore" @click="toJobMore()">更多</span>
        </h3>
        <div v-for="(item,index) in jobMore" :key="index" @click="getJobDetail(item.id)">
          <p>{{item.title}}</p>
          <p>
            <span class="salary">{{item.salary}}</span>
            <span  class="yuan">{{item.yuan}}</span>
            <span>{{item.create_time |cutTime}} 发布</span>
          </p>
          <p>
            <span>学历 ：{{item.eduBackground}}</span>
            <span>|</span>
            <span>经验 : {{item.experience}}</span>
            <span>|</span>
            <span>招聘人数 ：{{item.quantity}}人</span>
          </p>
        </div>
      </div>
    </div>
  </el-main>
</template>
<script>
  import listDetail from '@/components/listDetail/listDetail'
  import companyResApi from '@/api/companyRes/companyResApi'
  export  default {
    components:{
      listDetail
    },
    data(){
      return{
        options:{
          title:'',
          publishTime:'',
          content:'',
        },
        jobDetails:{
          title:'',
          publishTime:'',
          createBy:'',
          content:'',
          eduBackground:'',
          experience:'',
          salary:'',
          orgId:'',
          age:'',
          sex:'',
          address:'',
          phone:'',
          contactor:'',
          yuan:'',
        },
        jobMore: {
          title: '',
          create_time: '',
          createBy: '',
          content: '',
          eduBackground: '',
          yuan:'',
          experience: '',
          salary: '',
          orgId: '',
        },
        showMore:true,
        id:'',
        getMore:false,
      }
    },
    // watch:{
    //   '$route' (to,from){
    //     if(this.$route.query.id){
    //       this.keyword =  this.$route.query.keyword;
    //       this.getData();
    //     }
    //   }
    // },
    updated() {
      window.scroll(0, 0);
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
        value = value.replace(/&nbsp;/ig,'');
        return value;
      }
    },
    // created(){
    //   let vm = this;
    //   companyResApi.employmentServicesDetailId({URI:vm.$route.query.id}).then(res=>{
    //     vm.getMorejobs(res.data.orgId)
    //   }).catch(error=>{
    //     console.log(error)
    //   })
    // },
    mounted(){
      this.getDetail();
      this.getMorejobs();

      // this.id= vm.$route.query.id;
    },
    methods:{
      getDetail(){
        let vm = this;
        companyResApi.employmentServicesDetailId({URI:vm.$route.query.id}).then(res=>{
          if(this.$commonFun.isSucc(res.status)){
            vm.jobDetails = res.data;
            vm.getMorejobs(res.data.orgId);
            switch (vm.jobDetails.eduBackground) {
              case "0":
                vm.jobDetails.eduBackground = "不限";
                break;
              case "1":
                vm.jobDetails.eduBackground = "高中及以上";
                break;
              case "2":
                vm.jobDetails.eduBackground = "大专及以上";
                break;
              case "3":
                vm.jobDetails.eduBackground = "本科及以上";
                break;
              case "4":
                vm.jobDetails.eduBackground = "硕士及以上";
                break;
              case "5":
                vm.jobDetails.eduBackground = "博士";
                break;
            }
            switch (vm.jobDetails.experience) {
              case "0":
                vm.jobDetails.experience = "不限";
                break;
              case "1":
                vm.jobDetails.experience = "1-3年";
                break;
              case "2":
                vm.jobDetails.experience = "3-5年";
                break;
              case "3":
                vm.jobDetails.experience = "5-10年";
                break;
              case "4":
                vm.jobDetails.experience = "10年以上";
                break;
            }
            switch (vm.jobDetails.salary) {
              case "1":
                vm.jobDetails.salary = "3000";
                vm.jobDetails.yuan = "元以下/月";
                break;
              case "2":
                vm.jobDetails.salary="3000-5000";
                vm.jobDetails.yuan = "元/月";
                break;
              case "3":
                vm.jobDetails.salary="5000-10000";
                vm.jobDetails.yuan = "元/月";
                break;
              case "4":
                vm.jobDetails.salary="10000-20000";
                vm.jobDetails.yuan = "元/月";
                break;
              case "5":
                vm.jobDetails.salary="20000";
                vm.jobDetails.yuan = "元以上/月";
                break;
            }
            switch (vm.jobDetails.sex) {
              case "0":
                vm.jobDetails.sex = "不限";
                break;
              case "1":
                vm.jobDetails.sex="男";
                break;
              case "2":
                vm.jobDetails.sex="女";
                break;

            }
          }
        }).catch(error=>{
          console.log(error)
        })
      },
      getMorejobs(val){
        let vm = this;
        companyResApi.employmentServicesByOrg({
          URI:val,
          limit:6,
        }).then(res=>{
          console.log(val)
          if (vm.$commonFun.isSucc(res.status)){
            vm.jobMore = res.data.rows;
            // console.log(res.data.rows.length)
            if (res.data.rows.length >1){
              vm.getMore = true;
            } else {
              vm.getMore = false;
            }
            if (res.data.total > 7){
              vm.showMore = true;
            } else{
              vm.showMore = false;
            }
            res.data.rows.forEach(list=>{
              switch (list.salary) {
                case "1":
                  list.salary = "3000";
                  list.yuan = "元以下/月";
                  break;
                case "2":
                  list.salary="3000-5000";
                  list.yuan = "元/月";
                  break;
                case "3":
                  list.salary="5000-10000";
                  list.yuan = "元/月";
                  break;
                case "4":
                  list.salary="10000-20000";
                  list.yuan = "元/月";
                  break;
                case "5":
                  list.salary="20000";
                  list.yuan = "元以上/月";
                  break;
              }
              switch (list.eduBackground) {
                case "0":
                  list.eduBackground = "不限";
                  break;
                case "1":
                  list.eduBackground = "高中及以上";
                  break;
                case "2":
                  list.eduBackground = "大专及以上";
                  break;
                case "3":
                  list.eduBackground = "本科及以上";
                  break;
                case "4":
                  list.eduBackground = "硕士及以上";
                  break;
                case "5":
                  list.eduBackground = "博士";
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
            })
          }
        }).catch(error=>{
          console.log(error)
        })
      },
      toPath(val){
        let vm = this;
        switch (val) {
          case '1':
            vm.$router.push({path:'/'});
            break;
          case '2':
            vm.$router.push({path:'/companyRes'});
            break;
          case '3':
            vm.$router.push({path:'/companyRes/employeeMore'});
            break;
        }
      },
      toJobMore(){
        let vm = this;
        vm.$router.push({path:'/companyRes/jobMore',query:{orgId:vm.jobDetails.orgId}});
        console.log(vm.jobMore.orgId)
      },
      getJobDetail(val){
        let vm = this;
        vm.$route.query.id = val;
        vm.getDetail();
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "jobDetail";
</style>
