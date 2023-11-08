import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import microApp from '@micro-zoe/micro-app'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
microApp.start({
	inline: false, // 默认值false
  destroy: false, // 默认值false
  disableScopecss: false, // 默认值false
  disableSandbox: false, // 默认值false
  shadowDOM: false, // 默认值false
  ssr: false, // 默认值false
});
app.mount('#app')
