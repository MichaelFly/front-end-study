/*parkPar*/
import phoneCompanyRes from '@/pages/phoneCompanyRes/phoneCompanyRes.vue' //数据指标
import phoneProductDetail from '@/pages/phoneCompanyRes/details/phoneProductDetail.vue' //数据指标
import phoneFinancialDetail from '@/pages/phoneCompanyRes/details/phoneFinancialDetail.vue' //数据指标
import phoneFactoryDetail from '@/pages/phoneCompanyRes/details/phoneFactoryDetail.vue' //数据指标
import phoneResourceDetail from '@/pages/phoneCompanyRes/details/phoneResourceDetail.vue' //
import phoneJobDetail from '@/pages/phoneCompanyRes/details/phoneJobDetail.vue' //就业招工三级
import phoneProductMore from '@/pages/phoneCompanyRes/phoneProductMore/phoneProductMore.vue' //企业产品二级
import phoneCompamyDymore from '@/pages/phoneCompanyRes/phoneProductMore/phoneCompamyDymore.vue' //企业动态二级
import phoneFinancialMore from '@/pages/phoneCompanyRes/phoneProductMore/phoneFinancialMore.vue' //企业动态二级
import phoneJobMore from '@/pages/phoneCompanyRes/phoneJobMore/phoneJobMore.vue' //企业动态二级
import phoneOrgMore from '@/pages/phoneCompanyRes/phoneJobMore/phoneOrgMore.vue' //企业动态二级
import phoneFactoryMore from '@/pages/phoneCompanyRes/phoneProductMore/phoneFactoryMore.vue' //企业动态二级


export default [
  {
    path: '/phoneCompanyRes',
    name: 'phoneCompanyRes',
    component: phoneCompanyRes
  },{
    path: '/phoneCompanyRes/phoneProductDetail',
    name: 'phoneProductDetail',
    component: phoneProductDetail
  },{
    path: '/phoneCompanyRes/phoneFinancialDetail',
    name: 'phoneFinancialDetail',
    component: phoneFinancialDetail
  },{
    path: '/phoneCompanyRes/phoneFactoryDetail',
    name: 'phoneFactoryDetail',
    component: phoneFactoryDetail
  },{
    path: '/phoneCompanyRes/phoneResourceDetail',
    name: 'phoneResourceDetail',
    component: phoneResourceDetail
  },{
    path: '/phoneCompanyRes/phoneJobDetail',
    name: 'phoneJobDetail',
    component: phoneJobDetail
  },{
    path: '/phoneCompanyRes/phoneProductMore',
    name: 'phoneProductMore',
    component: phoneProductMore
  },{
    path: '/phoneCompanyRes/phoneCompamyDymore',
    name: 'phoneCompamyDymore',
    component: phoneCompamyDymore
  },{
    path: '/phoneCompanyRes/phoneFinancialMore',
    name: 'phoneFinancialMore',
    component: phoneFinancialMore
  },{
    path: '/phoneCompanyRes/phoneJobMore',
    name: 'phoneJobMore',
    component: phoneJobMore
  },{
    path: '/phoneCompanyRes/phoneOrgMore',
    name: 'phoneOrgMore',
    component: phoneOrgMore
  },{
    path: '/phoneCompanyRes/phoneFactoryMore',
    name: 'phoneFactoryMore',
    component: phoneFactoryMore
  }
]
