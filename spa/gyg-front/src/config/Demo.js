/**
  * 描述 ：业务配置文件 - 演示环境
 */
const hostUrl = 'http://cdyoue.com.cn:9298';

export default {
  env: 'demo',
  apis:{
    modules:{
      // 首页api
      index: {
        host: hostUrl,
        url: '/parkHomePage'
      },
      // 企业列表api
      companyList: {
        host: hostUrl,
        url: '/enterprise/front'
      },
      // 验证码api
      letterBox: {
        host: hostUrl,
        url: '/letterBox'
      },
      // 测试api
      tableTest: {
        host: hostUrl,
        url: ''
      },
      // 产业发展api
      industryDev: {
        host: hostUrl+'/industryDevelopment',
        url: ''
      },
      // 园区党建api
      parkPar: {
        host: hostUrl+'/partyBuild',
        url: ''
      },
      // 企业资源
      companyRes: {
        host: hostUrl+'/orgResources',
        url: ''
      },
      // 违法违纪
      illegalAct: {
        host: hostUrl+'/disciplineMag',
        url: ''
      },
      // 了解园区
      knowPark: {
        host: hostUrl+'/parkHomePage',
        url: ''
      },
      // 全文搜索
      searchList: {
        host: hostUrl+'/contentSearch',
        url: ''
      },
      //dataTarget
      dataTarget: {
        host: hostUrl+'/parkHomePage',
        url: ''
      },
      // 无地址前缀的detail
      searchDetail: {
        host: hostUrl+'/',
        url: ''
      },
    },
    defaultHost: 'http://www.youedata.com',
    defaultUrl: ''
  },
  siteInfo:{
    // 多站点配置
    sites: {
      login_site_host: 'http://cdyoue.com.cn:9298', // 登录站地址
      main_site_host: 'http://www.mainsite.com/',  // 本站地址
      file_server_url: "http://192.168.0.148:18002",   // 文件服务器地址
      upload_server_url: hostUrl,
      img_server_url: "http://cdyoue.com.cn:9080/",//图片服务器
    }
  }
}
