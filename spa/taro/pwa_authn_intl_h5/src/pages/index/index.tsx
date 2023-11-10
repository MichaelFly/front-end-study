import {
  create,
  parseCreationOptionsFromJSON,
} from '@github/webauthn-json/browser-ponyfill';
import { Button } from '@nutui/nutui-react';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useRequest } from 'ahooks';
import WithLoading from '../../components/WithLoading';
import { cleaAuthn, getAuthnIdentity, setAuthnIdentity } from '../../pkg/store';
import { tipAck } from '../../pkg/tip';
import { getMe, getOption, logout, sign } from './data';

export async function createCredentials() {
  try {
    const data = await getOption();
    const options = parseCreationOptionsFromJSON(data);
    return create(options);
  } catch (e) {}
}

function Index() {
  const { data } = useRequest(getMe);
  const { identity } = data || {};
  const { runAsync: runAuthnSign } = useRequest(sign, {
    manual: true,
  });

  const {
    refresh: refreshAuthn,
    data: identityRecord,
    loading: authnIdentityLoading,
  } = useRequest(getAuthnIdentity);
  const onSign = async () => {
    const credential = await createCredentials();
    if (!credential) return;

    const data = credential.toJSON();
    const ack = await runAuthnSign(data);
    if (tipAck(ack, {}, '授权成功!')) {
      const { result } = ack;
      const { identity } = result;
      await setAuthnIdentity(identity);
      refreshAuthn();
    }
  };

  const { runAsync: runSign, loading: siginLoading } = useRequest(onSign, {
    manual: true,
  });

  const onLogout = async () => {
    const ack = await logout();
    if (tipAck(ack)) {
      Taro.redirectTo({ url: 'pages/login/index' });
    }
  };

  const onClean = async () => {
    await cleaAuthn();
    Taro.reLaunch({ url: '/pages/index/index' });
  };

  return (
    <View className={'relative'}>
      <WithLoading loading={authnIdentityLoading} slot={identityRecord}>
        <View className={'h-screen w-screen flex '}>
          <View style={{ margin: 'auto' }}>
            <View className={''}>欢迎👏</View>
            <View className={'my-1'}>{identity}</View>
            <View className={'w-32'}>
              {identityRecord === identity ? (
                <Button type={'primary'} onClick={onClean}>
                  取消登陆授权
                </Button>
              ) : (
                <Button
                  type={'primary'}
                  onClick={runSign}
                  className={'w-36'}
                  loading={siginLoading}
                >
                  授权生物信息登陆
                </Button>
              )}
            </View>
          </View>
        </View>
        <View className={'absolute right-2 top-2'}>
          <Button type={'primary'} onClick={onLogout}>
            退出
          </Button>
        </View>
      </WithLoading>
    </View>
  );
}

export default Index;
