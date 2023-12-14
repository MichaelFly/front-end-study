/**
 * 描述 ：违法违纪
 */
import apiFactory from '../apiFactory'

const module = {
  moduleName: "illegalAct",
  apis: [
    { // 违纪事项列表
      method: "get", // 请求方式
      name: "disciplineItemsList", // 接口名称
      url: "/disciplineItems/list" // 接口全路径
    },{ // 违法事件列表
      method: "get", // 请求方式
      name: "lawIncidentList", // 接口名称
      url: "/lawIncident/list" // 接口全路径
    },{ // 安全生产列表
      method: "get", // 请求方式
      name: "safeManufactureList", // 接口名称
      url: "/safeManufacture/list" // 接口全路径
    },{ // 环保通报列表
      method: "get", // 请求方式
      name: "ecoReportList", // 接口名称
      url: "/ecoReport/list" // 接口全路径
    },{ // 详情页面
      method: "get", // 请求方式
      name: "detail", // 接口名称
      url: "/detail" // 接口全路径
    },
  ]
}

export default apiFactory(module)
