import axios from 'axios'
import { showDialog } from 'vant'
// 获取环境变量
const { VITE_BASE_URL } = import.meta.env

const service = axios.create({
  baseURL: VITE_BASE_URL
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
