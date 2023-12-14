/**
 * 描述 ：数据指标
 */
import apiFactory from '../apiFactory'

const module = {
  moduleName: "dataTarget",
  apis: [
    {
      method: "get", // 请求方式
      name: "investChartData", // 接口名称
      url: "/dataIndex/investChartData" // 接口全路径
    },{
      method: "get", // 请求方式
      name: "businessChartData", // 接口名称
      url: "/dataIndex/businessChartData" // 接口全路径
    },{
      method: "get", // 请求方式
      name: "businessData", // 接口名称
      url: "/dataIndex/businessData" // 接口全路径
    },{
      method: "get", // 请求方式
      name: "investData", // 接口名称
      url: "/dataIndex/investData" // 接口全路径
    },{//税务数据
      method: "get", // 请求方式
      name: "taxData", // 接口名称
      url: "/dataIndex/taxData" // 接口全路径
    },{//投资产出值
      method: "get", // 请求方式
      name: "outputData", // 接口名称
      url: "/dataIndex/outputData" // 接口全路径
    }
  ]
}

export default apiFactory(module)
