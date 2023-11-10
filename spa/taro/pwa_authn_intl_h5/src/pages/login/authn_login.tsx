import { Button } from '@nutui/nutui-react';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useRequest } from 'ahooks';
import IconFont from '../../components/iconfont';
import { tipAck } from '../../pkg/tip';
import { authnLogin } from './data';
import { createCredentials } from './index';

interface AuthnProps {
  identity: string;
  switchPwd: () => void;
}
function AuthnLogin(props: AuthnProps) {
  const { identity, switchPwd } = props;
  const login = async () => {
    const publicKeyCredential = await createCredentials(identity);
    if (!publicKeyCredential) return;
    const data = publicKeyCredential.toJSON();
    const ack = await authnLogin(identity, data);
    if (tipAck(ack)) {
      Taro.redirectTo({ url: '/pages/index/index' });
    }
  };

  const { loading, run: runLogin } = useRequest(login, { manual: true });

  return (
    <View className={'-mt-8 relative'}>
      <View>👏{identity}</View>
      <View className={'text-center mt-5'}>
        <Button
          type={'primary'}
          onClick={runLogin}
          loading={loading}
          style={{ height: 'fit-content' }}
        >
          <View className={'flex justify-between py-5'}>
            <IconFont name="zhiwenshibiezhiwen" size={25} color={'#fff'} />
            <IconFont
              name="faceid_line"
              size={25}
              color={'#fff'}
              style={{ marginLeft: 5 }}
            />
          </View>
        </Button>
      </View>
      <View className={'fixed top-2 right-2'}>
        <Button onClick={switchPwd}>切换密码登陆</Button>
      </View>
    </View>
  );
}

export default AuthnLogin;
