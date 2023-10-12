import axios from 'axios'
import { showDialog } from 'vant'
import config from '@/config'

const service = axios.create({
  baseURL: config.baseUrl
})

service.interceptors.response.use((response) => {
  const { code, message, data } = response.data
  if (code !== 0) {
    showDialog({
      message: message
    }).then(() => {
      // 关闭弹窗逻辑
    })

    return Promise.reject(message)
  }
  return data
})

export default service
