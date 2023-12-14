// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import commonFun from './assets/js/commonFun'
import moment from 'moment'
import './directives/index'
import './assets/utils/rem'
// import 'babel-polyfill'

Vue.use(ElementUI)
axios.defaults.withCredentials=true;
Vue.prototype.$axios=axios;
Vue.prototype.$commonFun = commonFun;
// Vue.prototype.imgFront = 'http://172.16.0.3:8081/';/*开发*/
// Vue.prototype.imgFront = 'http://10.0.33.194:8081/';/*测试*/
// Vue.prototype.imgFront = 'http://cdyoue.com.cn:9080/';/*部署*/


moment.locale('zh-cn');
Vue.prototype.$moment = moment

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
