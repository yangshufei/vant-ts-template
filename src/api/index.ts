import axios from '@/utils/request'
import { AxiosRequestConfig } from 'axios'

export function fetchPostData (url: string, params?: any, option?: AxiosRequestConfig): Promise<any> {
  if (!url) return Promise.reject(new Error('NO URL'))

  let config = {
    baseURL: '/', // baseURL
    headers: {
      'content-type': 'application/json;charset=UTF-8'
    }
  }

  if (option) {
    config = Object.assign(config, option)
  }
  return axios.post(url, params, config)
}
