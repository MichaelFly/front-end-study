import { Button, Form, Input } from '@nutui/nutui-react';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useRequest } from 'ahooks';
import { tipAck } from '../../pkg/tip';
import { login } from './data';

const ngs = {
  ng_identity_pwd: '账户或密码不存在!',
};

function PwdLogin() {
  const onLogin = async (data) => {
    const ack = await login(data);
    if (tipAck(ack, ngs)) {
      Taro.redirectTo({ url: '/pages/index/index' });
    }
  };

  const { runAsync: runLogin, loading: loginLoading } = useRequest(onLogin, {
    manual: true,
  });

  const toRegister = () => {
    Taro.navigateTo({ url: '/pages/register/index' });
  };
  return (
    <View>
      <Form
        labelPosition="right"
        title={'登陆'}
        onFinish={(values) => runLogin(values)}
        // initialValues={{
        //     identity:"408648486@qq.com",
        //     password:"zxcv@1234"
        // }}
        footer={
          <View
            className={'flex  w-full justify-around px-10'}
            style={{ margin: 'auto' }}
          >
            <View>
              <Button
                onClick={toRegister}
                className={'w-18'}
                style={{ margin: 'auto' }}
              >
                注册
              </Button>
            </View>
            <View>
              <Button
                type="primary"
                nativeType={'submit'}
                className={'w-18'}
                loading={loginLoading}
              >
                提交
              </Button>
            </View>
          </View>
        }
      >
        <Form.Item
          required
          label="邮箱"
          name="identity"
          rules={[
            { required: true, message: '请输入邮箱' },
            {
              pattern:
                '^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$',
              message: '邮箱不合法',
            },
          ]}
        >
          <Input
            clearable
            className="nut-input-text"
            placeholder="请输入邮箱"
            type="text"
          />
        </Form.Item>
        <Form.Item
          required
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input
            className="nut-input-text"
            placeholder="请输入密码"
            type="password"
            clearable
          />
        </Form.Item>
      </Form>
    </View>
  );
}

export default PwdLogin;
