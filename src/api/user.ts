/*
 * @Descripttion: 用户Api
 * @Author: Coder-Tao
 * @Date: 2022-07-26 16:52:37
 * @LastEditTime: 2022-07-28 17:40:31
 */
import { request } from './request';

export type LoginRecord = {
  username: string;
  password: string;
};

// 登录
export async function login(data: LoginRecord) {
  return request({
    url: '/user/login',
    method: 'POST',
    data,
  });
}

// 注册
export async function register(data: LoginRecord) {
  return request({
    url: '/user/register',
    method: 'POST',
    data,
  });
}

// 获取用户信息
export async function userInfo() {
  return request({
    url: '/user/userInfo',
    method: 'GET',
  });
}
