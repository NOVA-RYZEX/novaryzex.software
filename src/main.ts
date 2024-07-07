import '@/assets/main.scss'
import 'bootstrap'
import 'mdb-vue-ui-kit'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from '@/App.vue'
import router from '@/router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
