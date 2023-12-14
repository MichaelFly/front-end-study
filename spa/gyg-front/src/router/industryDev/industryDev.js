/*industryDev*/
import industryDev from '@/pages/industryDev/industryDev.vue'
import morePolicy from '@/pages/industryDev/morePolicy/morePolicy.vue'
import policyDetail from '@/pages/industryDev/policyDetail/policyDetail.vue'
import moreTech from '@/pages/industryDev/moreTech/moreTech.vue'
import techDetail from '@/pages/industryDev/techDetail/techDetail.vue'
import moreGuide from '@/pages/industryDev/moreGuide/moreGuide.vue'
import guideDetail from '@/pages/industryDev/guideDetail/guideDetail.vue'
import moreTip from '@/pages/industryDev/moreTip/moreTip.vue'
import tipDetail from '@/pages/industryDev/tipDetail/tipDetail.vue'
import morePdpolicy from '@/pages/industryDev/morePdpolicy/morePdpolicy.vue'
import pdpolicyDetail from '@/pages/industryDev/pdpolicyDetail/pdpolicyDetail.vue'


export default [
  {
    path: '/industryDev',
    name: 'industryDev',
    component: industryDev
  },
  {
    path: '/industryDev/morePolicy',
    name: 'morePolicy',
    component: morePolicy,
  },
  {
    path: '/industryDev/morePolicy/detail',
    name: 'policyDetail',
    component: policyDetail,
  },
  {
    path: '/industryDev/moreTech',
    name: 'moreTech',
    component: moreTech,
  },
  {
    path: '/industryDev/moreTech/detail',
    name: 'techDetail',
    component: techDetail,
  },
  {
    path: '/industryDev/moreGuide',
    name: 'moreGuide',
    component: moreGuide,
  },
  {
    path: '/industryDev/moreGuide/detail',
    name: 'guideDetail',
    component: guideDetail,
  },
  {
    path: '/industryDev/moreTip',
    name: 'moreTip',
    component: moreTip,
  },
  {
    path: '/industryDev/moreTip/detail',
    name: 'tipDetail',
    component: tipDetail,
  },
  {
    path: '/industryDev/morePdpolicy',
    name: 'morePdpolicy',
    component: morePdpolicy,
  },
  {
    path: '/industryDev/morePdpolicy/detail',
    name: 'pdpolicyDetail',
    component: pdpolicyDetail,
  },
]
