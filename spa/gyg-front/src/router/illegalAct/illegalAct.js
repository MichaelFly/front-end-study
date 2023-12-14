/*illegalAct*/
import illegalAct from '@/pages/illegalAct/illegalAct.vue'; //api列表
import illegalMore from '@/pages/illegalAct/illegalMore/illegalMore'; //api列表
import ecoreportDetail from '@/pages/illegalAct/illegalDetail/ecoreportDetail'; //api列表
import lawIncidentDetail from '@/pages/illegalAct/illegalDetail/lawIncidentDetail'; //api列表
import safeManufacDetail from '@/pages/illegalAct/illegalDetail/safeManufacDetail'; //api列表
import illegalDetail from '@/pages/illegalAct/illegalDetail/illegalDetail'; //api列表
import discipline from '@/pages/illegalAct/illegalMore/discipline'; //api列表
import ecoreport from '@/pages/illegalAct/illegalMore/ecoreport'; //api列表
import lawIncident from '@/pages/illegalAct/illegalMore/lawIncident'; //api列表
import safeManufac from '@/pages/illegalAct/illegalMore/safeManufac'; //api列表

export default [
  {
    path: '/illegalAct',
    name: 'illegalAct',
    component: illegalAct,
  },{
    path: '/illegalAct/illegalMore',
    name: 'illegalMore',
    component: illegalMore,
  },{
    path: '/illegalAct/ecoreportDetail',
    name: 'ecoreportDetail',
    component: ecoreportDetail,
  },{
    path: '/illegalAct/lawIncidentDetail',
    name: 'lawIncidentDetail',
    component: lawIncidentDetail,
  },{
    path: '/illegalAct/safeManufacDetail',
    name: 'safeManufacDetail',
    component: safeManufacDetail,
  },{
    path: '/illegalAct/illegalDetail',
    name: 'illegalDetail',
    component: illegalDetail,
  },{
    path: '/illegalAct/discipline',
    name: 'discipline',
    component: discipline,
  },{
    path: '/illegalAct/ecoreport',
    name: 'ecoreport',
    component: ecoreport,
  },{
    path: '/illegalAct/lawIncident',
    name: 'lawIncident',
    component: lawIncident,
  },{
    path: '/illegalAct/safeManufac',
    name: 'safeManufac',
    component: safeManufac,
  }
]
