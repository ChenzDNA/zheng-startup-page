import axios from 'axios'

export default function request(config) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: '/api',
    timeout: 5000
  })

  // 2.axois的拦截器(interceptors)
  // 2.1.请求拦截
  instance.interceptors.request.use(config => {
    return config
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(
    res => {
      return res.data
    },
    err => {
      console.log(err)
    }
  )

  // 把数据转成 FormData
  let data = new FormData
  for (let key of config.data) {
    data.append(key, config.data[key])
  }
  config.data = data

  // 3.发送真正的网络请求
  return instance(data)
}