/**
 * 描述 ：产业发展api
 */
import apiFactory from '../apiFactory'

const module = {
  moduleName: "industryDev",
  apis: [
    { // 发展政策
    method: "get", // 请求方式
    name: "industryPolicyList", // 接口名称
    url: "/industryPolicy/list" // 接口全路径
    },
    { // 科技创新列表
      method: "get", // 请求方式
      name: "techInnovationList", // 接口名称
      url: "/techInnovation/list" // 接口全路径
    },
    { // 郫都政策列表
      method: "get", // 请求方式
      name: "piduPolicyList", // 接口名称
      url: "/piduPolicy/list" // 接口全路径
    },
    { // 创新引导列表
      method: "get", // 请求方式
      name: "innovationGuideList", // 接口名称
      url: "/innovationGuide/list" // 接口全路径
    },
    { // 申报提示列表
      method: "get", // 请求方式
      name: "policyApplicationList", // 接口名称
      url: "/policyApplication/list" // 接口全路径
    },
    { // 获取科技创新图片
      method: "get", // 请求方式
      name: "techInnovationTopList", // 接口名称
      url: "/techInnovation/top/list" // 接口全路径
    },
    { // 获取详情
      method: "get", // 请求方式
      name: "listDetail", // 接口名称
      url: "/detail" // 接口全路径
    },
    { // 获取科技详情
      method: "get", // 请求方式
      name: "techDetail", // 接口名称
      url: "/techInnovation/detail" // 接口全路径
    },
  ]
}

export default apiFactory(module)
