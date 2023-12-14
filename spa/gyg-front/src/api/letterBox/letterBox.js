/**
 * 描述 ：验证码api
 */
import apiFactory from '../apiFactory'

const module = {
  moduleName: "letterBox",
  apis: [
    { // 获取验证码
      method: "get", // 请求方式
      name: "getVerifyCode", // 接口名称
      url: "/getVerifyCode" // 接口全路径
    },
    { // 发送验证码
      method: "get", // 请求方式
      name: "addMail", // 接口名称
      url: "/add" // 接口全路径
    }
  ]
}

export default apiFactory(module)
