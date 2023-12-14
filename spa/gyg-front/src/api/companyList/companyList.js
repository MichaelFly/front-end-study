/**
 * 描述 ：企业列表
 */
import apiFactory from '../apiFactory'

const module = {
  moduleName: "companyList",
  apis: [
    { // 列表
      method: "get", // 请求方式
      name: "companyList", // 接口名称
      url: "/list" // 接口全路径
    },
    { // 详情
      method: "get", // 请求方式
      name: "companyDetail", // 接口名称
      url: "/detail" // 接口全路径
    },
  ]
}

export default apiFactory(module)
