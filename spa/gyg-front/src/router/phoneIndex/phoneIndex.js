/*index*/
import phoneIndex from '@/pages/phoneIndex/phoneIndex.vue' //移动端首页
import indexCompany from '@/pages/phoneIndex/indexCompany/indexCompany.vue' //首页·园区动态
import indexCompanyDetail from '@/pages/phoneIndex/indexCompany/indexCompanyDetail.vue' //首页·园区企业详情
import indexDynamic from '@/pages/phoneIndex/indexDynamic/indexDynamic.vue' //首页·动态
import phoneKnowpark from '@/pages/phoneIndex/phoneKnowpark/phoneKnowpark.vue' //首页·了解园区
import phoneAffairDetails from '@/pages/phoneIndex/phoneAffairDetails/phoneAffairDetails.vue' //首页·了解园区
import phoneIndexDetail from '@/pages/phoneIndex/phoneIndexDetail/phoneIndexDetail.vue' //首页·了解园区

export default [
  {
    path: '/phoneIndex',
    name: 'phoneIndex',
    component: phoneIndex
  },{
    path: '/phoneIndex/indexCompany',
    name: 'indexCompany',
    component: indexCompany
  },{
    path: '/phoneIndex/indexCompanyDetail',
    name: 'indexCompanyDetail',
    component: indexCompanyDetail
  },{
    path: '/phoneIndex/indexDynamic',
    name: 'indexDynamic',
    component: indexDynamic
  },{
    path: '/phoneIndex/phoneKnowpark',
    name: 'phoneKnowpark',
    component: phoneKnowpark
  },{
    path: '/phoneIndex/phoneAffairDetails',
    name: 'phoneAffairDetails',
    component: phoneAffairDetails
  },{
    path: '/phoneIndex/indexDynamic/phoneIndexDetail',
    name: 'phoneIndexDetail',
    component: phoneIndexDetail
  },
]
