<template>
  <el-main class="wrap">
    <div class="banner">
      <!--<img src="../../../static/images/banner07_1.png" alt="">-->
      <div class="changeBtn">
        <span :class="{active:isActive}" @click="changeTab(isActive)">园区发展</span>
        <span :class="{active:!isActive}" @click="changeTab(isActive)">机构设置</span>
      </div>
      <div class="breadWrap">
        <div class="breadContent clearfix">
          <label>当前位置：</label>
          <el-breadcrumb class="breadRight" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/index'}">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-if="isActive">了解园区</el-breadcrumb-item>
            <el-breadcrumb-item v-if="!isActive">机构设置</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="development" v-if="isActive">
        <!-- 发展情况 -->

        <div class="condition clearfix">
          <h3>发展情况：</h3>
          <div class="dev-content" v-if="tabfirst">
            <img :src="$store.state.imgServer+tabfirst.imgUrl" alt="">
            <p>{{tabfirst.content}}</p>
          </div>
        </div>
        <!-- 主导产业变化 -->
        <div class="change clearfix">
          <h3>主导产业变化：</h3>
          <div class="change-content">
            <!--<div class="con-left">-->
              <!--<div class="image1">-->
                <!--<img :src="$store.state.imgServer+tabsecond.imgUrl" alt="" v-if="tabsecond">-->
              <!--</div>-->
              <!--<div class="image2">-->
                <!--<img :src="imgFront+tabthird.imgUrl" alt="" v-if="tabthird.type">-->
              <!--</div>-->
            <!--</div>-->
            <div class="first clearfix">
              <img :src="$store.state.imgServer+tabsecond.imgUrl" alt="">
              <p>{{tabsecond.content}}</p>
              <!--<p v-if="tabthird.type">{{tabthird.content}}</p>-->
            </div>
            <div class="second">
              <img :src="$store.state.imgServer+tabthird.imgUrl" alt="">
              <p>{{tabthird.content}}</p>
            </div>
          </div>
        </div>
        <!-- 园区建设情况 -->
        <div class="construct clearfix">
          <h3>园区建设情况：</h3>
          <div class="first" v-if="tabfifth">
            <div class="images">
              <img :src="$store.state.imgServer+tabfifth.imgUrl" alt="">
            </div>
            <p>{{tabfifth.content}}</p>
          </div>
          <div class="second" v-if="tabsix">
            <div class="images">
              <img :src="$store.state.imgServer+tabsix.imgUrl" alt="">
            </div>
            <p>{{tabsix.content}}</p>
          </div>
        </div>
      </div>
      <div class="settings" v-if="!isActive">
        <h3>组织结构：</h3>
        <div class="list clearfix" v-for="(item,index) in settingList" :key="index" v-if="index < 6">
          <div >
            <div class="first" v-if="item.type === '1'">
              <div>
                <div class="logo">
                  <div class="bg">
                    <i class="iconfont icon-ziyuanldpi"></i>
                  </div>
                </div >
                <h3>１、{{item.title |　splitNumber　}}</h3>
              </div>
              <p v-html="item.content">{{item.content}}</p>
            </div>
            <div class="first"  v-if="item.type === '2'">
              <div>
                <div class="logo" :style="{border:secondBorder}">
                  <div class="bg" :style="{background:secondColor}">
                    <i class="iconfont icon-xiangmu" :style="{color:second}"></i>
                  </div>
                </div >
                <h3>2、{{item.title |　splitNumber　}}</h3>
              </div>
              <p v-html="item.content">{{item.content}}</p>
            </div>
            <div class="first"  v-if="item.type === '3'">
              <div>
                <div class="logo" :style="{border:thirdBorder}">
                  <div class="bg" :style="{background:thirdColor}">
                    <i class="iconfont icon-shuju3" :style="{color:third}"></i>
                  </div>
                </div >
                <h3>3、{{item.title |　splitNumber　}}</h3>
              </div>
              <p v-html="item.content">{{item.content}}</p>
            </div>
            <div class="first"  v-if="item.type === '4'">
              <div>
                <div class="logo" :style="{border:forthBorder}">
                  <div class="bg" :style="{background:forthColor}">
                    <i class="iconfont icon-fuwuleixing" :style="{color:forth}"></i>
                  </div>
                </div >
                <h3>4、{{item.title |　splitNumber　}}</h3>
              </div>
              <p v-html="item.content">{{item.content}}</p>
            </div>
            <div class="first"  v-if="item.type === '5'">
              <div>
                <div class="logo" :style="{border:fifthBorder}">
                  <div class="bg" :style="{background:fifthColor}">
                    <i class="iconfont icon-dangwugongkai" :style="{color:fifth}"></i>
                  </div>
                </div >
                <h3>5、{{item.title |　splitNumber　}}</h3>
              </div>
              <p v-html="item.content">{{item.content}}</p>
            </div>
            <div class="first"  v-if="item.type === '6'">
              <div>
                <div class="logo" :style="{border:sixBorder}">
                  <div class="bg" :style="{background:sixColor}">
                    <i class="iconfont icon-weibiaoti35" :style="{color:six}"></i>
                  </div>
                </div >
                <h3>6、{{item.title |　splitNumber　}}</h3>
              </div>
              <p v-html="item.content">{{item.content}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="contact" v-if="!isActive">
        <h3>{{contact.title |splitNumber}}</h3>
        <p>成都现代工业港管理委员会</p>
        <p>
          <span>邮编：</span>
          <span>{{address.postcode}}</span>
        </p>
        <p>联系电话：{{address.phone}}</p>
        <p>联系地址：{{address.address}}</p>
        <div class="images">
          <div id="gygMap" style="height: 300px;"></div>
          <!--<img src="../../../static/images/map.png" alt="">-->
        </div>
      </div>
    </div>
  </el-main>
</template>
<script>
  import BMap from 'BMap'
  import knowPark from '@/api/knowPark/knowPark'
  export default {
    data(){
      return{
        secondBorder:'1px solid #bd29d6',
        secondColor:'#ebbef3',
        second:'#bd29d6',
        thirdBorder:'1px solid #d0d7fc',
        thirdColor:'#d0d7fc',
        third:'#647bf6',
        forthBorder:'1px solid #ffc901',
        forthColor:'#ffefb2',
        forth:'#ffc901',
        fifthBorder:'1px solid #d8271c',
        fifthColor:'#f3beba',
        fifth:'#d8271c',
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
        markerArr:[
          {title:"成都市现代工业港管理委员会",content:"地址：成都市郫都区西源大道4799号",point:"103.870706|30.793954",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}}
        ],
        mapStyle:{
          width:'100%',
          height:'100%',
        },
        id:'',

      }
    },
    filters:{
      cutTime: function (value) {
        if (!value) return '';
        value = value.toString();
        let str = value.split(" ");
        return str[0]
      },
      splitNumber:function(value){
        if (!value) return '';
        let str = value.split(".");
        return str[1]
      }

    },
    mounted(){
      let vm = this;
      vm.id = vm.$route.query.id;
      switch (vm.id) {
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
              console.log(list)
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
        // if (val === 'true') {
        //   vm.isActive = false;
        //   vm.getData()
        // }else{
        //   vm.isActive = true;
        //   vm.getSettings();
        // }
        vm.isActive = !vm.isActive;
        vm.getSettings();
        vm.getData();
        if(val){
          vm.$nextTick(() => {
            vm.map();
          })
        }
      },
      toPath(){
        let vm = this;
        vm.$router.push({path:'/'})
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
  @import "knowPark";
</style>
