<template>
  <el-main class="wrap">
    <div class="nav">
      <div class="first">
        <span>当前位置：</span>
        <span @click="toPath('1')">首页 > </span>
        <span @click="toPath('2')">全部搜索 > </span>
        <span>{{$route.query.keyword}}</span>
      </div>
    </div>
    <div class="content">
      <div class="result clearfix">
        <h3>
          <span>搜索结果</span>
          <span>共<span>{{count}}</span>条相关记录</span>
        </h3>
        <h3>
          <div>
            <span>分类筛选：</span>
            <span :class="{active:isFirst === 'all'}" @click="getFirst('all')">查看全部</span>
            <span v-for="(item,index) in first" :key="index" :class="{active:isFirst === item.contentType}" @click="getFirst(item.contentType)">{{item.name}}({{item.num}})</span>
          </div>
        </h3>
        <h3>
          <div>
            <span>搜索范围：</span>
            <span v-for="(item,index) in second" :key="index" :class="{active:isSecond === item.searchScope}" @click="getSecond(item.searchScope)">{{item.value}}</span>
          </div>
        </h3>
        <h3>
          <div>
            <p>时间范围：</p>
            <div v-for="(item,index) in third" :key="index">
              <span :class="{active:isThird === item.timeScope}" @click="getThird(item.timeScope)">{{item.value}}</span>
            </div>
            <div v-if="show" class="time">
              <el-row>
                <el-col :span="9">
                  <el-date-picker v-model="time.timeB" :picker-options="pickerOptions0"  type="date" format="yyyy-MM-dd"  value-format="yyyy-MM-dd" placeholder="开始日期" size="medium" style="width: 140px;margin-top: -7px;"></el-date-picker>
                </el-col>
                <el-col :span="2">--</el-col>
                <el-col :span="9">
                  <el-date-picker v-model="time.timeE"  :picker-options="pickerOptions1" type="date" format="yyyy-MM-dd"  value-format="yyyy-MM-dd"  placeholder="结束日期" size="medium" style="width: 140px; margin-top: -7px;"></el-date-picker>
                </el-col>
                <el-col :span="4">
                  <button :class="{active:isThird === 'self'}" class="confirm" @click="firmTime(time)">确定</button>
                </el-col>
              </el-row>

            </div>
          </div>
        </h3>
      </div>
      <div v-if="!showData">
        <list-all :options="options" class="list" ></list-all>
      </div>
      <!--<list-all :options="options" class="list" v-if="!showData"></list-all>-->

      <div v-if="showData" class="none">
        <img src="../../../static/images/data_.png" alt="">
      </div>
    </div>
  </el-main>
</template>

