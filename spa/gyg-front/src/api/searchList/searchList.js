/**
 * 描述 ：违法违纪
 */
import apiFactory from '../apiFactory'

const module = {
  moduleName: "searchList",
  apis: [
    { // 全文搜索
      method: "get", // 请求方式
      name: "contentSearchList", // 接口名称
      url: "/list" // 接口全路径
    },
  ]
}

export default apiFactory(module)
