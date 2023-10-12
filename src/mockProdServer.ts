import { createProdMockServer } from 'vite-plugin-mock/client'
import userMockFn from '../mock/user'
import homeMockFn from '../mock/home'

export async function setupProdMockServer() {
  const mockModules = [...userMockFn(), homeMockFn()]
  createProdMockServer(mockModules)
}

// production mock server (生产环境打包 mock 数据, 用于展示，正式生产务必删除！！！)
if (process.env.NODE_ENV === 'production') {
  import('./mockProdServer').then(({ setupProdMockServer }) => {
    setupProdMockServer()
  })
}
