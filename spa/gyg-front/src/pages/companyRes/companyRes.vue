<template>
  <el-main class="banner-wrap">
    <!-- banner -->
    <div class="banner">

    </div>
    <!-- content -->
    <div class="content">
      <!-- 企业动态-->
      <div class="company-wrap clearfix">
        <div class="company">
          <div class="title">
            <h3>
              <i class="iconfont icon-shichangdongtai"></i>
              <span>企业动态</span>
              <span @click="getCompanyMore">更多 >></span>
            </h3>
          </div>
          <div class="com-list">
            <div v-for="(item,index) in companyList" :key="index" @click="companyDetail(item.id)">
              <div :title="item.title" class="com-content clearfix" v-if="index === 0">
                <div class="img">
                  <img :src="$store.state.imgServer+item.imgUrl" width="100%" height="100%" alt="">
                </div>
                <div class="des">
                  <h3>
                    <p :title="item.title">{{item.title}}</p>
                    <p :title="item.title">{{item.content | filterTags}}</p>
                  </h3>
                </div>
              </div>
              <div v-else class="content-list">
                <div>
                  <i class="item"></i>
                  <span v-if="item.isTop === 1">[置顶]</span>
                  <p :title="item.title">{{item.title}}</p>
                  <!--<p>{{item.orgName}}</p>-->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="com-product">
          <div class="title">
            <h3>
              <i class="iconfont icon-hezi"></i>
              <span>企业产品</span>
              <span @click="getProductMore">更多 >></span>
            </h3>
          </div>
          <div class="com-list">
            <div v-for="(product,index) in companyProduct" :key="index" @click="productDetail(product.id)">
              <div class="com-content clearfix" v-if="index === 0">
                <div class="img">
                  <img :src="$store.state.imgServer+product.img_url" alt="">
                </div>
                <div class="des">
                  <h3>
                    <p :title="product.title">{{product.title}}</p>
                    <p :title="product.title">{{product.content | filterTags}}</p>
                    <!--<p v-html="product.content" style="font-size: 14px;color: #999999;">{{product.content}}</p>-->
                  </h3>
                </div>
              </div>
              <div v-else class="content-list clearfix">
               <div>
                 <i class="item"></i>
                 <span class="isTop" v-if="product.isTop === 1">[置顶]</span>
                 <p :title="product.title">{{product.title}}</p>
                 <span class="isDeamnd" v-if="product.isDemand === '1'">需求</span>
               </div>
                <div :title="product.title">{{product.orgName}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 金融产品 -->
      <div class="financial clearfix">
        <div class="fin-content">
          <div class="fin-left">
            <h3>
              <i class="iconfont icon-yidongduanicon-"></i>
              <span>金融产品</span>
              <span @click="moreFinacial">更多 >></span>
            </h3>
            <div class="left-content clearfix">
              <div class="left-iamges">
                <div class="images">
                  <div class="img">
                    <img src="../../../static/images/ima_06.png">
                    <img src="../../../static/images/ima_07.png">
                    <!--<p>金融产品一</p>-->
                  </div>
                  <!--<div class="images" style="margin-left: 0;">-->
                    <!--<div class="img">-->
                      <!--&lt;!&ndash;<img src="../../../static/images/ima_07.png" width="100%"  height="100%">&ndash;&gt;-->
                      <!--&lt;!&ndash;<p>金融产品二</p>&ndash;&gt;-->
                    <!--</div>-->
                  <!--</div>-->
                </div>
              </div>
              <div class="left-list"  v-for="(item,index) in financialList" :key="index" @click="finacialDetail(item.id)">
                <h3>
                  <i class="item"></i>
                  <span v-if="item.isTop === 1" class="isTop">[置顶]</span>
                  <p :title="item.title">{{item.title}}</p>
                  <p>{{item.publishTime|cutTime}}</p>
                  <!--<p>{{item.publishTime.split(" ")[0]}}</p>-->
                </h3>
              </div>
            </div>
          </div>
          <!--<div class="fin-right">-->
            <!--<h3>-->
              <!--<i class="iconfont icon-dingdanguanli"></i>-->
              <!--<span>金融需求</span>-->
              <!--<span @click="moreFinacial">更多 >></span>-->
            <!--</h3>-->
            <!--<div class="left-content clearfix">-->
              <!--<div class="left-list ">-->
                <!--<h3 v-for="(item,index) in financialProduct" :key="index" @click="getFinanDetail(item.id)">-->
                  <!--<i class="item"></i>-->
                  <!--<span  class="isTop" v-if="item.isTop === 1">[置顶]</span>-->
                  <!--<p :title="item.title">{{item.title}}</p>-->
                  <!--<p>{{item.publishTime | cutTime}}</p>-->
                <!--</h3>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
        </div>
      </div>
      <!--就业招工-->
      <div class="employee clearfix">
        <div class="emp-content">
          <div class="title">
            <h3>
              <i class="iconfont icon-yewuyingyong"></i>
              <span>就业招工</span>
              <span @click="empMore"> 更多 >> </span>
            </h3>
          </div>
          <div class="emp-content clearfix" >
            <div class="emp-left " v-for="(item,index) in employeeList" :key="index" @click="getEmployeeDetail(item.id)">
              <div class="job-detail">
                <p class="clearfix">
                  <!--<span class="job-title clearfix">-->
                    <span v-if="item.isTop ===1" class="isTop">[置顶]</span>
                    <span class="title">{{item.title}}</span>
                    <span class="urgent" v-if="item.isUrgency === '1'">紧急</span>
                    <span class="recommend" v-if="item.isRecommend === '1'">推荐</span>
                  <!--</span>-->

                </p>
                <p class="clearfix">
                  <span  class="time">{{item.publishTime | cutTime}}</span>
                  <span class="salary" v-if="item.salary === '1'">3000<span > 元以下 / 月</span></span>
                  <span class="salary" v-if="item.salary === '2'">3000-5000<span> 元 / 月</span></span>
                  <span class="salary" v-if="item.salary === '3'">5000-10000<span> 元 / 月</span></span>
                  <span class="salary" v-if="item.salary === '4'">10000-20000<span> 元 / 月</span></span>
                  <span  class="salary" v-if="item.salary === '5'">20000<span> 元以上 / 月</span></span>
                </p>
              </div>
              <div class="com-name">
                <div class="image">
                  <img :src="$store.state.imgServer+item.logo" alt="">
                </div>
                <p>{{item.orgName}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 厂房等信息 -->
      <div class="factory clearfix">
        <div class="fac-left">
          <div class="fac-title">
            <h3>
              <i class="iconfont icon-fangzi"></i>
              <span>厂房租售</span>
              <span @click="plantMore">更多 >></span>
            </h3>
          </div>
          <div class="fac-content clearfix">
            <div class="fac-iamges">
              <div :class="{active:isActive === 1}" @click="facClick(1)">
                <p><i class="iconfont icon-hetongyushouquan"></i></p>
                <p>招租 For lease</p>
              </div>
              <div :class="{active:isActive === 2}" @click="facClick(2)">
                <p><i class="iconfont icon-hetongbeian"></i></p>
                <p>求租 Rent house</p>
              </div>
              <div :class="{active:isActive === 3}" @click="facClick(3)">
                <p><i class="iconfont icon-xiaoshou2"></i></p>
                <p>售卖 Sale of plant</p>
              </div>
              <!--<div><i class="iconfont icon-hetongyushouquan"></i><p>招租 For lease</p></div>-->
              <!--<div><i class="iconfont icon-hetongbeian"></i><p>求租 Rent house</p></div>-->
              <!--<div><i class="iconfont icon-xiaoshou2"></i><p>售卖 Sale of plant</p></div>-->
              <!--<div :class="{active:isActive === 1}" @click="facClick(1)"><i class="iconfont icon-hetongyushouquan"></i><p>招租 For lease</p></div>-->
              <!--<div :class="{active:isActive === 2}" @click="facClick(2)"><i class="iconfont icon-hetongbeian"></i><p>求租 Rent house</p></div>-->
              <!--<div :class="{active:isActive === 3}" @click="facClick(3)"><i class="iconfont icon-xiaoshou2"></i><p>售卖 Sale of plant</p></div>-->
            <!--</div>-->
            </div>
            <div class="fac-list clearfix">
              <h3 v-for="(item,index) in plantList" :key="index" @click="factoryDetail(item.id)">
                <i class="item"></i>
                <span v-if="item.isTop">[置顶]</span>
                <p :title="item.title">{{item.title}}</p>
                <p>{{item.publishTime | cutTime}}</p>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </el-main>
</template>

<script>
  import companyResApi from '@/api/companyRes/companyResApi'
  export default {
    data (){
      return {
        companyList:[],
        companyProduct:[],
        financialList:[],
        financialProduct:[],
        plantList:[],
        productList:[],
        employeeList:{
          money:''
        },
        rentalType:'',
        isActive:1,
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
        value = value.replace(/&nbsp;/ig,'');
        return value;
      }
    },
    mounted(){
      let vm = this;
      vm.getCompanyDynamicList();
      vm.getFinacialServiceList();
      vm.getCompanyProductList();
      vm.getFactoryRentList();
      vm.getFinacialProductList();
      vm.getEmployeeList();
    },
    methods: {
      //产品动态
      getCompanyDynamicList(){
        let vm = this;
        companyResApi.orgTrendsList({limit:10}).then(res=>{
          if (vm.$commonFun.isSucc(res.status)){
            vm.companyList = res.data.rows
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
      getCompanyMore(){
        // this.$router.push({path:'/companyRes/companyDyMore'})
        window.open(this.$router.resolve({path:'/companyRes/companyDyMore'}).href, '_blank');
      },
      // 金融服务
      getFinacialServiceList(){
        let vm = this;
        companyResApi.financialProductsList({limit:10}).then(res=>{
          if (vm.$commonFun.isSucc(res.status)){
            vm.financialList = res.data.rows
          }
        }).catch(error=>{
          console.log(error)
        })
      },
      finacialDetail(val){
        // this.$router.push({path:'/companyRes/finacialDetails',query:{id:val}})
        window.open(this.$router.resolve({path:'/companyRes/finacialDetails',query:{id:val}}).href, '_blank');
      },
      getFinanDetail(val){
        window.open(this.$router.resolve({path:'/companyRes/finacialDetails',query:{id:val}}).href, '_blank');
        // this.$router.push({path:'/companyRes/finacialDetails',query:{id:val}})
      },
      //厂房租售
      getFactoryRentList(){
        let vm = this;
        companyResApi.orgRentalList({
          limit:10,
          rentalType:vm.rentalType
        }).then(res=>{
          if (vm.$commonFun.isSucc(res.status)){
            vm.plantList = res.data.rows
            // console.log(res)
          }
        }).catch(error=>{
          console.log(error)
        })
      },
      factoryDetail(val){
        // this.$router.push({path:'/companyRes/factoryDetails',query:{id:val}})
        window.open(this.$router.resolve({path:'/companyRes/factoryDetails',query:{id:val}}).href, '_blank');
      },
      plantMore(){
        // this.$router.push({path:'/companyRes/factoryMore'})
        window.open(this.$router.resolve({path:'/companyRes/factoryMore'}).href, '_blank');
      },
      //企业产品
      getCompanyProductList(){
        let vm = this;
        companyResApi.orgProductList({limit:10}).then(res=>{
          if (vm.$commonFun.isSucc(res.status)){
            vm.companyProduct = res.data.rows
          }
        }).catch(error=>{
          console.log(error)
        })
      },
      productDetail(val){
        window.open(this.$router.resolve({path:'/companyRes/productDetails',query:{id:val}}).href, '_blank');
        // this.$router.push({path:'/companyRes/productDetails',query:{id:val}})
      },
      getProductMore(){
        // this.$router.push({path:'/companyRes/productMore'})
        window.open(this.$router.resolve({path:'/companyRes/productMore'}).href, '_blank');
      },
      //金融需求
      getFinacialProductList(){
        let vm = this;
        companyResApi.financialDemandsList({limit:10}).then(res=>{
          if (vm.$commonFun.isSucc(res.status)){
            vm.financialProduct = res.data.rows
          }
        }).catch(error=>{
          console.log(error)
        })
      },
      moreFinacial(){
        // var routeUrl = this.$router.resolve({path:'/companyRes/financialMore'});
        window.open(this.$router.resolve({path:'/companyRes/financialMore'}).href, '_blank');
      },
      //招工就业
      getEmployeeList(){
        let vm = this;
        companyResApi.employmentServicesList({
          limit:9,
        }).then(res=>{
          if (vm.$commonFun.isSucc(res.status)){
            console.log(res)
            vm.employeeList = res.data.rows;
          }
        }).catch(error=>{
          console.log(error)
        })
      },
      empMore(){
        // this.$router.push({path:'/companyRes/employeeMore'})
        window.open(this.$router.resolve({path:'/companyRes/employeeMore'}).href, '_blank');
      },
      getEmployeeDetail(val){
        window.open(this.$router.resolve({path:'/companyRes/employeeDetail',query:{id:val}}).href, '_blank');
        // this.$router.push({path:'/companyRes/employeeDetail',query:{id:val}})
      },
      //  厂房租售列表切换
      facClick(val){
        let vm = this;
        switch (val) {
          case 1:
            vm.rentalType = 1;
            vm.isActive = 1;
            vm.getFactoryRentList();
            break;
          case 2:
            vm.rentalType = 2;
            vm.isActive = 2;
            vm.getFactoryRentList();
            break;
          case 3:
            vm.rentalType = 3;
            vm.isActive = 3;
            vm.getFactoryRentList();
            break;
        }
      },
      companyDetail(val){
        window.open(this.$router.resolve({path:'/companyRes/companyDyDetails',query:{id:val}}).href, '_blank');
        // this.$router.push({path:'/companyRes/companyDyDetails',query:{id:val,path:'企业动态'}})
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "companyRes";
</style>
