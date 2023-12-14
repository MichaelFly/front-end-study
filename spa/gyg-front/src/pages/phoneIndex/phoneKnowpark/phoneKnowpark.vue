<template>
  <el-main class="phoneKnowWrap">
      <div class="wrap">
        <div class="knowParkBanner">
          <img src="./../../../../static/images/bg_07.png" alt="">
          <div class="knowParkBtn">
            <span :class="{active:isActive}" @click="changeTab(isActive)">园区发展</span>
            <span :class="{active:!isActive}" @click="changeTab(isActive)">机构设置</span>
          </div>
        </div>
        <div class="konwParkConten" v-if="isActive">
          <div class="knowTitle">
            <h3>发展情况</h3>
            <div class="des" v-if="tabfirst">
              <div class="images">
                <img :src="$store.state.imgServer+tabfirst.imgUrl" alt="">
              </div>
              <p v-html="tabfirst.content"></p>
            </div>
          </div>
          <div class="knowTitle">
            <h3>主导产业变化</h3>
            <div class="des" v-if="tabsecond">
              <div class="images">
                <img :src="$store.state.imgServer+tabsecond.imgUrl" alt="">
              </div>
              <p v-html="tabsecond.content"></p>
            </div>
            <div class="des" v-if="tabthird.type">
              <div class="images">
                <img :src="$store.state.imgServer+tabthird.imgUrl" alt="">
              </div>
              <p v-html="tabthird.content"></p>
            </div>
          </div>
          <div class="knowTitle">
            <h3>园区建设情况</h3>
            <div class="des" v-if="tabfifth">
              <div class="images">
                <img :src="$store.state.imgServer+tabfifth.imgUrl" alt="">
              </div>
              <p v-html="tabfifth.content"></p>

            </div>
            <div class="des" v-if="tabsix">
              <div class="images">
                <img :src="$store.state.imgServer+tabsix.imgUrl" alt="">
              </div>
              <p v-html="tabsix.content"></p>
            </div>
          </div>
        </div>
        <div class="konwParkSettings" v-if="!isActive">
          <div class="knowTitle">
            <h3>组织结构</h3>
            <div v-for="(item,index) in settingList" :key="index" v-if="index < 6">
              <div class="settingList clearfix" v-if="item.type === '1'">
                <div class="first">
                  <div class="settingTitle">
                    <div class="settingBg">
                      <i class="iconfont icon-ziyuanldpi"></i>
                    </div>
                  </div>
                </div>
                <div class="settingName" >
                  <h3>{{item.title |　splitNumber　}}</h3>
                  <p v-html="item.content"></p>
                </div>
              </div>
              <div class="settingList clearfix" v-if="item.type === '2'">
                <div class="first" :style="{borderTop:secondBorderTop}">
                  <div class="settingTitle" :style="{border:secondBorder}">
                    <div class="settingBg" :style="{background:secondColor}">
                      <i class="iconfont icon-xiangmu" :style="{color:second}"></i>
                    </div>
                  </div>
                </div>
                <div class="settingName">
                  <h3>{{item.title |　splitNumber　}}</h3>
                  <p v-html="item.content"></p>
                </div>
              </div>
              <div class="settingList clearfix" v-if="item.type === '3'" >
                <div class="first" :style="{borderTop:thirdBorderTop}">
                  <div class="settingTitle" :style="{border:thirdBorder}">
                    <div class="settingBg"  :style="{background:thirdColor}">
                      <i class="iconfont icon-shuju3" :style="{color:third}"></i>
                    </div>
                  </div>
                </div>
                <div class="settingName">
                  <h3>{{item.title |　splitNumber　}}</h3>
                  <p  v-html="item.content"></p>
                </div>
              </div>
              <div class="settingList clearfix" v-if="item.type === '4'">
                <div class="first" :style="{borderTop:forthBorderTop}">
                  <div class="settingTitle" :style="{border:forthBorder}">
                    <div class="settingBg" :style="{background:forthColor}">
                      <i class="iconfont icon-fuwuleixing" :style="{color:forth}"></i>
                    </div>
                  </div>
                </div>
                <div class="settingName">
                  <h3>{{item.title |　splitNumber　}}</h3>
                  <p  v-html="item.content"></p>
                </div>
              </div>
              <div class="settingList clearfix" v-if="item.type === '5'">
                <div class="first" :style="{borderTop:fifthBorderTop}">
                  <div class="settingTitle" :style="{border:fifthBorder}">
                    <div class="settingBg" :style="{background:fifthColor}">
                      <i class="iconfont icon-dangwugongkai" :style="{color:fifth}"></i>
                    </div>
                  </div>
                </div>
                <div class="settingName">
                  <h3>{{item.title |　splitNumber　}}</h3>
                  <p  v-html="item.content"></p>
                </div>
              </div>
              <div class="settingList clearfix" v-if="item.type === '6'">
                <div class="first" :style="{borderTop:sixBorderTop}">
                  <div class="settingTitle" :style="{border:sixBorder}">
                    <div class="settingBg" :style="{background:sixColor}">
                      <i class="iconfont icon-weibiaoti35" :style="{color:six}"></i>
                    </div>
                  </div>
                </div>
                <div class="settingName">
                  <h3>{{item.title |　splitNumber　}}</h3>
                  <p  v-html="item.content"> </p>
                </div>
              </div>
            </div>

          </div>

        </div>
        <div class="settingAddress" v-if="!isActive">
          <h3>{{contact.title |splitNumber}}</h3>
          <p>成都现代工业港管理委员会</p>
          <p>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编：{{address.postcode}}</p>
          <p>联系地址：{{address.phone}}</p>
          <p>联系电话：{{address.address}}</p>
          <div class="addressImage" id="gygMap">
            <!--<img src="../../../../static/images/map_.png" alt="">-->
          </div>
        </div>
      </div>
  </el-main>
