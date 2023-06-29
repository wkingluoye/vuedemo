import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import cookie from 'js-cookie'
import ShowLog from './util/showLog'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from './ToolRouter'
const app = createApp(App)
app.use(ElementPlus)

app.use(router)
app.use(ShowLog,'development' === process.env.NODE_ENV)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.config.globalProperties.$cookies = cookie
app.mount('#app')