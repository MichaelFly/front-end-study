/*index*/
import phoneMail from '@/pages/phoneMail/phoneMail.vue' //移动端首页
import phoneMailSuccess from '@/pages/phoneMail/phoneMailSuccess/phoneMailSuccess.vue' //移动端首页

export default [
  {
    path: '/phoneMail',
    name: 'phoneMail',
    component: phoneMail
  },{
    path: '/phoneMail/phoneMailSuccess',
    name: 'phoneMailSuccess',
    component: phoneMailSuccess
  }
]