</template>

<script>
  import knowPark from '@/api/knowPark/knowPark'
  export default {
    data(){
      return{
        secondBorderTop:'.02rem dashed #bd29d6',
        secondBorder:'1px solid #bd29d6',
        secondColor:'#ebbef3',
        second:'#bd29d6',
        thirdBorderTop:'0.02rem dashed #d0d7fc',
        thirdBorder:'1px solid #d0d7fc',
        thirdColor:'#d0d7fc',
        third:'#647bf6',
        forthBorderTop:'0.02rem dashed #ffc901',
        forthBorder:'1px solid #ffc901',
        forthColor:'#ffefb2',
        forth:'#ffc901',
        fifthBorderTop:'0.02rem dashed #d8271c',
        fifthBorder:'1px solid #d8271c',
        fifthColor:'#f3beba',
        fifth:'#d8271c',
        sixBorderTop:'0.02rem dashed #20e9ae',
        sixBorder:'1px solid #20e9ae',
        sixColor:'#bcf8e7',
        six:'#20e9ae',
        isActive:true,
        developement:[],
        settings:[],
        settingList:[],
        contact:[],
        type:'',
        tabfirst:[],
        tabsecond:[],
        tabthird:[],
        tabfifth:[],
        tabsix:[],
        address:[],
        title:'',
        tabType:''
      }
    },
    filters: {
      cutTime: function (value) {
        if (!value) return '';
        value = value.toString();
        let str = value.split(" ");
        return str[0]
      },
      splitNumber: function (value) {
        if (!value) return '';
        let str = value.split(".");
        return str[1]
      }
    },
    mounted(){
      let vm = this;
      vm.tabType = vm.$route.query.tabType;
      switch (vm.tabType) {
        case 'park':
          vm.getData();
          break;
        case 'setting':
          vm.isActive = false;
          vm.getSettings();
          vm.$nextTick(() => {
            vm.map();
          });
          break;
      }
    },
    methods:{
      getData(){
        let vm = this;
        knowPark.parkDevelopmentList().then(res=>{
          // console.log(res.data);
          if(vm.$commonFun.isSucc(res.status)){
            vm.developement = res.data;
            res.data.forEach(list=>{
              switch (list.type) {
                case "C":
                  vm.tabfirst = list;
                  break;
                case "A-1":
                  vm.tabsecond = list;
                  break;
                case "A-2":
                  vm.tabthird = list;
                  break;
                case "B-1":
                  vm.tabfifth = list;
                  break;
                case "B-2":
                  vm.tabsix = list;
                  break;
              }
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
      getSettings(){
        let vm = this;
        knowPark.depMagList().then(res=>{
          // console.log(res);
          if (vm.$commonFun.isSucc(res.status)){
            vm.settingList = res.data;
            // vm.contact = res.data[5];
            res.data.forEach(list=>{
              if (list.type === '7'){
                vm.contact = list;
                vm.address = JSON.parse(list.content)
              }
            });
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
      changeTab(val){
        let vm = this;
        vm.isActive = !vm.isActive;
        vm.getSettings();
        vm.getData();
        if(val){
          vm.$nextTick(() => {
            vm.map();
          })
        }
      },
      map(){
        let vm = this;
        let map = new BMap.Map("gygMap");
        let gygPoint = new BMap.Point(103.8701511265, 30.7936681746);
        let point = new BMap.Point(103.8748517016, 30.7935124422);
        let marker = new BMap.Marker(gygPoint);  // 创建标注
        map.addOverlay(marker);
        map.centerAndZoom(point, 17);
        map.enableScrollWheelZoom(true);
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "phoneKnowpark.less";
</style>
