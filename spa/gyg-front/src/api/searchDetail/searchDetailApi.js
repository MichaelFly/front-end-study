/**
 * 描述 ：违法违纪
 */
import apiFactory from '../apiFactory'

const module = {
  moduleName: "searchDetail",
  apis: [
    { //  ADMINCON
      method: "get", // 请求方式
      name: "adminContentDetail", // 接口名称
      url: "adminContent/detail/" // 接口全路径
    },
    { //  ORGCON
      method: "get", // 请求方式
      name: "orgContentDetail", // 接口名称
      url: "orgContent/detail" // 接口全路径
    },
    {//主任信箱数据统计
      method:"get",
      name:"statistics",
      url:"/letter/statistics"
    }
  ]
}

export default apiFactory(module)
