import { request } from '@/utils';

export interface LoginPayload {
  username: string;
  password: string;
}

export interface LoginResult {
  token: string;
  expires: number;
}

/**
 * 登录换取 Token
 * @param payload
 */
export function login(payload: LoginPayload) {
  return request<LoginResult>({
    url: '/login',
    method: 'POST',
    data: payload,
  });
}

export interface UserInfoPayload {
  any: string;
}

export interface UserInfoResult {
  username: string;
  avatar: string;
}

/**
 * 获取用户信息
 * @param payload
 */
export function getUserInfo(payload: UserInfoPayload) {
  return request<UserInfoResult>({
    url: '/userinfo',
    method: 'POST',
    data: payload,
  });
}
