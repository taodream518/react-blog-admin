/*
 * @Descripttion: 请求封装
 * @Author: Coder-Tao
 * @Date: 2022-07-26 16:42:11
 * @LastEditTime: 2022-07-28 15:13:37
 */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios';

// 列表数据查询条件
export interface QueryPagination {
  page: boolean;
  pageSize: number;
  pageNumber: number;
}

// 返回列表数据结构体
export interface ListData<T> {
  pages: number;
  total: number;
  pageSize: number;
  pageNumber: number;
  list: T[];
}

// 数据结构体
export interface ApiBody<T = any> {
  code: number;
  msg: string;
  data: T;
}

// 异常拦截处理器
const errorHandler = (error: AxiosError) => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        // 登录过期错误处理
        break;
      case 500:
        // 服务器错误处理
        break;
      default:
    }
  }
  return Promise.reject(error);
};

export const request = (config: AxiosRequestConfig) => {
  // 创建实例并设置相关配置
  const http: AxiosInstance = axios.create({
    baseURL: '/api',
    timeout: 5 * 1000,
  });

  // 请求拦截
  http.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) config.headers['Authorization'] = `Bearer ${token}`;
      return config;
    },
    (err) => {
      return err;
    }
  );

  // 响应拦截
  http.interceptors.response.use((res) => {
    return res.data ? res.data : res;
  }, errorHandler);

  // 封装成Promise
  const httpRequest = (config: AxiosRequestConfig): Promise<ApiBody> => {
    return new Promise((resolve, reject) => {
      http(config)
        .then((res) => {
          resolve(res as any);
        })
        .catch((err) => {
          console.log('err', err);
          reject(err);
        });
    });
  };

  return httpRequest(config);
};
