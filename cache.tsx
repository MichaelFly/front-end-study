import { Button, Form, Input } from '@nutui/nutui-react';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useRequest } from 'ahooks';
import { createAccount } from './data';
import './index.scss';
import Title from '../../components/title';
import { tipAck } from '@/pkg/tip';
import { FormattedMessage, useIntl } from 'react-intl';

function Index() {
    const { formatMessage } = useIntl();
    const { runAsync, loading } = useRequest(createAccount, { manual: true });
    const onRegister = async (data) => {
        const ack: any = await runAsync(data);
        if (tipAck(ack)) {
            await Taro.navigateTo({ url: '/' });
        }
    };

    const switchLogin = async () => {
        await Taro.navigateTo({ url: '/' });
    };
    return (
        <View className="nutui-react-demo">
            <View className="content">
                <Title />
                <View className="form-wap">
                    <Form
                        labelPosition="right"
                        onFinish={(values) => onRegister(values)}
                        footer={
                            <Button
                                type={'primary'}
                                nativeType={'submit'}
                                loading={loading}
                                className="w-full login-btn"
                            >
                                <FormattedMessage defaultMessage="注册" description="등록" />
                            </Button>
                        }
                    >
                        <View className="form-label">
                            <FormattedMessage defaultMessage="身份（ID）" description="아이디(ID)" />
                        </View>
                        <Form.Item
                            required
                            name="identity"
                            rules={[
                                { required: true, message: formatMessage({ defaultMessage: '请输入邮箱', description: '이메일 주소를 입력하세요' }) },
                                {
                                    pattern:
                                        '^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$',
                                    message: formatMessage({ defaultMessage: '邮箱不合法', description: '이메일은 합법적이지 않습니다' }),
                                },
                            ]}
                        >
                            <Input
                                clearable
                                className="nut-input-text"
                                placeholder={formatMessage({ defaultMessage: '请输入邮箱', description: '이메일 주소를 입력하세요' })}
                                type="text"
                            />
                        </Form.Item>
                        <View className="form-label mt-4">
                            <FormattedMessage defaultMessage="密码 (PW)" description="비밀번호(PW)" />
                        </View>
                        <Form.Item
                            required
                            name="password"
                            rules={[{ required: true, message: formatMessage({ defaultMessage: '请输入密码', description: '비밀번호를 입력하세요' }) }]}
                        >
                            <Input
                                className="nut-input-text"
                                placeholder={formatMessage({ defaultMessage: '请输入密码', description: '비밀번호를 입력하세요' })}
                                type="password"
                                clearable
                            />
                        </Form.Item>
                    </Form>
                    <View className={'fixed top-1 right-1'}>
                        <Button onClick={switchLogin}>
                            <FormattedMessage defaultMessage="返回登录" description="로그인으로 돌아가기" />
                        </Button>
                    </View>
                </View>
            </View>
        </View>

    );
}

export default Index;
