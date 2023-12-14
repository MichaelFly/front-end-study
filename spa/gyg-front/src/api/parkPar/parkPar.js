/**
 * 描述 ：园区党建api
 */
import apiFactory from '../apiFactory'

const module = {
  moduleName: "parkPar",
  apis: [
    { // 园区党建情况
      method: "get", // 请求方式
      name: "partyConditionDetail", // 接口名称
      url: "/partyCondition/detail" // 接口全路径
    },
    { // 党建快讯
      method: "get", // 请求方式
      name: "partyNewsList", // 接口名称
      url: "/partyNews/list" // 接口全路径
    },
    { // 党建学习
      method: "get", // 请求方式
      name: "partyStudyList", // 接口名称
      url: "/partyStudy/list" // 接口全路径
    },
    { // 党建活动
      method: "get", // 请求方式
      name: "partyActivitiesList", // 接口名称
      url: "/partyActivities/list" // 接口全路径
    },
    { // 纪检规则
      method: "get", // 请求方式
      name: "disciplinaryRulesList", // 接口名称
      url: "/disciplinaryRules/list" // 接口全路径
    },
    { // 监督制度
      method: "get", // 请求方式
      name: "supervisionSystemList", // 接口名称
      url: "/supervisionSystem/list" // 接口全路径
    },
  ]
}

export default apiFactory(module)
