import Taro from '@tarojs/taro';

const authn_identity = 'authn:identity';

export function setAuthnIdentity(identity) {
  Taro.setStorage({ key: authn_identity, data: identity });
  return identity;
}

export function getAuthnIdentity() {
  return Taro.getStorage({ key: authn_identity }).then((x) => x?.data);
}

export function cleaAuthn() {
  return Taro.removeStorage({ key: authn_identity });
}
