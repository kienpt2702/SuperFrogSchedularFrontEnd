import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from './router';
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import setupGuard from "@/router/guard.js";

const app = createApp(App);
setupGuard(router);
app.use(router);
app.use(ElementPlus);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.mount('#app');



