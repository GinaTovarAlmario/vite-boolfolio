import { createApp } from 'vue'
import { router } from './router'
// import 'bootstrap/scss/bootstrap.scss';
import App from '../App.vue'

createApp(App).use(router).mount('#app')
