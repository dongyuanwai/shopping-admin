import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router/index'
// tailwind css  与 element样式有冲突，如果把 tailwind放到下面 会覆盖掉element某些样式（比如button）
import './main.css'
import 'element-plus/dist/index.css'


const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.mount('#app')
