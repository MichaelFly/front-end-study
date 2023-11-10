import {
  get,
  parseRequestOptionsFromJSON,
} from '@github/webauthn-json/browser-ponyfill';
import { Dialog } from '@nutui/nutui-react';
import { View } from '@tarojs/components';
import { useRequest } from 'ahooks';
import { useEffect } from 'react';
import { useIntl } from 'react-intl';
import WithLoading from '../../components/WithLoading';
import IconFont from '../../components/iconfont';
import { useAddToHomeScreenPrompt } from '../../components/pwaInstall';
import { getAuthnIdentity } from '../../pkg/store';
import AuthnLogin from './authn_login';
import { getAuthOption } from './data';
import './index.scss';
import PwdLogin from './pwd_login';
import { SupportAuthn } from './support';

export async function createCredentials(identity: string) {
  const data = await getAuthOption(identity);
  console.log('createCredentials data', data);
  const requestOptions = parseRequestOptionsFromJSON(data);
  return get(requestOptions);
}

function Index() {
  const { data: identity, loading, mutate } = useRequest(getAuthnIdentity);
  const { formatMessage } = useIntl();
  const [prompt, promptToInstall] = useAddToHomeScreenPrompt();

  useEffect(() => {
    if (!prompt) return;
    Dialog.confirm({
      content: formatMessage({
        defaultMessage: 'PWA 添加到主屏幕',
        description: '提示',
      }),
      confirmText: formatMessage({
        defaultMessage: '添加',
        description: '按钮',
      }),
      cancelText: formatMessage({
        defaultMessage: '取消',
        description: '按钮',
      }),
      onConfirm: promptToInstall,
    });
  }, [prompt]);

  const switchPwd = () => mutate(undefined);

  return (
    <View className="nutui-react-demo">
      <View className={'mb-10 text-2xl'}>
        <IconFont name={'login_data'} size={70} color={'#303841'} />
      </View>
      <SupportAuthn />
      <WithLoading loading={loading} slot={identity}>
        {identity ? (
          <AuthnLogin identity={identity as string} switchPwd={switchPwd} />
        ) : (
          <PwdLogin />
        )}
      </WithLoading>
    </View>
  );
}

export default Index;
