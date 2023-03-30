import {createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-svg-core'
import './assets/main.css'
axios.defaults.baseUrl = 'http://localhost:7174'
const app = createApp(App)

app.use(router)
app.use( VueAxios, axios);
app.mount('#app')

import 'bootstrap/dist/js/bootstrap'