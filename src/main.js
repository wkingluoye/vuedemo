import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
// import Log from './util/log'

const app = createApp(App)
app.use(ElementPlus)
// app.use(Log,true)
app.mount('#app')