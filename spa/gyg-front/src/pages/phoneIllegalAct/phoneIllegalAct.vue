<template>
  <el-main class="illgalWrap">
    <div class="banner">
      <img src="../../../static/images/bg_wfwj.png" alt="">
    </div>
    <div class="illgalContent">
      <div class="first">
        <div class="title">
          <h3>
            <i class="iconfont icon-huaxueshiyan-"></i>
            <span>环保通报</span>
            <span></span>
          </h3>
        </div>
        <div class="slide">
          <el-carousel :interval="5000" arrow="never" height="1170px" class="slideWrap">
            <el-carousel-item v-for="item in 2" :key="item">
              <div v-if="item === 1">
                <div class="slideList" v-for="(item,index) in slideOne" :key="index" @click="toEcoDetails(item.id)">
                  <div class="images">
                    <img :src="$store.state.imgServer+item.imgUrl" alt="">
                  </div>
                  <div class="slideDes">
                    <p>{{item.title | filterTags}} </p>
                    <p>{{item.publishTime | cutTime}}</p>
                  </div>
                </div>
              </div>
              <div v-if="item === 2">
                <div class="slideList" v-for="(item,index) in slideTwo" :key="index" @click="toEcoDetails(item.id)">
                  <div class="images">
                    <img :src="$store.state.imgServer+item.imgUrl" alt="">
                  </div>
                  <div class="slideDes">
                    <p>{{item.title | filterTags}} </p>
                    <p>{{item.publishTime | cutTime}}</p>
                  </div>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="jobMore">
          <span  @click="toMore('eco')">更多通报 ></span>
        </div>
      </div>
      <div class="first">
        <div class="title">
          <h3>
            <i class="iconfont icon-tuding"></i>
            <span>违纪事项</span>
            <span @click="toMore('wjsx')">更多 >></span>
          </h3>
        </div>
        <phone-list :options="options"></phone-list>
      </div>
      <div class="first">
        <div class="title">
          <h3>
            <i class="iconfont icon-jilu"></i>
            <span>违法事件</span>
            <span @click="toMore('wfsj')">更多 >></span>
          </h3>
        </div>
        <phone-list :options="options2"></phone-list>
      </div>
      <div class="first clearfix">
        <div class="title">
          <h3>
            <i class="iconfont icon-ai-safe"></i>
            <span>安全生产</span>
            <span></span>
          </h3>
        </div>
        <div class="illList clearfix" v-for="(item,index) in forthList" :key="index" @click="safeDetail(item.id)">
          <div class="image">
            <img :src="$store.state.imgServer+item.imgUrl" alt="">
          </div>
          <div class="illDes">
            <p>{{item.title}}</p>
            <p>{{item.publishTime | cutTime}}</p>
          </div>
        </div>
        <div class="jobMore clearfix">
          <span  @click="toMore('safe')">更多信息 ></span>
        </div>
      </div>
    </div>
    <phoneFooter></phoneFooter>
  </el-main>
</template>

<script>
  import phoneList from '@/components/phoneList/phoneList'
  import illegalAct from '@/api/illegalAct/illegalActApi'
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
            publishTime:'publishTime',
          },
          rowClick:this.rowClick
        },
        options2:{
          dataList:[],
          propDatas:{
            title:'title',
            publishTime:'publishTime',
          },
          rowClick:this.wfsjClick,
        },
        forthList:[],
        slideOne:[],
        slideTwo:[],
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
      vm.getfirstData();
      vm.getSeconfData();
      vm.getForthData();
      vm.getThirdData();
    },
    methods:{
      getfirstData(){
        let vm = this;
        illegalAct.disciplineItemsList({limit:5}).then(res=>{
          if (vm.$commonFun.isSucc(res.status)){
            vm.options.dataList = res.data.rows
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
      rowClick(val){
        let vm = this;
        vm.$router.push({path:'/phoneIllegalAct/phoneIllegalDetail',query:{id:val}})
      },
      getSeconfData(){
        let vm = this;
        illegalAct.lawIncidentList({limit:5}).then(res=>{
          if (vm.$commonFun.isSucc(res.status)){
            vm.options2.dataList = res.data.rows
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
      wfsjClick(val){
        let vm = this;
        vm.$router.push({path:'/phoneIllegalAct/phoneIllegalDetail',query:{id:val}})
      },
      getForthData(){
        let vm = this;
        illegalAct.safeManufactureList({limit:6}).then(res=>{
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
      safeDetail(val){
        let vm = this;
        vm.$router.push({path:'/phoneIllegalAct/phoneIllegalDetail',query:{id:val}})
      },
      toEcoDetails(val){
        let vm = this;
        vm.$router.push({path:'/phoneIllegalAct/phoneIllegalDetail',query:{id:val}})
      },
      getThirdData(){
        let vm = this;
        illegalAct.ecoReportList({limit:8}).then(res=>{
          if (vm.$commonFun.isSucc(res.status)){
            vm.slideOne = res.data.rows.slice(0,4);
            vm.slideTwo = res.data.rows.slice(4,8);
            // vm.thirdList = vm.slideOne;
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
      toMore(val){
        let vm = this;
        switch (val) {
          case 'wjsx':
            vm.$router.push({path:'/phoneIllegalAct/phonewj'});
            break;
          case 'wfsj':
            vm.$router.push({path:'/phoneIllegalAct/phoneLaw'});
            break;
          case 'safe':
            vm.$router.push({path:'/phoneIllegalAct/phoneSafe'});
            break;
          case 'eco':
            vm.$router.push({path:'/phoneIllegalAct/phoneEco'});
            break;
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "phoneIllegalAct.less";
</style>
