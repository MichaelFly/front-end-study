<template>
  <el-main class="phoneIndexWrap">
    <div class="banner">
      <img :src="bannerImg" alt="">
    </div>
    <div class="statistics">
      <div class="item" v-for="(item,index) in statistics" :key="index">
        <h3>{{item.value | getNum}}<span>{{item.value | getLabel}}</span></h3>
        <p>{{item.title | formatTitle}}</p>
      </div>
    </div>
    <div class="blueTitle">
      <h3 class="">园区动态</h3>
      <h4>Park news</h4>
    </div>
    <div class="parkTrends">
      <div class="item clearfix"
           v-if="index<5"
           v-for="(item,index) in parkTrendsList"
           @click="parknewsDetail(item.id)">
        <div class="img">
          <img width="100%" height="100%" :src="$store.state.imgServer+item.imgUrl" alt="">
        </div>
        <div class="content">
          <h3>{{item.title}}</h3>
          <div class="itemFoot clearfix">
            <span class="phoneNewsType" :class="`type${item.newsType}`">{{item.newsType | newsTypeFormatter}}</span>
            <span class="time">{{item.publishTime | getYearmonth}}</span>
          </div>
        </div>
      </div>
      <div class="more clearfix">
        <span @click="moreParknews">更多动态 ></span>
      </div>
    </div>
    <div class="parkInfo">
      <div class="whiteTitle">
        <h3 class="">郫都智慧科技园</h3>
        <h4>Smart science and technology park of Pidu</h4>
      </div>
      <div class="contentWrap">
        <p>{{parkInfo}}</p>
        <div class="btnWrap">
          <span class="blueBtn" @click="toKnowPark('park')">了解园区</span>
          <span class="greenBtn" @click="toKnowPark('setting')">机构设置</span>
        </div>
      </div>
    </div>
    <div class="blueTitle">
      <h3 class="">入驻流程及政策</h3>
      <h4>Process of entering and handling affairs</h4>
    </div>
    <div class="joinContent clearfix">
      <div class="item" v-for="(item,index) in joinPolicyList" @click="affairServicesDetail(item[3])">
        <div class="img">
          <img :src="$store.state.imgServer+item[0]">
          <!--<img :src="$store.state.imgServer+item[1]" v-else>-->
          <!--<i class="iconfont" :class="joinPolicyIcons[index]"></i>-->
        </div>
        <h3>{{item[2]}}</h3>
        <!--<div class="detailContent">{{item.content | filterTags}}</div>-->
      </div>
    </div>
    <div class="parkMap">
      <div class="blueTitle">
        <h3>园区地图</h3>
        <h4>Map of park</h4>
      </div>
      <div class="mapContent">
        <div class="item">
          <h3>
            <span>
              <i class="iconfont icon-gongsituandui"></i>
            </span>
            3D园区地图
          </h3>
          <p>
            覆盖10.26平方公里的工业新城，对南片区、北片区、
            小微企业创新园及新经济产业园4大区域，进行3D立
            体化展示，形成园区企业分布导览，并将企业关键特
            征信息关联呈现。
          </p>
          <div class="btnWrap">
            <a target="_blank" :href="`${$store.state.uploadServer}/district/map-3DSouth`">查看地图</a>
          </div>
        </div>
        <div class="item">
          <h3>
            <span>
              <i class="iconfont icon-ditu-qi"></i>
            </span>
            电子信息功能区地图
          </h3>
          <p>
            对标先进产业园区，打造电子信息产业重要增长极，
            通过知名企业、高等院校及科研机构，助力新产业、
            新业态、新模式的孵化落地，展现产业发展优质生态
            及集群发展态势。
          </p>
          <div class="btnWrap">
            <a target="_blank" :href="`${$store.state.uploadServer}/district/map-industry`">查看地图</a>
          </div>
        </div>
        <div class="item">
          <h3>
            <span>
              <i class="iconfont icon-yuanqumianji"></i>
            </span>
            招商地图
          </h3>
          <p>
            围绕集成电路、新型显示、信息安全、大数据及
            人工智能五大门类，聚合产业资源，优化产业结
            构，从国际、国内锁定重点优质企业区域分布，
            对细分领域提供“点对点”招商信息。
          </p>
          <div class="btnWrap">
            <a target="_blank" :href="`${$store.state.uploadServer}/district/map-investment`">查看地图</a>
          </div>
        </div>
      </div>
    </div>
    <div class="parkCompany">
      <div class="blueTitle">
        <h3>园区企业</h3>
        <h4>The cooperative enterprises in the park</h4>
      </div>
      <div class="parkCompanyList clearfix">
        <div class="item clearfix" v-for="(item,index) in companyLogoList" @click="companyDetail(item.id)">
          <div class="logoImg">
            <img :src="$store.state.imgServer+item.logo" alt="">
          </div>
          <div class="title">
            {{item.name}}
          </div>
        </div>
      </div>
      <div class="more">
        <span @click="goMoreCompany">更多企业</span>
      </div>
    </div>
    <phoneFooter></phoneFooter>
  </el-main>
