<template>
  <el-main class="companyResWrap">
      <div class="banner">
        <img src="../../../static/images/bg_qyzy.png" alt="">
      </div>
      <div class="content">
        <div class="first">
        <div class="title">
          <h3>
            <i class="iconfont icon-hezi"></i>
            <span>企业产品</span>
            <span @click="toMore('product')">更多 >></span>
          </h3>
        </div>
        <phone-list :options="options"></phone-list>
      </div>
        <div class="first">
          <div class="title">
            <h3>
              <i class="iconfont icon-shichangdongtai"></i>
              <span>企业动态</span>
              <span  @click="toMore('resource')">更多 >></span>
            </h3>
          </div>
          <div v-for="(item,index) in companyDyList" :key="index" @click="DynamicDetails(item.id)" class="dynamicList">
            <h3 :title="item.title">
              <span class="dot"></span>
              <p>{{item.title}}</p>
            </h3>
          </div>
          <!--<phone-list :options="options2"></phone-list>-->
        </div>
        <div class="first">
          <div class="title">
            <h3>
              <i class="iconfont icon-yidongduanicon-"></i>
              <span>金融产品</span>
              <span  @click="toMore('financial')">更多 >></span>
            </h3>
          </div>
          <phone-list :options="options2"></phone-list>
        </div>
        <div class="first">
          <div class="title">
            <h3>
              <i class="iconfont icon-yewuyingyong"></i>
              <span>就业招工</span>
              <span></span>
            </h3>
          </div>
          <div class="jobList" v-for="(item,index) in jobList" :key="index" @click="jobDetais(item.id)">
            <div class="jobContent">
              <div class="one">
                <h3>
                  <p>{{item.title}}</p>
                  <span v-if="item.isRecommend ==='1'" class="recommend">推荐</span>
                  <span v-if="item.isUrgency === '1'" class="urgent">紧急</span>
                  <p v-if="item.salary === '1'">
                    <span>3千</span><span>元以下/月</span>
                  </p>
                  <p v-if="item.salary === '2'">
                    <span>3千-5千</span><span>元/月</span>
                  </p>
                  <p v-if="item.salary === '3'">
                    <span>5千-1万</span><span>元/月</span>
                  </p>
                  <p v-if="item.salary === '4'">
                    <span>1万-2万</span><span>元/月</span>
                  </p>
                  <p v-if="item.salary === '5'">
                    <span>2万</span><span>元以上/月</span>
                  </p>
                </h3>
                <p class="time">发布时间：{{item.publishTime | cutTime}}</p>
              </div>
              <div class="two clearfix">
                  <div class="image">
                    <img :src="$store.state.imgServer+item.logo" alt="">
                  </div>
                  <p>{{item.orgName}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="jobMore">
          <span  @click="toMore('job')">更多职位 ></span>
        </div>
        <div class="first">
          <div class="title">
            <h3>
              <i class="iconfont icon-fangzi"></i>
              <span>厂房租赁</span>
              <span></span>
            </h3>
          </div>
          <div class="factoryTab">
            <div v-for="(item,index) in tabList" :key="index" @click="getTab(item.id)"  class="tab">
              <p>
                <span :class="{active:isActive === index}" >{{item.name}}</span>
              </p>
            </div>
            <phone-list :options="options3" class="bg"></phone-list>
            <div class="jobMore">
              <span  @click="toMore('factory')">更多信息 ></span>
            </div>
          </div>
        </div>
      </div>
    <phoneFooter class="footer"></phoneFooter>
  </el-main>
</template>

<script>
  import phoneList from '@/components/phoneList/phoneList'
  import companyResApi from '@/api/companyRes/companyResApi'
  import phoneFooter from '@/components/phoneFooter/phoneFooter'
  export default {
    components:{
      phoneList,phoneFooter
    },
    data(){
      return{
        options:{
          dataList:[],
          propDatas:{
            title:'title',
            orgName:'orgName',
            isDemand:'isDemand',
          },
          rowClick:this.rowClick
        },
        options2:{
          dataList:[],
          propDatas:{
            title:'title',
            // orgName:'orgName',
            publishTime:'publishTime'
          },
          rowClick:this.resourceClick
        },
        options3:{
          dataList:[],
          propDatas:{
            title:'title',
            // orgName:'orgName',
            publishTime:'create_time'
          },
          rowClick:this.factoryClick
        },
        rentalType:1,
        companyDyList:[],
        jobList:{},
        isActive:0,
        tabList:[
          {id:'1',name:'招租'},
          {id:'2',name:'求租'},
          {id:'3',name:'售卖'},
        ],
      }
    },
    filters:{
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
    mounted(){
      let vm = this;
      vm.getProduct();
      vm.getCompanyDynamicList();
      vm.getFinacialServiceList();
      vm.getEmployeeList();
      vm.getFactoryRentList();
    },
    methods:{
      getProduct(){
        let vm = this;
        companyResApi.orgProductList({limit:5}).then(res=>{
          if (vm.$commonFun.isSucc(res.status)){
            vm.options.dataList = res.data.rows;
          }else{
            vm.$message({
              type:'error',
              message:'获取失败！'
            });
          }
        }).catch(error=>{
          console.log(error)
        })
      },
      getCompanyDynamicList(){
        let vm = this;
        companyResApi.orgTrendsList({limit:5}).then(res=>{
          if (vm.$commonFun.isSucc(res.status)){
            vm.companyDyList = res.data.rows;
            // console.log(res)
          }else{
            vm.$message({
              type:'error',
              message:'获取失败！'
            });
          }
        }).catch(error=>{
          console.log(error)
        })
      },
      DynamicDetails(val){
        let vm = this;
        vm.$router.push({path:'/phoneCompanyRes/phoneResourceDetail',query:{id:val}})
      },
      getFinacialServiceList(){
        let vm = this;
        companyResApi.financialProductsList({limit:5}).then(res=>{
          if (vm.$commonFun.isSucc(res.status)){
            vm.options2.dataList = res.data.rows;
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
      resourceClick(val){
        let vm = this;
        vm.$router.push({path:'/phoneCompanyRes/phoneFinancialDetail',query:{id:val}})
      },
      rowClick(val){
        let vm = this;
        vm.$router.push({path:'/phoneCompanyRes/phoneProductDetail',query:{id:val}})
      },
      getEmployeeList(){
        let vm = this;
        companyResApi.employmentServicesList({
          limit:6,
        }).then(res=>{
          if (vm.$commonFun.isSucc(res.status)){
            vm.jobList = res.data.rows;
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
      jobDetais(val){
        let vm = this;
        vm.$router.push({path:'/phoneCompanyRes/phoneJobDetail',query:{id:val}})
      },
      getFactoryRentList(){
        let vm = this;
        companyResApi.orgRentalList({
          limit:5,
          rentalType:vm.rentalType
        }).then(res=>{
          if (vm.$commonFun.isSucc(res.status)){
            vm.options3.dataList = res.data.rows
            // console.log(res)
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
      factoryClick(val){
        let vm = this;
        vm.$router.push({path:'/phoneCompanyRes/phoneFactoryDetail',query:{id:val}})
      },
      getTab(val){
        let vm = this;
        switch (val) {
          case '1':
            vm.rentalType = 1;
            vm.isActive = 0;
            vm.getFactoryRentList();
            break;
          case '2':
            vm.rentalType = 2;
            vm.isActive = 1;
            vm.getFactoryRentList();
            break;
          case '3':
            vm.rentalType = 3;
            vm.isActive = 2;
            vm.getFactoryRentList();
            break;
        }
      },
      toMore(val){
        let vm = this;
        switch (val) {
          case 'product':
            vm.$router.push({path:'/phoneCompanyRes/phoneProductMore'});
            break;
          case 'resource':
            vm.$router.push({path:'/phoneCompanyRes/phoneCompamyDymore'});
            break;
          case 'financial':
            vm.$router.push({path:'/phoneCompanyRes/phoneFinancialMore'});
            break;
          case 'job':
            vm.$router.push({path:'/phoneCompanyRes/phoneJobMore'});
            break;
          case 'factory':
            vm.$router.push({path:'/phoneCompanyRes/phoneFactoryMore'});
            break;
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "phoneCompanyRes.less";
</style>
