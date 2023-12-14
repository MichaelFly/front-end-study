<template>
  <el-main class="jobWrap">
    <div class="des">
      <div class="jobName">
        <div class="clearfix">
          <p class="name">{{jobDetails.title}}</p>
          <p v-if="jobDetails.salary === '1'">
            <span>3000</span>
            <span>元以下/月</span>
          </p>
          <p v-if="jobDetails.salary === '2'">
            <span>3000-5000</span>
            <span>元/月</span>
          </p>
          <p v-if="jobDetails.salary === '3'">
            <span>5000-10000</span>
            <span>元/月</span>
          </p>
          <p v-if="jobDetails.salary === '4'">
            <span>10000-20000</span>
            <span>元/月</span>
          </p>
          <p v-if="jobDetails.salary === '5'">
            <span>20000</span>
            <span>元以上/月</span>
          </p>
          <p class="second">{{jobDetails.publishTime|cutTime}}</p>
        </div>
        <div class="textLine clearfix">
          <p class="first">
            <span>经验：{{jobDetails.experience}}</span>
            <span>|</span>
            <span>学历：{{jobDetails.eduBackground}}</span>
          </p>
          <!--<p class="second">{{jobDetails.publishTime|cutTime}}</p>-->
        </div>
        <div class="textLine clearfix">
          <p class="first">
           行业类别：{{jobDetails.industry}}
          </p>
        </div>
        <div class="textLine clearfix">
          <p class="first">
            <span>规模:{{jobDetails.scale}}</span>
            <span>|</span>
            <span>所属片区:{{jobDetails.district}}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="jobDes">
      <div class="detTitle">
        <h3>
          <p></p>
          <span>职位信息</span>
        </h3>
        <!--v-html="formatTags(jobDetails.content)"-->
        <div class="detailContent" v-html="formatTags(jobDetails.content)"></div>
        <div class="companyDes clearfix">
          <h3>
            <p></p>
            <span>公司信息</span>
          </h3>
          <!--<div class="image">-->
            <!--<img src="" alt="">-->
          <!--</div>-->
          <div class="companyName">
            <p>{{jobDetails.orgName}}</p>
          </div>
        </div>
        <div class="companyDes clearfix">
          <h3>
            <p></p>
            <span>联系方式</span>
          </h3>
         <div class="phone">
           <span>{{jobDetails.contactor}}：</span>
           <span>{{jobDetails.phone}}</span>
         </div>
        </div>
        <div class="companyDes clearfix">
          <h3>
            <p></p>
            <span>公司地址</span>
          </h3>
          <div class="phone">
            <i class="iconfont icon-dituzhaofang"></i>
            <p>{{jobDetails.address}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="otherJob" v-if="getMore">
      <div class="title">
        <div class="desTitle">
          <h3>
            <p></p>
            <span>该公司其他职位</span>
          </h3>
        </div>
        <div class="jobContent clearfix" v-for="(item,index) in jobMore" v-if="index < 7 && item.id !=jobDetails.id" :key="index" @click="getJobDetail(item.id)">
          <h3>
            <p>{{item.title}}</p>
            <p>
              <span>{{item.salary}}</span>
              <span>{{item.yuan}}</span>
            </p>
          </h3>
          <h3>
            <p>学历：{{item.eduBackground}}</p>
            <p></p>
            <p>经验：{{item.experience}}</p>
            <p></p>
            <p>招聘人数：{{item.quantity}}人</p>
          </h3>
        </div>
      </div>
    </div>
    <div class="getMore">
      <span v-if="showMore" @click="toJobMore()">更多职位 ></span>
    </div>
  </el-main>
</template>

<script>
  import companyResApi from '@/api/companyRes/companyResApi'
  export default {
    data(){
      return{
        jobDetails:[],
        jobMore:[],
        showMore:true,
        id:'',
        getMore:false,
        orgId:'',
      }
    },
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
      },
    },
    mounted(){
      let vm = this;
      this.getDetail();
      // this.getMorejobs();
      // this.id= vm.$route.query.id;
    },
    methods:{
      formatTags(value){
        return (value||"").replace(/<(?!img).*?>/g, "");
      },
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
          limit:5,
        }).then(res=>{
          if (vm.$commonFun.isSucc(res.status)){
            vm.jobMore = res.data.rows;
            if (res.data.rows.length >1){
              vm.getMore = true;
            } else {
              vm.getMore = false;
            }
            if (res.data.total > 5){
              vm.showMore = true;
            } else{
              vm.showMore = false;
            }
            res.data.rows.forEach(list=>{
              switch (list.salary) {
                case "1":
                  list.salary = "3千";
                  list.yuan = "元以下/月";
                  break;
                case "2":
                  list.salary="3千-5千";
                  list.yuan = "元/月";
                  break;
                case "3":
                  list.salary="5千-1万";
                  list.yuan = "元/月";
                  break;
                case "4":
                  list.salary="1万-2万";
                  list.yuan = "元/月";
                  break;
                case "5":
                  list.salary="2万";
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
      toJobMore(){
        let vm = this;
        vm.$router.push({path:'/phoneCompanyRes/phoneOrgMore',query:{orgId:vm.jobDetails.orgId}});
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
  @import "jobDetail.less";
</style>
