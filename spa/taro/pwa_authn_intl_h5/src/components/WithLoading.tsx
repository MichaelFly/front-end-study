import { Loading, Overlay } from '@nutui/nutui-react';
import { View } from '@tarojs/components';
import { PropsWithChildren } from 'react';

interface WithLoadingProps extends PropsWithChildren {
  loading: boolean;
  slot?: any;
}

const WrapperStyle = {
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
};
function WithLoading(props: WithLoadingProps) {
  const { loading, children } = props;
  let { slot } = props;
  if (slot == undefined) slot = true;

  return (
    <View>
      <Overlay
        visible={loading}
        style={{ background: 'rgba(255, 255, 255, 0.9)' }}
      >
        <div className="wrapper" style={WrapperStyle}>
          <Loading direction="vertical">加载中</Loading>
        </div>
      </Overlay>
      {slot && children}
    </View>
  );
}

export default WithLoading;
