/**
 * 描述 ：业务配置文件 - 开发环境
 */
/*开发环境*/
// const hostUrl = 'http://10.0.33.194:8098';/*测试*/
const hostUrl = 'http://10.0.33.40:9268';/*开发*/
// const hostUrl = 'http://125.70.9.131:8084';/*开发*/
// const hostUrl = 'http://cdyoue.com.cn:9298';/*部署*/

export default {
  env: 'development',
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
      login_site_host: 'http://10.0.33.40:9268', // 登录站地址
      main_site_host: 'http://www.mainsite.com/',  // 本站地址
      file_server_url: "http://192.168.0.148:18002",   // 文件服务器地址
      upload_server_url: hostUrl,
      img_server_url: "http://172.16.0.38/",//图片服务器
    }
  }
}
