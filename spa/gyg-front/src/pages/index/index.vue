<template>
  <el-main class="indexWrap">
    <div class="banner indexBanner">
      <el-carousel trigger="click" height="690px" arrow="always">
        <el-carousel-item v-for="(item,index) in bannerList" :key="index">
          <img width="100%" height="100%" :src="item.imgUrl" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="secondContent">
      <div class="statistics">

        <div class="item" v-for="(item,index) in statistics">
          <div class="icon"><i class="iconfont" :class="statisticsIcons[index].icon" :style="{color:statisticsIcons[index].color}"></i></div>
          <div class="content">
            <div>
              <h3>{{item.value | getNum}}<span>{{item.value | getLabel}}</span></h3>
              <p>{{item.title | formatTitle}}</p>
            </div>
           <div></div>
          </div>
        </div>
      </div>
      <div class="blueTitle">
        <h3>园区动态</h3>
        <h4>Park news</h4>
      </div>
      <div class="content">
        <div class="leftBanner">
          <el-carousel ref="parkTrends" trigger="click" height="420px" indicator-position="none" :autoplay="parkTrendsAutoplay" @change="parkTrendsChange">
            <el-carousel-item v-if="index<5" v-for="(item,index) in parkTrendsList" :key="index">
              <div class="newsItem" @click="parknewsDetail(item.id)">
                <img :src="$store.state.imgServer+item.imgUrl" alt="">
                <div>
                  <p class="pageNum"><i>{{index+1}}</i> / 5</p>
                  <p class="title">{{item.title}}</p>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="rightList">
          <div class="item clearfix"
               :class="index===activeIndex?'active':''"
               v-if="index<5"
               v-for="(item,index) in parkTrendsList"
               @mouseover="changeParkTrends(index)"
               @click="parknewsDetail(item.id)">
            <div class="time">
              <p>{{item.publishTime | getDay}}</p>
              <p>{{item.publishTime | getYearmonth}}</p>
            </div>
            <div class="detail">
              <h3>
                <i v-if="item.isTop" class="istop">[ 置顶 ]</i>
                <span class="titleContent">{{item.title}}</span>
                <span class="newsType" :class="`type${item.newsType}`">{{item.newsType | newsTypeFormatter}}</span></h3>
              <p>{{item.content | filterTags |filterSpace}}</p>
            </div>
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
        <h4>Smart science and technology park of Pidu </h4>
      </div>
      <div class="contentWrap">
        <div class="contLeft">
          <p>{{parkInfo}}</p>
          <div class="btnWrap" @click="toKnowPark('park')">
            <span>了解园区</span>
            <!--<span @click="showDirectorMail"><i class="iconfont icon-lianxirenxinxi"></i>主任邮箱</span>-->
          </div>
          <div class="btnWrapSecond" @click="toKnowPark('setting')">
            <span>机构设置</span>
            <!--<span @click="showDirectorMail"><i class="iconfont icon-lianxirenxinxi"></i>主任邮箱</span>-->
          </div>
        </div>
        <div class="contRight">
          <img src="./../../../static/images/bg_05.jpg" alt="">
        </div>
      </div>
    </div>
    <!--<div class="joinWrap">-->
      <!--<div class="blueTitle">-->
        <!--<h3 class="">入驻及办事流程</h3>-->
        <!--<h4>Process of entering and handling affairs</h4>-->
      <!--</div>-->
      <!--<div class="joinContent">-->
        <!--<div class="item" v-for="(item,index) in joinPolicyList" @click="affairServicesDetail(item.id)">-->
          <!--<div class="img">-->
            <!--<i class="iconfont" :class="joinPolicyIcons[index]"></i>-->
          <!--</div>-->
          <!--<h3>{{item.title}}</h3>-->
          <!--&lt;!&ndash;<div class="detailContent">{{item.content | filterTags}}</div>&ndash;&gt;-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
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
    <div class="joinWrap clearfix">
      <div class="blueTitle">
        <h3 class="">入驻及办事流程</h3>
        <h4>Process of entering and handling affairs</h4>
      </div>
      <div class="joinOuter">
        <div class="arrow-left" @click="slideChange()"><i class="iconfont icon-jiantou-copy" :class="{active:showSlide}"></i></div>
        <div class="joinSlide">
          <el-carousel :interval="0" arrow="never" class="slide-detail" ref="carousel">
            <el-carousel-item v-for="(item,index) in getLength" :key="index">
              <!--<angle-slide :options="options"></angle-slide>-->
              <div v-if="item === 1">
                <angle-slide :options="options"></angle-slide>
              </div>
              <div v-if="item === 2">
                <angle-slide :options="options2"></angle-slide>
              </div>
              <div v-if="item === 3">
                <angle-slide :options="options3"></angle-slide>
              </div>
              <div v-if="item === 4">
                <angle-slide :options="options4"></angle-slide>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="arrow-right" @click="slideChange()"><i class="iconfont icon-jiantou" :class="{active:!showSlide}"></i></div>
      </div>
      <!--<div class="joinContent">-->
      <!--<div class="item" v-for="(item,index) in joinPolicyList" @click="affairServicesDetail(item.id)">-->
      <!--<div class="img">-->
      <!--<i class="iconfont" :class="joinPolicyIcons[index]"></i>-->
      <!--</div>-->
      <!--<h3>{{item.title}}</h3>-->
      <!--&lt;!&ndash;<div class="detailContent">{{item.content | filterTags}}</div>&ndash;&gt;-->
      <!--</div>-->
      <!--</div>-->
    </div>
    <div class="parkCompany">
      <div class="whiteTitle">
        <h3>园区企业</h3>
        <h4>The cooperative enterprises in the park</h4>
      </div>
      <div class="parkCompanyList clearfix">
        <div class="parkList" v-for="(item,index) in companyLogoList" @click="companyDetail(item.id)" :title="item.name">
          <div class="parkContent">
            <div class="images">
              <img :src="$store.state.imgServer+item.logo" alt="">
            </div>
            <div class="parkName"><p>{{item.name}}</p></div>
          </div>
        </div>
        <!--<div class="item" v-for="(item,index) in companyLogoList" @click="companyDetail(item.id)">-->
          <!--<img :src="$store.state.imgServer+item.logo" alt="">-->
          <!--<p>{{item.name}}</p>-->
        <!--</div>-->
      </div>
      <div class="more">
        <span @click="goMoreCompany">更多企业</span>
      </div>
    </div>
    <div class="floatJoinPolicy">
      <!--<h3>-->
        <!--&lt;!&ndash;<span>办事流程</span>&ndash;&gt;-->
        <!--<img src="static/images/indexBanshi.png" alt="">-->
      <!--</h3>-->
      <p class="item clearfix" v-for="(item,index) in joinPolicyList" @click="affairServicesDetail(item[3])" @mouseenter="getOver(index)" @mouseleave="getOver(!index)">
        <span class="titleName">{{item[2]}}</span>
        <span class="titleImg">
          <img :src="$store.state.imgServer+item[0]" alt="" v-if="show === index">
          <img :src="$store.state.imgServer+item[1]" v-else>
        </span>
      </p>
    </div>
  </el-main>
