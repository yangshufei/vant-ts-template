import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
import { Toast } from 'vant'
// axios.defaults.timeout = 5000 // 超时 5 秒

// request拦截器
axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response拦截器
axios.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data

    if (res.code === 1) { // success
      return res
    } else {
      return Promise.reject(res.msg || res.errMsg || '暂无数据')
    }
  },
  error => {
    console.log('err' + error) // for debug
    Toast(error.message)
    return Promise.reject(error)
  }
)

export default axios
