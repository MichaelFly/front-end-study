/*companyRes*/
import companyRes from '@/pages/companyRes/companyRes.vue'; //api列表
import employeeDetail from '@/pages/companyRes/employeeMore/employeeDetail'
import employeeMore from '@/pages/companyRes/employeeMore/employeeMore'
import companyDetail from '@/pages/companyRes/companyDetail/companyDetail'
import jobMore from '@/pages/companyRes/employeeMore/jobMore'
import employeView from '@/pages/companyRes/employeeMore/employeView'
import companyDyDetail from '@/pages/companyRes/companyDynMore/companyDyDetail'
import employeeAll from '@/pages/companyRes/employeeMore/employeeAll'
import companyDyMore from '@/pages/companyRes/companyDynMore/companyDyMore'
import productMore from '@/pages/companyRes/productDetail/productMore'
import factoryMore from '@/pages/companyRes/factoryDetail/factoryMore'
import factoryDetail from '@/pages/companyRes/factoryDetail/factoryDetail'
import financialMore from '@/pages/companyRes/fiancial/financialMore'
import financialReqDetail from '@/pages/companyRes/fiancial/financialReqDetail'
import finacialDetail from '@/pages/companyRes/fiancial/finacialDetail'
import details from '@/pages/companyRes/details/details'
import productDetails from '@/pages/companyRes/details/productDetails'
import companyDyDetails from '@/pages/companyRes/details/companyDyDetails'
import finacialDetails from '@/pages/companyRes/details/finacialDetails'
import factoryDetails from '@/pages/companyRes/details/factoryDetails'

export default [
  {
    path: '/companyRes',
    name: 'companyRes',
    component: companyRes,
  },
  {
    path: '/companyRes/employeeDetail',
    name: 'employeeDetail',
    component: employeeDetail,
  },{
    path: '/companyRes/employeeMore',
    name: 'employeeMore',
    component: employeeMore,
  },{
    path: '/companyRes/jobMore',
    name: 'jobMore',
    component: jobMore,
  },{
    path: '/companyRes/employeeAll',
    name: 'employeeAll',
    component: employeeAll,
  },{
    path: '/companyRes/companyDetail',
    name: 'companyDetail',
    component: companyDetail,
  },{
    path: '/companyRes/employeView',
    name: 'employeView',
    component: employeView,
  },{
    path: '/companyRes/companyDyDetail',
    name: 'companyDyDetail',
    component: companyDyDetail,
  },{
    path: '/companyRes/companyDyMore',
    name: 'companyDyMore',
    component: companyDyMore,
  },{
    path: '/companyRes/productMore',
    name: 'productMore',
    component: productMore,
  },{
    path: '/companyRes/factoryDetail',
    name: 'factoryDetail',
    component: factoryDetail,
  },{
    path: '/companyRes/factoryMore',
    name: 'factoryMore',
    component: factoryMore,
  },{
    path: '/companyRes/financialMore',
    name: 'financialMore',
    component: financialMore,
  },{
    path: '/companyRes/finacialDetail',
    name: 'finacialDetail',
    component: finacialDetail,
  },{
    path: '/companyRes/financialReqDetail',
    name: 'financialReqDetail',
    component: financialReqDetail,
  },{
    path: '/companyRes/details',
    name: 'details',
    component: details,
  },{
    path: '/companyRes/productDetails',
    name: 'productDetails',
    component: productDetails,
  },{
    path: '/companyRes/companyDyDetails',
    name: 'companyDyDetails',
    component: companyDyDetails,
  },{
    path: '/companyRes/finacialDetails',
    name: 'finacialDetails',
    component: finacialDetails,
  },{
    path: '/companyRes/factoryDetails',
    name: 'factoryDetails',
    component: factoryDetails,
  }

]
