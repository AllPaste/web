/*
 * @Author: Luenci
 * @Date: 2022-12-09 09:39:42
 * @LastEditors: Luenci
 * @LastEditTime: 2022-12-09 09:39:44
 * @FilePath: /all-paste/src/utils/request/types.ts
 * @Description:
 *
 * Copyright (c) 2022 by Luenci, All Rights Reserved.
 */
import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface RequestInterceptors<T> {
  // 请求拦截
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (err: any) => any
  // 响应拦截
  responseInterceptors?: (config: T) => T
  responseInterceptorsCatch?: (err: any) => any
}
// 自定义传入的参数
export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: RequestInterceptors<T>
}
export interface CancelRequestSource {
  [index: string]: () => void
}
