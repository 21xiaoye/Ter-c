import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css';
import App from './App.vue'
import router from './router'
import './util/websocket'

import 'normalize.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);
app.use(ElementPlus);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
export const swichRouter = (path:string)=>{
    router.push(path);
}
app.mount('#app');
