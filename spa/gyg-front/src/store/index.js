/**
 * 作者 ：fly
 *
 * 日期 ：2017/10/18
 *
 * 描述 ：全局状态树
 */
import Vue from 'vue'
import Vuex from 'vuex'
import config from '../config'


Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    fileServer: config.siteInfo.sites.file_server_url,
    uploadServer: config.siteInfo.sites.upload_server_url,
    imgServer: config.siteInfo.sites.img_server_url,
    loginSite: config.siteInfo.sites.login_site_host,
  },
  modules: {

  },
  mutations: {

  },
  actions: {

  }
});

export default store