<script>
  import searchListApi from '@/api/searchList/searchList'
  import listAll from '@/components/list/list'
  export default {
    components:{
      listAll
    },
    data(){
      return{
        first:[],
        isFirst:"all",
        contentType:'',
        searchScope:'all',
        timeScope:'',
        keyword:'',
        showData:false,
        second:[
          {searchScope:'all',value:'标题和内容'},
          {searchScope:'title',value:'仅搜标题'},
        ],
        isSecond:"all",
        third:[
          {timeScope:'',value:'查看全部'},
          {timeScope:'week',value:'一周（含）内'},
          {timeScope:'month',value:'一月（含）内'},
          {timeScope:'year',value:'一年（含）内'},
          {timeScope:'self',value:'自定义'},
        ],
        isThird:"",
        options:{
          listData:[],
          rowClick:this.rowClick,
          pageInfo:{
            total:10,
            limit:10,
            currentPage:1,
            handleCurrentChange:this.handleCurrentChange
          }
        },
        time:{
          timeB:'',
          timeE:'',
        },
        show:false,
        count:'',
        pickerOptions0: {
          disabledDate: time => {
            if (this.time.timeE) {
              return (
                time.getTime() > new Date(this.time.timeE).getTime()
              );
            } else {
              // return time.getTime() > Date.now();
            }
          }
        },
        pickerOptions1: {
          disabledDate: time => {
            if (this.time.timeB) {
              return (
                // time.getTime() > Date.now() ||
                time.getTime() < new Date(this.time.timeB).getTime()-8.64e7
              );
            } else {
              return time.getTime() > Date.now();
            }
          }
        }
  }
},
watch:{
  '$route' (to,from){
    if(this.$route.query.keyword){
      this.keyword =  this.$route.query.keyword;
      this.getData();
    }
  }
},
mounted(){
  let vm = this;
  console.log(vm.$route.query.keyword);
  vm.keyword =  vm.$route.query.keyword;
  vm.getData();
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
methods:{
  initData(listData, total) {
    let vm = this;
    vm.options.listData = listData;
    vm.options.pageInfo.total = total;
  },
  getData(){
    let vm = this;
    searchListApi.contentSearchList({
      keyWord:vm.keyword,
      contentType:vm.contentType,
      searchScope:vm.searchScope,
      timeScope:vm.timeScope,
      timeE:vm.time.timeE,
      timeB:vm.time.timeB,
      limit: vm.options.pageInfo.limit,
      offset: (vm.options.pageInfo.currentPage - 1) * 10 + 1,
    }).then(res=>{
      if (vm.$commonFun.isSucc(res.status)) {
        vm.first = res.data.categoryInfo;
        vm.initData(res.data.pageInfo.rows, res.data.pageInfo.total);
        vm.count = res.data.pageInfo.total;
        // res.data.pageInfo.total = 0 ? vm.showData=true:vm.showData=false;
        if (res.data.pageInfo.total === 0){
          vm.showData = true;
        }else{
          vm.showData  = false;
        }
      }
    }).catch(error=>{
      console.log(error)
    })
  },
  rowClick(val){
    let vm = this;
    if (val.contentType === 23){
      window.open(this.$router.resolve({path:'/jobDetail',query:{id:val.itemId,keyword:vm.keyword}}).href, '_blank');
      // vm.$router.push({path:'/jobDetail',query:{id:val.itemId,keyword:vm.keyword}})
    } else {
      if (val.type === 'ADMINCON') {
        window.open(this.$router.resolve({path:'/detailAdminCon',query:{id:val.itemId,keyword:vm.keyword}}).href, '_blank');
        // vm.$router.push({path:'/detailAdminCon',query:{id:val.itemId,keyword:vm.keyword}})
      }else if(val.type === 'ORGCON'){
        window.open(this.$router.resolve({path:'/detailOrgcon',query:{id:val.itemId,keyword:vm.keyword}}).href, '_blank');
        // vm.$router.push({path:'/detailOrgcon',query:{id:val.itemId,keyword:vm.keyword}})
      }
    }
  },
  handleCurrentChange(val){
    let vm = this;
    vm.options.pageInfo.currentPage = val;
    vm.getData();
  },
  getFirst(val){
    let vm = this;
    if (val === 'all'){
      vm.contentType = "";
      vm.getData();
    }else{
      vm.contentType = val;
      vm.getData();
    }
    vm.isFirst = val;
    console.log(val)
  },
  getSecond(val){
    let vm = this;
    vm.searchScope = val;
    vm.isSecond = val;
    vm.getData();
    console.log(val)
  },
  getThird(val){
    let vm = this;
    vm.isThird = val;
    console.log(val);
    if(val === "self"){
      vm.show = true;
      vm.timeScope = val;

    }else{
      vm.show = false;
      // vm.isThird = "";
      vm.time.timeB = "";
      vm.time.timeE = "";
      vm.timeScope = val;
      vm.getData();
    }
  },
  firmTime(val){
    console.log(val)
    let vm = this;
    vm.time.timeB = val.timeB;
    vm.time.timeE = val.timeE;
    // vm.getData();
    if (vm.time.timeB === null || vm.time.timeE === null || vm.time.timeB === "" || vm.time.timeE === ""){
      vm.$message({
        type:'error',
        message:'日期选择不能为空！'
      });
    } else{
      vm.getData();
    }
    if (val.timeB > val.timeE){
      vm.$message({
        type:'error',
        message:'结束日期不能小于开始时间！'
      });
    }else{
      vm.getData();
    }
  },
  toPath(val){
    let vm = this;
    switch (val) {
      case '1':
        vm.$router.push({path:'/index'});
        break;
    }
  }
}
}
</script>

<style lang="less" scoped>
  @import "searchList";
</style>
