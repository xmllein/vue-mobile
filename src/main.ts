import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/common.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// 设置适配
const rootValue = 16
const rootWidth = 390
const deviceWidth = document.documentElement.clientWidth
document.documentElement.style.fontSize = (rootValue * deviceWidth) / rootWidth + 'px'

app.mount('#app')

// production mock server (生产环境打包 mock 数据, 用于展示，正式生产务必删除！！！)
if (process.env.NODE_ENV === 'production') {
  import('./mockProdServer').then(({ setupProdMockServer }) => {
    setupProdMockServer()
  })
}
