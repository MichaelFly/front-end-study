/**
  * 描述 ：业务配置文件索引
 */
import developmentConfig from './Development'
import productionConfig from './Production'
import testConfig from './Test'
import demoConfig from './Demo'
export default {
  development: developmentConfig,
  test: testConfig,
  demo: demoConfig,
  production: productionConfig
}[process.env.NODE_ENV]
