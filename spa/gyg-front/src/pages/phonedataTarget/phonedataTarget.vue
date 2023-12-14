<template>
  <el-main class="outer">
    <div class="wrapCotnent">
      <div class="content">
        <div class="levelFirst">
          <div class="left clearfix">
            <h3>投资产出值</h3>
            <div class="tu" id="invesment"></div>
            <div class="des">
              <div class="first">
                <div>
                  <span>同比</span>
                  <div>
                    <span>去年</span>
                  </div>
                  <span v-if="inversment.invesPercent > 0 " class="just">+{{inversment.invesPercent}}%</span>
                  <span v-if="inversment.invesPercent < 0 " class="negative">{{inversment.invesPercent}}%</span>
                </div>
                <div>
                  <div></div>
                  <span>园区总投资</span>
                </div>
              </div>
              <div></div>
              <div class="first">
                <div>
                  <span>同比</span>
                  <div>
                    <span>去年</span>
                  </div>
                  <span v-if="inversment.indusPercent > 0 " class="just">+{{inversment.indusPercent}}%</span>
                  <span v-if="inversment.indusPercent < 0 " class="negative">{{inversment.indusPercent}}%</span>
                </div>
                <div>
                  <div class="industry"></div>
                  <span>工业总产值</span>
                </div>
              </div>
            </div>
          </div>
          <div class="right clearfix">
            <div class="serTitle clearfix">
              <h3>园区招商服务</h3>
              <div class="desBlock">
                <div>
                  <div></div>
                  <span>2017年</span>
                </div>
                <div>
                  <div></div>
                  <span>1-本月</span>
                </div>
              </div>
            </div>
            <!-- 招引项目数 -->
            <div class="project">
              <div class="clearfix">
                <span>招引项目数</span>
                <span>累计同比</span>
              </div>
              <br>
              <div>
                <span>{{service.project}}</span>
                <span>个</span>
                <span v-if="service.proPercent > 0" class="just">+{{service.proPercent}}%</span>
                <span v-if="service.proPercent < 0" class="negative">{{service.proPercent}}%</span>
              </div>
              <div id="first-chart"></div>
            </div>
            <!-- 子女入学数 -->
            <div class="project">
              <div class="clearfix">
                <span>子女入学数</span>
                <span>累计同比</span>
              </div>
              <br>
              <div>
                <span>{{service.child}}</span>
                <span>个</span>
                <span v-if="service.childPercent > 0" class="just">+{{service.childPercent}}%</span>
                <span v-if="service.childPercent < 0" class="negative">{{service.childPercent}}%</span>
              </div>
              <div id="second-chart"></div>
            </div>
            <!-- 就业招工数 -->
            <div class="project">
              <div class="clearfix">
                <span>就业招工数</span>
                <span>累计同比</span>
              </div>
              <br>
              <div>
                <span>{{service.job}}</span>
                <span>个</span>
                <span v-if="service.jobPercent > 0" class="just">+{{service.jobPercent}}%</span>
                <span v-if="service.jobPercent < 0" class="negative">{{service.jobPercent}}%</span>
              </div>
              <div id="third-chart"></div>
            </div>
          </div>
        </div>
        <div class="levelSecond clearfix">
          <div class="service">
            <div class="title">
              <h3>商贸服务</h3>
              <div>
                <div></div>
                <span>2017年</span>
                <div>
                  <div></div>
                  <span>1 — 本月</span>
                </div>
              </div>
            </div>
            <div class="content">
              <div class="chart" id="businesService"></div>
              <div class="des">
                <div class="clearfix">
                  <div><i class="iconfont icon-shangpin"></i></div>
                  <div>
                    <span>商品零售额</span>
                    <span>{{busService.sale}}</span>
                    <span v-if="busService.salePercent > 0" class="just">+{{busService.salePercent}}%</span>
                    <span v-if="busService.salePercent < 0" class="negative">{{busService.salePercent}}%</span>
                  </div>
                </div>
                <div >
                  <div style="background: #ffeca6"><i class="iconfont icon-xianxiaquan" style="color: #ffc901;"></i></div>
                  <div>
                    <span>社消零</span>
                    <span>{{busService.social}}</span>
                    <span v-if="busService.socialPercent > 0" class="just">+{{busService.socialPercent}}%</span>
                    <span v-if="busService.socialPercent < 0" class="negative">{{busService.socialPercent}}%</span>
                    <!--<span>+{{busService.socialPercent}}</span>-->
                  </div>
                </div>
                <div>
                  <div style="background: #a6f6df"><i class="iconfont icon-qianbao" style="color: #20e9ae;font-size: 20px;"></i></div>
                  <div>
                    <span>营业收入</span>
                    <span>{{busService.business}}</span>
                    <span v-if="busService.businessPercent > 0" class="just">+{{busService.businessPercent}}%</span>
                    <span v-if="busService.businessPercent < 0" class="negative">{{busService.businessPercent}}%</span>
                    <!--<span>+{{busService.businessPercent}}</span>-->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="finData">
            <div class="title">
              <h3>税务数据</h3>
              <div>
                <div></div>
                <span>1 — 本月纳税合计</span>
                <div>
                  <div></div>
                  <span>本月新增</span>
                </div>
              </div>
            </div>
            <div class="finContent">
              <div class="pie" id="tax"></div>
              <div class="finDes">
                <div class="clearfix">
                  <div>
                    <p>
                      <span>{{tax.total}}</span>
                      <span>+{{tax.totalIncrease}}</span>
                      <!--<span>-5454亿元</span>-->
                      <!--<span>+16</span>-->
                      <span v-if="tax.totalPercent > 0" class="just">+{{tax.totalPercent}}%</span>
                      <span v-if="tax.totalPercent < 0" class="negative">{{tax.totalPercent}}%</span>
                    </p>
                    <p>
                      <span>1-本月纳税合计</span>
                      <span>较去年同期</span>
                      <span>累计同比</span>
                    </p>
                  </div>
                  <div>
                    <p>
                      <span>{{tax.month}}</span>
                      <span>+{{tax.monthIncrease}}</span>
                      <!--<span>-5454亿元</span>-->
                      <!--<span>+16</span>-->
                      <span v-if="tax.monthPercent > 0" class="just">+{{tax.monthPercent}}%</span>
                      <span v-if="tax.monthPercent < 0" class="negative">{{tax.monthPercent}}%</span>
                    </p>
                    <p>
                      <span>本月新增</span>
                      <span>较去年同期</span>
                      <span>累计同比</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <phoneFooter></phoneFooter>
  </el-main>
