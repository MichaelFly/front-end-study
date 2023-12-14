/**
 * 描述 ：产业发展api
 */
import apiFactory from '../apiFactory'

const module = {
  moduleName: "companyRes",
  apis: [
    { // 企业动态
      method: "get", // 请求方式
      name: "orgTrendsList", // 接口名称
      url: "/orgTrends/list" // 接口全路径
    },
    { // 企业产品
      method: "get", // 请求方式
      name: "orgProductList", // 接口名称
      url: "/orgProduct/list" // 接口全路径
    },
    { // 金融产品
      method: "get", // 请求方式
      name: "financialProductsList", // 接口名称
      url: "/financialProducts/list" // 接口全路径
    },
    { // 金融需求
      method: "get", // 请求方式
      name: "financialDemandsList", // 接口名称
      url: "/financialDemands/list" // 接口全路径
    },
    { // 厂房租售
      method: "get", // 请求方式
      name: "orgRentalList", // 接口名称
      url: "/orgRental/list" // 接口全路径
    },
    { // 就业招工
      method: "get", // 请求方式
      name: "employmentServicesList", // 接口名称
      url: "/employmentServices/list" // 接口全路径
    },{ // 就业招工详情
      method: "get", // 请求方式
      name: "employmentServicesDetail", // 接口名称
      url: "/employmentServices/detail" // 接口全路径
    },{ // 就业招工详情
      method: "get", // 请求方式
      name: "employmentServicesDetailId", // 接口名称
      url: "/employmentServicesDetail/" // 接口全路径
    },{ // 就业招工详情
      method: "get", // 请求方式
      name: "employmentServicesByOrg", // 接口名称
      url: "/employmentServicesByOrg/" // 接口全路径
    },{ // 企业动态详情
      method: "get", // 请求方式
      name: "detail", // 接口名称
      url: "/detail" // 接口全路径
    },
    { // 金融服务详情
      method: "get", // 请求方式
      name: "financialServicesDetail", // 接口名称
      url: "/financialServices/detail" // 接口全路径
    },{ // 厂房租售详情
      method: "get", // 请求方式
      name: "orgResourcesDetail", // 接口名称
      url: "/detail" // 接口全路径
    },,{ // 就业招工合并查看
      method: "get", // 请求方式
      name: "employmentServicesByOrgList", // 接口名称
      url: "/employmentServicesByOrg/list" // 接口全路径
    },

  ]
}

export default apiFactory(module)
