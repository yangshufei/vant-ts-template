import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'

import 'amfe-flexible'
import './styles/index.scss'
import { vantPlugins } from './plugins/vant'

// 使用mock数据
const { mockXHR } = require('../mock')
mockXHR()

const app = createApp(App)
app.use(vantPlugins)
app.use(store, key)
app.use(router)
app.mount('#app')