</template>

<script>
  import dataApi from '@/api/dataTarget/dataTargetApi'
  import phoneFooter from '@/components/phoneFooter/phoneFooter'
  import echarts from 'echarts'
  export default {
    components:{
      phoneFooter
    },
    data(){
      return {
        myHeight:'',
        inversment:{
          inves:'',
          data:[],
          invesPercent:'',
          indus:'',
          indusPercent:'',
          type:'',
          type1:'',
        },
        invitingProject:{
          xData:[],
          seriesData:[],
          seriesName:'',
          num:'',//招引项目数
          per:'',//累计同比
        },
        busService:{
          sale:'',
          salePercent:'',
          social:'',
          socialPercent:'',
          business:'',
          businessPercent:'',
        },
        service:{
          project:'',
          proPercent:'',
          child:'',
          childPercent:'',
          job:'',
          jobPercent:'',
        },
        tax:{
          total:'',
          totalPercent:'',
          totalIncrease:'',
          month:'',
          monthPercent:'',
          monthIncrease:'',
          total1:'',
          month1:'',
          pieMonth:[0],
          pieDes:[0]
        },
        businessUnit:'',
        taxUnit:'',
        str1:[],
        fistLevel:[],
        secondLevel:[],
      }
    },
    mounted(){
      let vm = this;
      vm.getInvesment();
      vm.getFirstChart();
      vm.getBusService();
      vm.getTax();
    },
    methods:{
      getInvesment(){
        let vm = this;
        let firstChar = echarts.init(document.getElementById('invesment'));
        dataApi.outputData().then(res=>{
          if (vm.$commonFun.isSucc(res.status)){
            // console.log(res)
            res.data.forEach(list=>{
              switch (list.type) {
                case "园区总产值":
                  vm.inversment.inves = list.total;
                  vm.inversment.type = list.type;
                  vm.inversment.data.inves1 = parseFloat(list.total);
                  vm.inversment.invesPercent = parseFloat(list.percent);
                  break;
                case "工业总产值":
                  vm.inversment.indus = list.total;
                  vm.inversment.type1 = list.type;
                  vm.inversment.data.indus1 = parseFloat(list.total);
                  vm.inversment.indusPercent = parseFloat(list.percent);
                  break;
              }
            });
            var option = {
              tooltip:{
                trigger: 'item',
                formatter: "{b}<br>"
              },
              itemStyle: {
                //通常情况下：
                normal: {
                  //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                  color: function (params) {
                    var colorList = ['#8438dd', '#2ed8e9'];
                    return colorList[params.dataIndex];
                  }
                }
              },
              graphic:{
                type:"text",
                left:'center',
                top:'center',
                z:2,
                zlevel:100,
                style:{
                  text:'投资产出值',
                  x:100,
                  y:100,
                  file:'#000',
                  width:20,
                  fontSize:14,
                  fontWeight:'bold',
                  height:40,
                }
              },
              calculable : true,
              series:[
                {
                  name:'',
                  type:'pie',
                  radius : [40,100],
                  center : ['50%', '50%'],
                  roseType : 'radius',
                  label: {
                    normal: {
                      show: false
                    },
                    emphasis: {
                      show: false
                    }
                  },
                  lableLine: {
                    normal: {
                      show: false
                    },
                    emphasis: {
                      show: false
                    }
                  },
                  name:[
                    vm.inversment.type,
                    vm.inversment.type1,
                  ],
                  data:[
                    {value:vm.inversment.data.inves1,name:'园区总投资：'+vm.inversment.inves},
                    {value:vm.inversment.data.indus1,name:'工业总产值：'+vm.inversment.indus},
                    // vm.inversment.data.inves1,
                    // vm.inversment.data.indus1
                  ]
                },
              ]
            };
            firstChar.setOption(option)
          }
        }).catch(error=>{
          console.log(error);
        });
      },
      getFirstChart(){
        let vm = this;
        dataApi.investChartData().then(res=>{
          if (vm.$commonFun.isSucc(res.status)){
            vm.invitingProject.xData = res.data[0][0];
            vm.invitingProject.seriesData = res.data[0][1];
            var option = {
              // color: ['#2ed8e9',"#8438dd"],
              tooltip : {
                trigger: 'axis',
                formatter: "{b}: {c}个",
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                  type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
              },
              grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
              },
              xAxis : [
                {
                  type : 'category',
                  data : res.data[0][0],
                  axisTick: {
                    alignWithLabel: true
                  }
                }
              ],
              yAxis : [
                {
                  type : 'value'
                }
              ],
              itemStyle: {
              },
              series : [
                {
                  itemStyle: {
                    normal: {
                      color: function (params) {
                        var colorList = [
                          ['#0da8fe', '#07cee4', '#02eccf'],
                          ['#415afb', '#5c84fd', '#74a8ff']
                        ];
                        var index = params.dataIndex;
                        if (params.dataIndex >= colorList.length) {
                          index = params.dataIndex - colorList.length;
                        }
                        return new echarts.graphic.LinearGradient(0, 0, 0, 1,
                          [
                            {offset: 0, color: colorList[index][0]},
                            {offset: 0.5, color: colorList[index][1]},
                            {offset: 1, color: colorList[index][2]}
                          ]);
                      },
                      barBorderRadius:4  //柱状角成椭圆形
                    },
                  },
                  name:'招引项目数',
                  type:'bar',
                  barWidth: '30%',
                  data:vm.invitingProject.seriesData,
                }
              ]
            };
            firstChart.setOption(option);
            var option2 = {
              color: ['#2ed8e9',"#8438dd"],
              tooltip : {
                trigger: 'axis',
                formatter: "{b}: {c}个",
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                  type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
              },
              grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
              },
              itemStyle: {
                normal: {
                  color: function (params) {
                    var colorList = [
                      ['#0da8fe', '#07cee4', '#02eccf'],
                      ['#415afb', '#5c84fd', '#74a8ff']
                    ];
                    var index = params.dataIndex;
                    if (params.dataIndex >= colorList.length) {
                      index = params.dataIndex - colorList.length;
                    }
                    return new echarts.graphic.LinearGradient(0, 0, 0, 1,
                      [
                        {offset: 0, color: colorList[index][0]},
                        {offset: 0.5, color: colorList[index][1]},
                        {offset: 1, color: colorList[index][2]}
                      ]);
                  },
                  barBorderRadius:4  //柱状角成椭圆形
                },
              },
              xAxis : [
                {
                  type : 'category',
                  data : res.data[1][0],
                  axisTick: {
                    alignWithLabel: true
                  }
                }
              ],
              yAxis : [
                {
                  type : 'value'
                }
              ],
              series : [
                {
                  itemStyle: {
                    normal: {
                      color: function (params) {
                        var colorList = [
                          ['#0da8fe', '#07cee4', '#02eccf'],
                          ['#415afb', '#5c84fd', '#74a8ff']
                        ];
                        var index = params.dataIndex;
                        if (params.dataIndex >= colorList.length) {
                          index = params.dataIndex - colorList.length;
                        }
                        return new echarts.graphic.LinearGradient(0, 0, 0, 1,
                          [
                            {offset: 0, color: colorList[index][0]},
                            {offset: 0.5, color: colorList[index][1]},
                            {offset: 1, color: colorList[index][2]}
                          ]);
                      },
                      barBorderRadius:4  //柱状角成椭圆形
                    },
                  },
                  name:'子女入学数',
                  type:'bar',
                  barWidth: '30%',
                  data:res.data[1][1],
                }
              ]
            };
            var option3 = {
              color: ['#2ed8e9',"#8438dd"],
              tooltip : {
                trigger: 'axis',
                formatter: "{b}: {c}个",
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                  type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
              },
              grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
              },
              itemStyle: {
                normal: {
                  color: function (params) {
                    var colorList = [
                      ['#0da8fe', '#07cee4', '#02eccf'],
                      ['#415afb', '#5c84fd', '#74a8ff']
                    ];
                    var index = params.dataIndex;
                    if (params.dataIndex >= colorList.length) {
                      index = params.dataIndex - colorList.length;
                    }
                    return new echarts.graphic.LinearGradient(0, 0, 0, 1,
                      [
                        {offset: 0, color: colorList[index][0]},
                        {offset: 0.5, color: colorList[index][1]},
                        {offset: 1, color: colorList[index][2]}
                      ]);
                  },
                  barBorderRadius:4  //柱状角成椭圆形
                },
              },
              xAxis : [
                {
                  type : 'category',
                  data : res.data[2][0],
                  axisTick: {
                    alignWithLabel: true
                  }
                }
              ],
              yAxis : [
                {
                  type : 'value'
                }
              ],
              series : [
                {
                  itemStyle: {
                    normal: {
                      color: function (params) {
                        var colorList = [
                          ['#0da8fe', '#07cee4', '#02eccf'],
                          ['#415afb', '#5c84fd', '#74a8ff']
                        ];
                        var index = params.dataIndex;
                        if (params.dataIndex >= colorList.length) {
                          index = params.dataIndex - colorList.length;
                        }
                        return new echarts.graphic.LinearGradient(0, 0, 0, 1,
                          [
                            {offset: 0, color: colorList[index][0]},
                            {offset: 0.5, color: colorList[index][1]},
                            {offset: 1, color: colorList[index][2]}
                          ]);
                      },
                      barBorderRadius:4  //柱状角成椭圆形
                    },
                  },
                  name:'就业招工数',
                  type:'bar',
                  barWidth: '30%',
                  data:res.data[2][1],
                }
              ]
            };
            secondChart.setOption(option2);
            thirddChart.setOption(option3);
          }
        }).catch(error=>{
          console.log(error)
        });
        var firstChart = echarts.init(document.getElementById('first-chart'));
        var secondChart = echarts.init(document.getElementById('second-chart'));
        var thirddChart = echarts.init(document.getElementById('third-chart'));
        dataApi.investData().then(res=>{
          if (vm.$commonFun.isSucc(res.status)) {
            console.log(res)
            res.data.forEach(list=>{
              switch (list.type) {
                case '招商项目数':
                  vm.service.project = list.month;
                  vm.service.proPercent = parseFloat(list.percent);
                  break;
                case '子女入学数':
                  vm.service.child = list.month;
                  vm.service.childPercent = parseFloat(list.percent);
                  break;
                case '就业人口数':
                  vm.service.job = list.month;
                  vm.service.jobPercent = parseFloat(list.percent);
                  break;
              }
            });
          }
        }).catch(error=>{
          console.log(error)
        })
      },
      getBusService(){
        let vm = this;
        let firstChar = echarts.init(document.getElementById('businesService'));
        dataApi.businessChartData().then(res=>{
          if (vm.$commonFun.isSucc(res.status)){
            for (let i=0;i<3;i++){
              vm.fistLevel.push(parseFloat(res.data[0][i]));
              vm.secondLevel.push(parseFloat(res.data[1][i]))
            }
            var busOption = {
              grid: {
                // x: '1%', //相当于距离左边效果:padding-left/**/
                x:25,
                x2:5,
                containLabel: true
              },
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'shadow'
                },
                formatter:function (data) {
                  if (data[0].dataIndex === 0){
                    return "2017年"+" : "+res.data[0][0]+"<br>"+"1-本月"+" : "+res.data[1][0]
                  }else if (data[0].dataIndex === 1){
                    return "2017年"+" : "+res.data[0][1]+"<br>"+"1-本月"+" : "+res.data[1][1]
                  } else{
                    return "2017年"+" : "+res.data[0][2]+"<br>"+"1-本月"+" : "+res.data[1][2]
                  }
                }
              },
              xAxis: {
                type: 'value',
                boundaryGap: [0, 0.1],
              },
              yAxis: {
                type: 'category',
                data: res.data[2],
              },
              series: [
                {
                  itemStyle: {
                    normal: {
                      color: function (params) {
                        var colorList = [
                          ['#8594f8', '#6ab7fb', '#51d9fd'],
                          ['#8594f8', '#6ab7fb', '#51d9fd']
                        ];
                        var index = params.dataIndex;
                        if (params.dataIndex >= colorList.length) {
                          index = params.dataIndex - colorList.length;
                        }
                        return new echarts.graphic.LinearGradient(0, 1,1, 0,
                          [
                            {offset: 0, color: colorList[index][0]},
                            {offset: 0.5, color: colorList[index][1]},
                            {offset: 1, color: colorList[index][2]}
                          ]);
                      },
                      barBorderRadius:4  //柱状角成椭圆形
                    },
                  },
                  name: '2017年',
                  type: 'bar',
                  // data: res.data[0]
                  data:vm.fistLevel
                },
                {
                  itemStyle: {
                    normal: {
                      color: function (params) {
                        var colorList = [
                          ['#fa879d', '#fc9da3', '#fdb2a9'],
                          ['#fa879d', '#fc9da3', '#fdb2a9'],
                        ];
                        var index = params.dataIndex;
                        if (params.dataIndex >= colorList.length) {
                          index = params.dataIndex - colorList.length;
                        }
                        return new echarts.graphic.LinearGradient(0, 1,1, 0,
                          [
                            {offset: 0, color: colorList[index][0]},
                            {offset: 0.5, color: colorList[index][1]},
                            {offset: 1, color: colorList[index][2]}
                          ]);
                      },
                      barBorderRadius:4  //柱状角成椭圆形
                    },
                  },
                  name: '1-本月',
                  type: 'bar',
                  // data: res.data[1]
                  data:vm.secondLevel
                }
              ]
            };
            firstChar.setOption(busOption)
          }
        }).catch(error=>{
          console.log(error)
        });
        dataApi.businessData().then(res=>{
          if (vm.$commonFun.isSucc(res.status)){
            res.data.forEach(list=>{
              switch (list.type) {
                case '商品零售额':
                  vm.busService.sale = list.month;
                  vm.busService.salePercent = parseFloat(list.percent);
                  break;
                case '营业收入':
                  vm.busService.business = list.month;
                  vm.busService.businessPercent =parseFloat(list.percent);
                  break;
                case '社消零售额':
                  vm.busService.social = list.month;

                  vm.busService.socialPercent = parseFloat(list.percent);
                  break;
              }
            })
          }
        }).catch(error=>{
          console.log(error)
        });
      },
      getTax(){
        let vm = this;
        var str="" ,taxname="";
        let taxCharts = echarts.init(document.getElementById('tax'));
        dataApi.taxData().then(res=>{
          if (vm.$commonFun.isSucc(res.status)){
            res.data.forEach(list=>{
              switch (list.type) {
                case "本月新增":
                  vm.tax.month = list.total;
                  vm.tax.month1 = parseFloat(list.total);
                  vm.tax.monthPercent = parseFloat(list.percent);
                  vm.tax.monthIncrease = list.increase;
                  vm.tax.pieDes.push(list.type);
                  vm.str =  list.total.substring(list.total.length-2,list.total.length);
                  vm.str1.push(str);
                  vm.tax.pieMonth.push( parseFloat(list.total));
                  break;
                case "1-本月纳税合计":
                  vm.tax.total = list.total;
                  vm.tax.total1 = parseFloat(list.total);
                  vm.tax.totalPercent = parseFloat(list.percent);
                  vm.tax.totalIncrease = list.increase;
                  vm.tax.pieDes.push(list.type);
                  vm.taxname =  list.total.substring(list.total.length-2,list.total.length);
                  vm.str1.push(str);
                  vm.tax.pieMonth.push( parseFloat(list.total));
                  break;
              }
            });
            var taxOptions = {
              tooltip:{
                trigger: 'item',
                position: ['50%', '50%'],
                formatter:function (params) {
                  if (params.dataIndex ===1){
                    return params.name+ " ： "+params.value+vm.taxname;
                  }else{
                    return params.name+ " : " +params.value+vm.str;
                  }
                }
              },
              color:['#f96783','#1cddde','#1cddde'],
              angleAxis: {
                show:false,
              },
              radiusAxis: {
                show:false,
                type: 'category',
                data: vm.tax.pieDes,
                z: 10
              },
              myareaStyle:{
                color:['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)'],//分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
                shadowColor:"red",          //阴影颜色
                shadowOffsetX:0,            //阴影水平方向上的偏移距离。
                shadowOffsetY:0,            //阴影垂直方向上的偏移距离
                shadowBlur:10,              //图形阴影的模糊大小。
                opacity:1,
              },
              mylineStyle:{
                color:"#333",               //颜色，'rgb(128, 128, 128)'，'rgba(128, 128, 128, 0.5)'，支持线性渐变，径向渐变，纹理填充
                shadowColor:"red",          //阴影颜色
                shadowOffsetX:0,            //阴影水平方向上的偏移距离。
                shadowOffsetY:0,            //阴影垂直方向上的偏移距离
                shadowBlur:10,              //图形阴影的模糊大小。
                type:"solid",               //坐标轴线线的类型，solid，dashed，dotted
                width:1,                    //坐标轴线线宽
                opacity:1,                  //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形
              },
              polar:{
                show:false,
                center:['50%','90%']
              },
              itemStyle: {
                //通常情况下：
                normal: {
                  color: function (params) {
                    var colorList = ['#8438dd','#8438dd','#2ed8e9'];
                    return colorList[params.dataIndex];
                  }
                }
              },
              series: [{
                type: 'bar',
                data:   vm.tax.pieMonth,
                coordinateSystem: 'polar',
                name: 'B',
                stack: 'a'
              },],

            };
            taxCharts.setOption(taxOptions)
          }
        }).catch(error=>{
          console.log(error)
        });
      }
    },
  }
</script>

<style lang="less" scoped>
  @import "phonedataTarget.less";
</style>
