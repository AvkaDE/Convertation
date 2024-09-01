import { createApp } from 'vue'

import './reset.css'
import './variables.css'

import App from './App.vue'
import router from './router/router'

createApp(App)
  .use(router)
  .mount('#app')
