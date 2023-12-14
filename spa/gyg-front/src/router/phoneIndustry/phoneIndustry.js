/*phoneIndustry*/
import phoneIndustry from '@/pages/phoneIndustry/phoneIndustry.vue' //移动端产业发展
import industryPolicy from '@/pages/phoneIndustry/industryPolicy/industryPolicy.vue' //移动端政策列表
import phonePolicyDetail from '@/pages/phoneIndustry/details/phonePolicyDetail.vue' //移动端政策详情
import industryTech from '@/pages/phoneIndustry/industryTech/industryTech.vue' //科技创新列表
import phoneTechDetail from '@/pages/phoneIndustry/details/phoneTechDetail.vue' //科技创新详情
import industryTip from '@/pages/phoneIndustry/industryTip/industryTip.vue' //申报提示列表
import phoneTipDetail from '@/pages/phoneIndustry/details/phoneTipDetail.vue' //申报提示列表
import industryPidu from '@/pages/phoneIndustry/industryPidu/industryPidu.vue' //郫都政策列表
import phonePiduDetail from '@/pages/phoneIndustry/details/phonePiduDetail.vue' //郫都政策详情
import industryGuide from '@/pages/phoneIndustry/industryGuide/industryGuide.vue' //创新引导列表
import phoneGuideDetail from '@/pages/phoneIndustry/details/phoneGuideDetail.vue' //创新引导详情

export default [
  {
    path: '/phoneIndustry',
    name: 'phoneIndustry',
    component: phoneIndustry
  },
  {
    path: '/phoneIndustry/industryPolicy',
    name: 'industryPolicy',
    component: industryPolicy
  },
  {
    path: '/phoneIndustry/industryPolicy/detail',
    name: 'phonePolicyDetail',
    component: phonePolicyDetail
  },
  {
    path: '/phoneIndustry/industryTech',
    name: 'industryTech',
    component: industryTech
  },
  {
    path: '/phoneIndustry/industryTech/detail',
    name: 'phoneTechDetail',
    component: phoneTechDetail
  },
  {
    path: '/phoneIndustry/industryTip',
    name: 'industryTip',
    component: industryTip
  },
  {
    path: '/phoneIndustry/industryTip/detail',
    name: 'phoneTipDetail',
    component: phoneTipDetail
  },
  {
    path: '/phoneIndustry/industryPidu',
    name: 'industryPidu',
    component: industryPidu
  },
  {
    path: '/phoneIndustry/industryPidu/detail',
    name: 'phonePiduDetail',
    component: phonePiduDetail
  },
  {
    path: '/phoneIndustry/industryGuide',
    name: 'industryGuide',
    component: industryGuide
  },
  {
    path: '/phoneIndustry/industryGuide/detail',
    name: 'phoneGuideDetail',
    component: phoneGuideDetail
  },
]
