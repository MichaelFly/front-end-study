<template>
  <el-main class="wrap">
    <div class="banner">
      <!--<img src="../../../static/images/banner06.png" alt="">-->
    </div>
    <div class="content">
      <!-- 环保通报 -->
      <div class="second clearfix">
        <div class="list">
          <h3>
            <i class="iconfont icon-huaxueshiyan-"></i>
            <span>环保通报</span>
            <span @click="getThirdMore">更多 >></span>
          </h3>
        </div>
        <div class="picLis clearfix">
          <div class="arrow-left" @click="slideChange(show)"><i class="iconfont icon-jiantou-copy" :class="{active:show}"></i></div>
          <div class="slide">
            <el-carousel :interval="0" arrow="never" class="slide-detail" ref="carousel">
              <el-carousel-item v-for="item in 2" :key="item" style="height: 350px;" name="">
                <div v-if="item ===1">
                  <div :title="item.title" class="pic" v-for="(item,index) in slideOne" :key="index" @click="getThirdDetail(item.id)">
                    <div class="imags">
                      <img :src="$store.state.imgServer+item.imgUrl" alt="">
                      <p>{{item.title | filterTags}}</p>
                      <p>{{item.publishTime | cutTime}}</p>
                    </div>
                  </div>
                </div>
                <div v-if="item ===2">
                  <div class="pic" v-for="(item,index) in slideTwo" :key="index" @click="getThirdDetail(item.id)">
                    <div :title="item.title" class="imags">
                      <img :src="$store.state.imgServer+item.imgUrl" alt="">
                      <p>{{item.title | filterTags}}</p>
                      <p>{{item.publishTime | cutTime}}</p>
                    </div>
                  </div>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="arrow-right" @click="slideChange(!show)"><i class="iconfont icon-jiantou" :class="{active:!show}"></i></div>
        </div>
      </div>
      <!-- 违纪事项，违法事件 -->
      <div class="first-wrap">
        <div class="first clearfix">
          <div class="first-left">
            <h3>
              <i class="iconfont icon-tuding"></i>
              <span>违纪事项</span>
              <span @click="getMore">更多 >></span>
            </h3>
            <div class="left-content">
              <div class="left-list">
                <h3 v-for="(item,index) in firstList" :key="index" @click="getDetail(item.id)">
                  <i class="item"></i>
                  <span class="isTop" v-if="item.isTop === 1 ">[置顶]</span>
                  <p :title="item.title">{{item.title}}</p>
                  <p>{{item.publishTime | cutTime}}</p>
                </h3>
              </div>
            </div>
          </div>
          <div class="first-right clearfix">
            <h3>
              <i class="iconfont icon-jilu"></i>
              <span>违法事件</span>
              <span @click="getSecondMore">更多 >></span>
            </h3>
            <div class="left-content">
              <div class="left-list ">
                <h3 v-for="(item,index) in secondList" :key="index" @click="getSecondDetail(item.id)">
                  <i class="item"></i>
                  <span class="isTop" v-if="item.isTop === 1">[置顶]</span>
                  <p :title="item.title">{{item.title}}</p>
                  <p>{{item.publishTime | cutTime}}</p>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 安全生产 -->
      <div class="third clearfix">
        <div class="safe-wrap">
          <h3>
            <i class="iconfont icon-ai-safe"></i>
            <span>安全生产</span>
            <span @click="getForthMore">更多 >></span>
          </h3>
          <div class="picList">
            <div :title="forth.title" class="list-item" v-for="(forth,index) in forthList" :key="index" @click="getForthDetail(forth.id)">
              <div class="images">
                <img :src="$store.state.imgServer+forth.imgUrl" alt="">
              </div>
              <div class="text">
                <p>{{forth.title}}</p>
                <span>{{forth.publishTime| cutTime}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </el-main>
</template>

<script>
  import illegalAct from '@/api/illegalAct/illegalActApi'
  import picSlide from '@/components/picSlide/picSlide'
  export default {
    components:{
      picSlide
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
    data(){
      return{
        firstList:[],
        secondList:[],
        show:true,
        slideOne:[],
        slideTwo:[],
        thirdList:[],
        forthList:[],

      }
    },
    mounted(){
      let vm = this;
      vm.getfirstData();
      vm.getSeconfData();
      vm.getThirdData();
      vm.getForthData();
    },
    methods:{
      getfirstData(){
        let vm = this;
        illegalAct.disciplineItemsList({limit:10}).then(res=>{
          if (vm.$commonFun.isSucc(res.status)){
            vm.firstList = res.data.rows
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
      getSeconfData(){
        let vm = this;
        illegalAct.lawIncidentList({limit:10}).then(res=>{
          if (vm.$commonFun.isSucc(res.status)){
            vm.secondList = res.data.rows
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
      getThirdData(){
        let vm = this;
        illegalAct.ecoReportList({limit:8}).then(res=>{
          if (vm.$commonFun.isSucc(res.status)){
            vm.slideOne = res.data.rows.slice(0,4);
            vm.slideTwo = res.data.rows.slice(4,8);
            vm.thirdList = vm.slideOne;
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
      getForthData(){
        let vm = this;
        illegalAct.safeManufactureList({limit:9}).then(res=>{
          if (vm.$commonFun.isSucc(res.status)){
            vm.forthList = res.data.rows;
            console.log(res)
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
      getDetail(val){
        let vm = this;
        window.open(this.$router.resolve({path:'/illegalAct/illegalDetail',query:{id:val}}).href, '_blank');
        // vm.$router.push({path:'/illegalAct/illegalDetail',query:{id:val}});
      },
      getMore(){
        let vm = this;
        window.open(this.$router.resolve({path:'/illegalAct/illegalMore'}).href, '_blank');
        // vm.$router.push({path:'/illegalAct/illegalMore'});
      },
      getSecondDetail(val){
        let vm = this;
        window.open(this.$router.resolve({path:'/illegalAct/lawIncidentDetail',query:{id:val}}).href, '_blank');
        // vm.$router.push({path:'/illegalAct/lawIncidentDetail',query:{id:val}})
      },
      getSecondMore(){
        let vm = this;
        window.open(this.$router.resolve({path:'/illegalAct/lawIncident'}).href, '_blank');
        // vm.$router.push({path:'/illegalAct/lawIncident'});
      },
      getThirdDetail(val){
        let vm = this;
        window.open(this.$router.resolve({path:'/illegalAct/ecoreportDetail',query:{id:val}}).href, '_blank');
        // vm.$router.push({path:'/illegalAct/ecoreportDetail',query:{id:val}});
      },
      getThirdMore(){
        let vm = this;
        window.open(this.$router.resolve({path:'/illegalAct/ecoreport'}).href, '_blank');
        // vm.$router.push({path:'/illegalAct/ecoreport'});
      },
      getForthDetail(val){
        let vm = this;
        window.open(this.$router.resolve({path:'/illegalAct/safeManufacDetail',query:{id:val}}).href, '_blank');
        // vm.$router.push({path:'/illegalAct/safeManufacDetail',query:{id:val}})
      },
      getForthMore(){
        let vm = this;
        window.open(this.$router.resolve({path:'/illegalAct/safeManufac'}).href, '_blank');
        // vm.$router.push({path:'/illegalAct/safeManufac'});
      },
      slideChange(val){
        let vm = this;
        vm.show = !vm.show;
        vm.show?vm.$refs.carousel.prev():vm.$refs.carousel.next();
      },
    }
  }
</script>

<style lang="less" scoped>
  @import "illegalAct";
</style>
