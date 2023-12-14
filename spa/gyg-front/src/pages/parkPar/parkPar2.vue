<template>
  <el-main class="wrap">
    <div class="banner clearfix">
      <div class="img">
        <img :src="$store.state.imgServer+partyConditionDetail.imgUrl" alt="">
      </div>
      <div class="content">
        <h3>{{partyConditionDetail.title}}</h3>
        <div class="txt">
          <p>{{partyConditionDetail.content}}</p>
          <div class="detail">
            <span>查看详情</span>
          </div>
        </div>
        <div class="addParty">
          <el-button>加入公会</el-button>
        </div>
      </div>
    </div>
    <div class="twoPart clearfix">
      <div class="left">
        <h3 class="leftBarTitle">
          <span>党建快讯</span>
          <span>更多</span>
        </h3>
        <div class="listWrap">
          <p v-for="(item,index) in partyNewsList" :key="index">
            <span :title="item.title">{{item.title}}</span>
            <span>{{item.publishTime}}</span>
          </p>
        </div>
      </div>
      <div class="right">
        <h3 class="leftBarTitle">
          <span>党建学习</span>
          <span>更多</span>
        </h3>
        <div class="listWrap">
          <p v-for="(item,index) in partyStudyList" :key="index">
            <span :title="item.title">{{item.title}}</span>
            <span>{{item.publishTime}}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="partyAct">
      <h3 class="leftBarTitle">
        <span>党建活动</span>
        <span>更多</span>
      </h3>
      <div class="lunboWrap clearfix">
        <div v-for="item in partyActivitiesList" class="item">
          <div class="img">
            <img :src="$store.state.imgServer+item.imgUrl" alt="">
          </div>
          <h3>{{item.title}}</h3>
          <p>{{item.publishTime}}</p>
        </div>
      </div>
    </div>
    <div class="twoPart clearfix">
      <div class="left">
        <h3 class="leftBarTitle">
          <span>纪检规则</span>
          <span>更多</span>
        </h3>
        <div class="listWrap">
          <p v-for="(item,index) in disciplinaryRulesList" :key="index">
            <span :title="item.title">{{item.title}}</span>
            <span>{{item.publishTime}}</span>
          </p>
        </div>
      </div>
      <div class="right">
        <h3 class="leftBarTitle">
          <span>监督制度</span>
          <span>更多</span>
        </h3>
        <div class="listWrap">
          <p v-for="(item,index) in supervisionSystemList" :key="index">
            <span :title="item.title">{{item.title}}</span>
            <span>{{item.publishTime}}</span>
          </p>
        </div>
      </div>
    </div>
  </el-main>
</template>
<script>
  import parkPar from '@/api/parkPar/parkPar'

  export default {
    name: 'parkPar',
    components: {},
    data() {
      return {
        partyConditionDetail: {},
        partyNewsList: [],
        partyStudyList: [],
        partyActivitiesList: [],
        disciplinaryRulesList: [],
        supervisionSystemList: [],
        policyList: [
          {
            title: '关于申报2018年成都市中小企业成asdasdasdasdsadasdsadasdasdasd长工程培育企业（第二批）暨增补部分培育企业',
            publishTime: '2018-06-21'
          }
        ],
      }
    },
    mounted() {
      let vm = this;
      vm.getPartyConditionDetail();
      vm.getPartyNewsList();
      vm.getPartyStudyList();
      vm.getPartyActivitiesList();
      vm.getDisciplinaryRulesList();
      vm.getSupervisionSystemList();
    },
    methods: {
      getPartyConditionDetail() {
        let vm = this;
        parkPar.partyConditionDetail().then(res => {
          if (vm.$commonFun.isSucc(res.status)) {
            vm.partyConditionDetail = res.data;
          } else {
            vm.$message({
              type: 'error',
              message: '错误！'
            });
          }
        }).catch(err => {
          console.log(err)
        })
      },
      getPartyNewsList() {
        let vm = this;
        parkPar.partyNewsList({
          limit: 10
        }).then(res => {
          if (vm.$commonFun.isSucc(res.status)) {
            vm.partyNewsList = res.data.rows;
          } else {
            vm.$message({
              type: 'error',
              message: '错误！'
            });
          }
        }).catch(err => {
          console.log(err)
        })
      },
      getPartyStudyList() {
        let vm = this;
        parkPar.partyStudyList({
          limit: 10
        }).then(res => {
          if (vm.$commonFun.isSucc(res.status)) {
            vm.partyStudyList = res.data.rows;
          } else {
            vm.$message({
              type: 'error',
              message: '错误！'
            });
          }
        }).catch(err => {
          console.log(err)
        })
      },
      getPartyActivitiesList() {
        let vm = this;
        parkPar.partyActivitiesList({
          limit: 4
        }).then(res => {
          if (vm.$commonFun.isSucc(res.status)) {
            vm.partyActivitiesList = res.data.rows;
          } else {
            vm.$message({
              type: 'error',
              message: '错误！'
            });
          }
        }).catch(err => {
          console.log(err)
        })
      },
      getDisciplinaryRulesList() {
        let vm = this;
        parkPar.partyActivitiesList({
          limit: 10
        }).then(res => {
          if (vm.$commonFun.isSucc(res.status)) {
            vm.disciplinaryRulesList = res.data.rows;
          } else {
            vm.$message({
              type: 'error',
              message: '错误！'
            });
          }
        }).catch(err => {
          console.log(err)
        })
      },
      getSupervisionSystemList() {
        let vm = this;
        parkPar.supervisionSystemList({
          limit: 10
        }).then(res => {
          if (vm.$commonFun.isSucc(res.status)) {
            vm.supervisionSystemList = res.data.rows;
          } else {
            vm.$message({
              type: 'error',
              message: '错误！'
            });
          }
        }).catch(err => {
          console.log(err)
        })
      },
    }
  }
</script>
<style lang="less" scoped>
  @import "parkPar";
</style>
