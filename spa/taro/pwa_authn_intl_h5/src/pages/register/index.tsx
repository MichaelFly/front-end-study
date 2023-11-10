import { Button, Form, Input } from '@nutui/nutui-react';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useRequest } from 'ahooks';
import { createAccount } from './data';
import './index.scss';

function Index() {
  const { runAsync, loading } = useRequest(createAccount, { manual: true });
  const onRegister = async (data) => {
    await runAsync(data);
    await Taro.showToast({
      title: '操作成功',
      icon: 'success',
    });
    Taro.navigateTo({ url: '/pages/index/index' });
  };
  return (
    <View className="nutui-react-demo">
      <View className="index">注册</View>
      <Form
        labelPosition="right"
        title={'注册'}
        onFinish={(values) => onRegister(values)}
        footer={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Button
              type={'primary'}
              nativeType={'submit'}
              loading={loading}
              style={{ width: 100 }}
            >
              注册
            </Button>
          </div>
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
            className="nut-input-text"
            placeholder="请输入邮箱"
            type="text"
            clearable
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

export default Index;
