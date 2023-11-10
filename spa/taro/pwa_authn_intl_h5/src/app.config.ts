import { useGlobalIconFont } from './components/iconfont/helper';

export default defineAppConfig({
  pages: ['pages/login/index', 'pages/register/index', 'pages/index/index'],
  usingComponents: Object.assign(useGlobalIconFont()),
  // animation: false,
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
});
