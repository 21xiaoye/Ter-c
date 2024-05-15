import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css';
import App from './App.vue'
import router from './router'

import 'normalize.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app');
