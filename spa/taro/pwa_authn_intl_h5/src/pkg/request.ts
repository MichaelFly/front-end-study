import Taro from '@tarojs/taro';

type Method = 'GET' | 'POST';

const ngs = {
  500: '服务器错误!',
  403: '未登陆!',
  404: '服务不存在!',
  504: '系统错误!',
};
function http(method: Method, url: string, data?) {
  return new Promise((resolve) => {
    Taro.request({
      method,
      url: `/tws${url}`,
      enableCookie: true,
      timeout: 100000,
      credentials: 'include',
      data,
      success: (rlt) => {
        const { statusCode } = rlt;
        let { data } = rlt;

        if (statusCode !== 200) {
          data = { ok: false, result: statusCode };
        }
        const ok = data?.ok;
        if (ok === false) {
          const code = data.result;
          const msg = ngs[code];
          if (msg) {
            Taro.showToast({ title: msg, icon: 'error' });
            data.result = undefined;
          }
          if (code === '403') {
            Taro.redirectTo({ url: 'pages/login/index' });
          }
        }
        resolve(data);
      },
      fail: (...fail) => {
        console.error('request fail', fail);
      },
    });
  });
}
export function get(url: string, data?: any): Promise<any> {
  return http('GET', url, data);
}

export function post(url: string, data?: any): Promise<any> {
  return http('POST', url, data);
}
