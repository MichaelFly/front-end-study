import { supported } from '@github/webauthn-json/browser-ponyfill';
import { View } from '@tarojs/components';

const msg = {
  false: {
    content: '浏览器不支持 `web authn`',
    className: 'text-red-500',
  },
};

export function SupportAuthn() {
  const { className, content } = msg[`${supported()}`] || {};
  return (
    <View className={'fixed top-2 right-2'}>
      <View className={className}>
        <View style={{ fontSize: 15 }}>{content && content}</View>
      </View>
    </View>
  );
}