</template>
<script>
  import index from '@/api/index/index'
  import companyList from '@/api/companyList/companyList'
  import phoneFooter from '../../components/phoneFooter/phoneFooter'

  export default {
    name: 'phoneIndex',
    components: {
      phoneFooter
    },
    data() {
      return {
        bannerImg:'static/images/indexPhoneBanner.png',
        statistics: [],
        parkTrendsList:[],
        parkInfo:'郫都区智慧科技园规划总面积14.1平方公里，包括A区（工业港北片区和小微园区，规划建设面积8.29平方公里）、B区（工业港南片区，规划建设面积2.91平方公里）和C区（新经济产业园，规划建设面积2.9平方公里），已建成10.26平方公里工业新城。园区先后荣获“四川省‘51025’培育工程500亿园区”“四川省特色高新技术产业化基地”“四川省知识产权示范园区”“四川省最具投资价值产业园区”等殊荣。已建成入驻纳税主体企业1075家，其中生产性企业838家。园区以电子信息为主导产业，主要发展集成电路、新型显示、智能终端、网络通信和新经济（基于新一代信息技术）五大领域。计划到2022年，园区总产值突破1600亿元，其中电子信息全产业链总产值达500亿元，工业增加值年均增速8.5%以上。 ',
        joinPolicyList:[],
        joinPolicyIcons:['icon-huanbaoxinxi','icon-renzhenghuizhang','icon-qiyebangonglou','icon-gongju-fill','icon-icon-test'],
        companyLogoList:[],
        show:-1,
      }
    },
    mounted() {
      let vm = this;
      if (!vm.isMobile()) {
        vm.$router.push({path: "/index"});
      }
      vm.getBannerDataList();
      vm.getParkTrendsList();
      vm.getAffairServicesList();
      vm.getCompanyList();
    },
    methods: {
      isMobile() {
        let userAgentInfo = navigator.userAgent;
        let mobileAgents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
        let mobile_flag = false;
        //根据userAgent判断是否是手机
        for (let v = 0; v < mobileAgents.length; v++) {
          if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
            mobile_flag = true;
            break;
          }
        }
        let screen_width = window.screen.width;
        let screen_height = window.screen.height;
        //根据屏幕分辨率判断是否是手机
        if (screen_width < 500 && screen_height < 800) {
          mobile_flag = true;
        }
        return mobile_flag;
      },
      getBannerDataList() {
        let vm = this;
        index.bannerDataList().then(res => {
          if (vm.$commonFun.isSucc(res.status)) {
            let fourDatas = [];
            for (let i = 0; i < res.data.length; i++) {
              if (i < 4) {
                fourDatas.push(res.data[i]);
              }
            }
            vm.statistics = fourDatas;
          } else {
            vm.$message({
              type: 'error',
              message: '错误！'
            });
          }
        }).catch(err => {
          console.log(err);
        })
      },
      getParkTrendsList(){
        let vm = this;
        index.parkTrendsList({
          limit:5
        }).then(res=>{
          if (vm.$commonFun.isSucc(res.status)) {
            vm.parkTrendsList = res.data.rows;
          }else{
            vm.$message({
              type: 'error',
              message: '错误！'
            });
          }
        }).catch(err=>{
          console.log(err);
        })
      },
      parknewsDetail(val){
        let vm = this;
        vm.$router.push({path: "/phoneIndex/indexDynamic/phoneIndexDetail",query: {id: val}})
      },
      moreParknews(){
        let vm = this;
        vm.$router.push({path: "/phoneIndex/indexDynamic"})
      },
      toKnowPark(val){
        let vm = this;
        vm.$router.push({path:'/phoneIndex/phoneKnowpark',query:{tabType:val}});
      },
      getAffairServicesList(){
        let vm = this;
        index.affairServicesList().then(res=>{
          if (vm.$commonFun.isSucc(res.status)) {
            // vm.joinPolicyList = res.data.rows;
            res.data.rows.forEach(list=>{
              var imgUrl = JSON.parse(list.imgUrl);
              vm.imgUrl = Object.values(imgUrl);
              vm.imgUrl.push(list.title);
              vm.imgUrl.push(list.id);
              vm.joinPolicyList.push(vm.imgUrl)
            })
          }else{
            vm.$message({
              type: 'error',
              message: '错误！'
            });
          }
        }).catch(err=>{
          console.log(err);
        })
      },
      affairServicesDetail(val){
        let vm = this;
        vm.$router.push({path: "/phoneIndex/phoneAffairDetails",query: {id: val}})
      },
      getCompanyList(){
        let vm = this;
        companyList.companyList({
          limit:5
        }).then(res=>{
          if (vm.$commonFun.isSucc(res.status)) {
            vm.companyLogoList = res.data.rows;
          }else{
            vm.$message({
              type: 'error',
              message: '错误！'
            });
          }
        }).catch(err=>{
          console.log(err);
        })
      },
      goMoreCompany(){
        let vm = this;
        vm.$router.push({path:"/phoneIndex/indexCompany"});
      },
      companyDetail(val){
        let vm = this;
        vm.$router.push({path: "/phoneIndex/indexCompanyDetail",query: {id: val}})
      },
    },
    filters: {
      getNum(value) {
        if (!value) return '';
        return value.replace(/[^0-9]/ig, "");
      },
      getLabel(value) {
        if (!value) return '';
        return value.replace(/[0-9]/ig, "");
      },
      newsTypeFormatter(value) {
        if (!value) return ''
        if (value === '1') {
          return '通知'
        } else if (value === '2') {
          return '热点'
        } else {
          return '喜讯'
        }
      },
      getDay: function (value) {
        if (!value) return ''
        value = value.toString();
        let str = value.split(" ");
        return str[0].split("-")[2]
      },
      getYearmonth: function (value) {
        if (!value) return '';
        value = value.toString();
        let str = value.split(" ");
        return str[0]
      },
      filterTags(value) {
        value = value.replace(/(\n)/g, "");
        value = value.replace(/(\t)/g, "");
        value = value.replace(/(\r)/g, "");
        value = value.replace(/<\/?[^>]*>/g, "");
        value = value.replace(/&nbsp;/ig, '');
        return value;
      },
      formatTitle(value) {
        if (!value) return ''
        if (value === 'orgNum') {
          return '园区企业'
        } else if (value === 'entNum') {
          return '规上企业'
        } else if (value === 'coverIndustry') {
          return '覆盖行业'
        } else if (value === 'floorArea') {
          return '占地面积'
        } else {
          return ''
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "phoneIndex";
</style>

