/**
 * 描述 ：首页api
 */
import apiFactory from '../apiFactory'

const module = {
  moduleName: "index",
  apis: [
    { // 园区动态
    method: "get", // 请求方式
    name: "parkTrendsList", // 接口名称
    url: "/parkTrends/list" // 接口全路径
    },
    { // 园区动态详情
      method: "get", // 请求方式
      name: "parkTrendDetail", // 接口名称
      url: "/parkTrends/detail" // 接口全路径
    },
    { // 入驻流程
      method: "get", // 请求方式
      name: "affairServicesList", // 接口名称
      url: "/affairServices/list" // 接口全路径
    },
    { // 入驻流程详情
      method: "get", // 请求方式
      name: "affairServicesDetail", // 接口名称
      url: "/affairServices/detail" // 接口全路径
    },
    { // bannerData
      method: "get", // 请求方式
      name: "bannerDataList", // 接口名称
      url: "/bannerData" // 接口全路径
    },
    { // bannerpicturesList
      method: "get", // 请求方式
      name: "bannerList", // 接口名称
      url: "/bannerPictures/list" // 接口全路径
    }
  ]
}

export default apiFactory(module)
