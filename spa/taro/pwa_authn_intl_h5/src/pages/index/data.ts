import { CredentialCreationOptionsJSON } from '@github/webauthn-json/src/webauthn-json/basic/json';
import { get, post } from '../../pkg/request';

export function getOption(): Promise<CredentialCreationOptionsJSON> {
  return get('/authn/option');
}

export async function sign(data) {
  return post('/authn/sign', data);
}
export async function getMe() {
  return get('/ctx/me');
}
export async function logout() {
  return post('/ctx/logout');
}
