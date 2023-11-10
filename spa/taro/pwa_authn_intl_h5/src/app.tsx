import { useDidHide, useDidShow } from '@tarojs/taro';
// 全局样式
import '@nutui/nutui-react/dist/style.css';
import './app.scss';
import WithLocaleProvider from './components/locale.provider';

if (process.env.TARO_ENV === 'h5') {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('./service-worker.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
}
function App(props) {
  // 对应 onShow
  useDidShow(() => {});

  // 对应 onHide
  useDidHide(() => {});

  return <WithLocaleProvider>{props.children}</WithLocaleProvider>;
}

export default App;
