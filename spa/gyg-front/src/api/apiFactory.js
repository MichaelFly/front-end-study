/**
  * 描述 ：api接口工厂类
 */
import config from '../config'
import $ajax from '../plugins/axios'
import headerConfig from './headerConfig'

export default (module) => {

  let apiObject = {}

  module.apis.forEach((item) => {
    apiObject[item.name] = (params) => {
      let locationId = "";
      let uriJoin='';
      //只拼接参数
      if(params && params.URI) {
        locationId = `/${params.URI}`
        delete params.URI
      }
      //key和参数同时拼接
      if(params && params.uriJoin){
        uriJoin=encodeURIComponent(params.uriJoin)//url转义
        uriJoin = `?userId=${uriJoin}`
        delete params.uriJoin
      }
      // 所有接口必传参数
      return $ajax({
        method: item.method,
        url: `${config.apis.modules[module.moduleName].host}${config.apis.modules[module.moduleName].url || config.apis.defaultUrl}${item.url}${locationId}${uriJoin}`,
        data: params,
        headers: item.headers || headerConfig()
      })
    }
  })

  return apiObject
}