</template>
<script>
  import index from '@/api/index/index'
  import companyList from '@/api/companyList/companyList'
  import angleSlide from '@/components/angleSlide/angleSlide'
  export default {
    name: 'index',
    components: {
      angleSlide
    },
    data() {
      return {
        parkTrendsAutoplay:false,
        activeIndex: 0,
        showSlide:true,
        options:{
          joinPolicyList:[],
          itemClick:this.affairServicesDetail,
          getOver:this.firstOver,
          show:-1,
        },
        options2:{
          joinPolicyList:[],
          itemClick:this.affairServicesDetail,
          getOver:this.secondOver,
          show:-1,
        },
        options3:{
          joinPolicyList:[],
          itemClick:this.affairServicesDetail,
          getOver:this.thirdOver,
          show:-1,
        },
        options4:{
          joinPolicyList:[],
          itemClick:this.affairServicesDetail,
          getOver:this.forthOver,
          show:-1,
        },
        bannerList:[
          {
            imgUrl:'static/images/index1.png'
          },
          {
            imgUrl:'static/images/index2.png'
          },
          {
            imgUrl:'static/images/index3.png'
          },
        ],
        statisticsIcons:[
          {
            icon:'icon-shuju2',
            color:'#ff55aa'
          },
          {
            icon:'icon-qiyexinxi',
            color:'#029602'
          },
          {
            icon:'icon-shuju8',
            color:'#ff7807'
          },
          {
            icon:'icon-pieChart',
            color:'#5280ec'
          }

        ],
        statistics:[],
        parkTrendsList:[],
        parkInfo:'郫都区智慧科技园规划总面积14.1平方公里，包括A区（工业港北片区和小微园区，规划建设面积8.29平方公里）、B区（工业港南片区，规划建设面积2.91平方公里）和C区（新经济产业园，规划建设面积2.9平方公里），已建成10.26平方公里工业新城。园区先后荣获“四川省‘51025’培育工程500亿园区”“四川省特色高新技术产业化基地”“四川省知识产权示范园区”“四川省最具投资价值产业园区”等殊荣。已建成入驻纳税主体企业1075家，其中生产性企业838家。园区以电子信息为主导产业，主要发展集成电路、新型显示、智能终端、网络通信和新经济（基于新一代信息技术）五大领域。计划到2022年，园区总产值突破1600亿元，其中电子信息全产业链总产值达500亿元，工业增加值年均增速8.5%以上。',
        joinPolicyList:[],
        joinPolicyIcons:['icon-renzhenghuizhang','icon-icon-test','icon-dalou1','icon-boshimao','icon-gongju-fill','icon-zhengjian','icon-zhengjian2'],
        companyLogoList:[],
        getLength:"",
        show:-1,
        img:[],
        processData:[],
      }
    },
    mounted() {
      let vm = this;
      if(vm.isMobile()){
        vm.$router.push({path: "/phoneIndex"});
      }
      // vm.getBannerList();
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
      getCompanyList(){
        let vm = this;
        companyList.companyList({
          limit:9
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
      getBannerList(){
        let vm = this;
        index.bannerList().then(res=>{
          if (vm.$commonFun.isSucc(res.status)) {
            vm.bannerList = res.data;
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
      getBannerDataList(){
        let vm = this;
        index.bannerDataList().then(res=>{
          if (vm.$commonFun.isSucc(res.status)) {
            let fourDatas = [];
            for(let i = 0;i<res.data.length;i++){
              if(i<4){
                fourDatas.push(res.data[i]);
              }
            }
            vm.statistics = fourDatas;
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
      getAffairServicesList(){
        let vm = this;
        index.affairServicesList().then(res=>{
          if (vm.$commonFun.isSucc(res.status)) {
            // vm.options.joinPolicyList = res.data.rows;
            if (res.data.rows.length %5 !=0){
              vm.getLength = parseInt(res.data.rows.length/5) +1;
            }else{
              vm.getLength = parseInt(res.data.row.length/5)
            }
            res.data.rows.forEach(list=>{
              var imgUrl = JSON.parse(list.imgUrl)
              vm.imgUrl = Object.values(imgUrl)
              vm.imgUrl.push(list.title)
              vm.imgUrl.push(list.id)
              vm.joinPolicyList.push(vm.imgUrl)
              vm.processData.push(vm.imgUrl)
            })
            vm.options.joinPolicyList = vm.processData.slice(0,5);
            vm.options2.joinPolicyList = vm.processData.slice(5,10);
            vm.options3.joinPolicyList = vm.processData.slice(10,15);
            vm.options4.joinPolicyList = vm.processData.slice(15,20);
            // vm.joinPolicyList = res.data.rows;
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
      parkTrendsChange(val){
        let vm = this;
        vm.activeIndex = val
      },
      changeParkTrends(index){
        let vm = this;
        vm.$refs.parkTrends.setActiveItem(index);
        vm.parkTrendsAutoplay = false;
      },
      autoPlayParkTrend(){
        let vm = this;
        vm.parkTrendsAutoplay = true;
      },
      moreParknews(){
        let vm = this;
        // vm.$router.push({path: "/index/moreParknews"})
        window.open(this.$router.resolve({path: "/index/moreParknews"}).href, '_blank');
      },
      parknewsDetail(val){
        let vm = this;
        window.open(this.$router.resolve({path: "/index/moreParknews/detail",query: {id: val}}).href, '_blank');
        // vm.$router.push({path: "/index/moreParknews/detail",query: {id: val}})
      },
      showDirectorMail(){
        let vm = this;
        // vm.$router.push({path: "/index/directorMail"})
        window.open(this.$router.resolve({path: "/index/directorMail"}).href, '_blank');
      },
      affairServicesDetail(val){
        let vm = this;
        window.open(this.$router.resolve({path: "/index/affairServiceDetail",query: {id: val}}).href, '_blank');
        // vm.$router.push({path: "/index/affairServiceDetail",query: {id: val}})
      },
      goMoreCompany(){
        let vm = this;
        window.open(this.$router.resolve({path: "/index/moreCompany"}).href, '_blank');
        // vm.$router.push({path: "/index/moreCompany"})
      },
      companyDetail(val){
        let vm = this;
        window.open(this.$router.resolve({path: "/index/moreCompany/detail",query: {id: val}}).href, '_blank');
        // vm.$router.push({path: "/index/moreCompany/detail",query: {id: val}})
      },
      toKnowPark(val){
        let vm = this;
        window.open(this.$router.resolve({path:'/index/knowPark',query:{id:val}}).href, '_blank');
        // vm.$router.push({path:'/index/knowPark'});
      },
      slideChange(val){
        let vm = this;
        vm.show = !vm.show;
        vm.show?vm.$refs.carousel.prev():vm.$refs.carousel.next();
      },
      getOver(val){
        // alert(val)
        this.show = val
      },
      firstOver(val){
        let vm = this;
        vm.options.show = val;
      },
      secondOver(val){
        let vm = this;
        vm.options2.show = val;
      },
      thirdOver(val){
        let vm = this;
        vm.options3.show = val;
      },
      forthOver(val){
        let vm = this;
        vm.options4.show = val;
      },

    },
    filters: {
      getNum(value){
        if (!value) return '';
        return value.replace(/[^0-9]/ig,"");
      },
      getLabel(value){
        if (!value) return '';
        return value.replace(/[0-9]/ig,"");
      },
      newsTypeFormatter(value){
        if (!value) return ''
        if(value==='1'){
          return '通知'
        }else if(value==='2'){
          return '热点'
        }else {
          return '喜讯'
        }
      },
      getDay: function (value) {
        if (!value) return ''
        value = value.toString();
        let str = value.split(" ");
        return str[0].split("-")[2]
      },
      getYearmonth:function (value) {
        if (!value) return ''
        value = value.toString();
        let str = value.split(" ");
        return str[0].split("-")[0]+'-'+str[0].split("-")[1]
      },
      filterTags(value){
        value = value.replace(/(\n)/g, "");
        value = value.replace(/(\t)/g, "");
        value = value.replace(/(\r)/g, "");
        value = value.replace(/<\/?[^>]*>/g, "");
        value = value.replace(/&nbsp;/ig,'');
        return value;
      },
      filterSpace(value){
        return value.replace(/\s/ig,'');
      },
      formatTitle(value){
        if (!value) return ''
        if(value==='orgNum'){
          return '园区企业'
        }else if(value==='entNum'){
          return '规上企业'
        }else if(value==='coverIndustry'){
          return '覆盖行业'
        }else if(value==='floorArea'){
          return '占地面积'
        }else {
          return ''
        }
      },
      splitNumber:function(value){
        if (!value) return '';
        let str = value.split(",");
        return str[0]
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "index";
</style>
