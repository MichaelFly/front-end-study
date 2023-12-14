/*parkPar*/
import searchList from '@/pages/searchList/searchList.vue' //全文搜索
import detailOrgcon from '@/pages/searchList/searchDetail/detailOrgcon.vue' //全文搜索详情页面
import jobDetail from '@/pages/searchList/searchDetail/jobDetail.vue' //全文搜索详情页面
import detailAdminCon from '@/pages/searchList/searchDetail/detailAdminCon.vue' //全文搜索详情页面

export default [
  {
    path: '/searchList',
    name: 'searchList',
    component: searchList
  },{
    path: '/detailOrgcon',
    name: 'detailOrgcon',
    component: detailOrgcon
  },{
    path: '/detailAdminCon',
    name: 'detailAdminCon',
    component: detailAdminCon
  },{
    path: '/jobDetail',
    name: 'jobDetail',
    component: jobDetail
  },
]
