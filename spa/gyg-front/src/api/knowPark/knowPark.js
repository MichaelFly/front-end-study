/**
 * 描述 ：了解园区
 */
import apiFactory from '../apiFactory'

const module = {
  moduleName: "knowPark",
  apis: [
    { // 了解园区
      method: "get", // 请求方式
      name: "parkDevelopmentList", // 接口名称
      url: "/parkDevelopment/list" // 接口全路径
    },{ // 了解园区
      method: "get", // 请求方式
      name: "depMagList", // 接口名称
      url: "/depMag/list" // 接口全路径
    }
  ]
}

export default apiFactory(module)
