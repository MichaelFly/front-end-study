import Taro from '@tarojs/taro';
import { Ack } from '../types/global';

export function tipAck(
  ack: Ack,
  ngs: Record<string, string> = {},
  successTip?: string,
): boolean {
  const { ok, result } = ack;
  if (!ok) {
    result && Taro.showToast({ title: ngs[result] || result, icon: 'error' });
    return false;
  }

  Taro.showToast({ title: successTip || '操作成功', icon: 'success' });
  return true;
}
