import { post } from '../../pkg/request';

export async function createAccount(data) {
  return post('/any/account', data);
}

