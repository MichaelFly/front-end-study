import { get, post } from '../../pkg/request';
import { Ack } from '../../types/global';

export function getAuthOption(identity: string) {
  return get(`/authn/option/${identity}`);
}

export function login(data): Promise<Ack> {
  return post('/any/login', data);
}

export function authnLogin(identity: string, data): Promise<Ack> {
  return post(`/authn/login/${identity}`, data);
}
