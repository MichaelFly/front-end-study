/**
 * 描述 ：表格测试api
 */
import apiFactory from '../apiFactory'

const module = {
  moduleName: "tableTest",
  apis: [{
    // proxy
    method: "get", // 请求方式
    name: "proxy", // 接口名称
    url: "/proxy" // 接口全路径
  }]
}

export default apiFactory(module)
