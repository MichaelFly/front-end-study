/*index*/
import index from '@/pages/index/index.vue' //首页
import moreParknews from '@/pages/index/moreParknews/moreParknews.vue' //园区动态
import parknewsDetail from '@/pages/index/parknewsDetail/parknewsDetail.vue' //园区动态
import directorMail from '@/pages/index/directorMail/directorMail.vue' //主任信箱
import affairServiceDetail from '@/pages/index/affairServiceDetail/affairServiceDetail.vue' //入住流程详情
import moreCompany from '@/pages/index/moreCompany/moreCompany.vue' //更多企业
import compayDetail from '@/pages/index/compayDetail/compayDetail.vue' //更多企业

export default [
  {
    path: '/index',
    name: 'index',
    component: index
  },
  {
    path: '/index/moreParknews',
    name: 'moreParknews',
    component: moreParknews
  },
  {
    path: '/index/moreParknews/detail',
    name: 'parknewsDetail',
    component: parknewsDetail
  },
  {
    path: '/index/directorMail',
    name: 'directorMail',
    component: directorMail
  },
  {
    path: '/index/affairServiceDetail',
    name: 'affairServiceDetail',
    component: affairServiceDetail
  },
  {
    path: '/index/moreCompany',
    name: 'moreCompany',
    component: moreCompany
  },
  {
    path: '/index/moreCompany/detail',
    name: 'compayDetail',
    component: compayDetail
  },
]
