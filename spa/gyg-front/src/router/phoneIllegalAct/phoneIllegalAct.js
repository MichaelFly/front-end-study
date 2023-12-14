/*index*/
import phoneIllegalAct from '@/pages/phoneIllegalAct/phoneIllegalAct.vue' //移动端首页
import phoneIllegalDetail from '@/pages/phoneIllegalAct/phoneIllegalDetail/phoneLawDetail.vue' //移动端首页
import phonewj from '@/pages/phoneIllegalAct/phoneIlleMore/phonewj.vue' //移动端首页
import phoneLaw from '@/pages/phoneIllegalAct/phoneIlleMore/phoneLaw.vue' //移动端首页
import phoneSafe from '@/pages/phoneIllegalAct/phoneIlleMore/phoneSafe.vue' //移动端首页
import phoneEco from '@/pages/phoneIllegalAct/phoneIlleMore/phoneEco.vue' //移动端首页


export default [
  {
    path: '/phoneIllegalAct',
    name: 'phoneIllegalAct',
    component: phoneIllegalAct
  },{
    path: '/phoneIllegalAct/phoneIllegalDetail',
    name: 'phoneIllegalDetail',
    component: phoneIllegalDetail
  },{
    path: '/phoneIllegalAct/phonewj',
    name: 'phonewj',
    component: phonewj
  },{
    path: '/phoneIllegalAct/phoneLaw',
    name: 'phoneLaw',
    component: phoneLaw
  },{
    path: '/phoneIllegalAct/phoneSafe',
    name: 'phoneSafe',
    component: phoneSafe
  },{
    path: '/phoneIllegalAct/phoneEco',
    name: 'phoneEco',
    component: phoneEco
  }
]
