/**
 * 作者 ：fly
 *
 * 日期 ：2017/11/13
 *
 * 描述 ：路由配置
 */
import Vue from 'vue'
import Router from 'vue-router'
import index from './index/index'  //首页
import companyRes from './companyRes/companyRes'  //企业资源
import industryDev from './industryDev/industryDev'  //产业发展
import parkPar from './parkPar/parkPar'  //园区党建
import illegalAct from './illegalAct/illegalAct'  //违法违纪
import knowPark from './knowPark/knowPark'  //违法违纪
import searchList from './searchList/searchList'  //全文搜索
import dataTarget from './dataTarget/dataTarget'  //数据指标
/*移动端*/
import phoneIndex from './phoneIndex/phoneIndex'  //首页
import phoneIndustry from './phoneIndustry/phoneIndustry'  //产业发展
import phoneCompanyRes from './phoneCompanyRes/phoneCompanyRes'  //产业发展
import phonedataTarget from './phonedataTarget/phonedataTarget'  //数据指标
import phoneIllegalAct from './phoneIllegalAct/phoneIllegalAct'  //数据指标
import phoneMail from './phoneMail/phoneMail'  //数据指标
Vue.use(Router);
const Layout = r => require.ensure([], () => r(require('@/pages/layout.vue')), 'Layout');

const router = new Router({
  routes: [
    {path: '/', redirect: '/index'},
    {
      path: '/layout',
      name: 'layout',
      component: Layout,
      children: [
        ...index,
        ...phoneIndex,
        ...companyRes,
        ...industryDev,
        ...phoneIndustry,
        ...parkPar,
        ...illegalAct,
        ...knowPark,
        ...searchList,
        ...dataTarget,
        ...phonedataTarget,
        ...phoneCompanyRes,
        ...phoneIllegalAct,
        ...phoneMail,
      ]
    }
  ]
})

router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});
//
// router.beforeEach((to, from, next) => {
//     debugger
// })

export default router
