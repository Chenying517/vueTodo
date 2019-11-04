import Vue from 'vue'
import Vuerouter from 'vue-router'
import App from './app.vue'
import './assets/style/global.styl'
import createRouter from './config/router'

Vue.use(Vuerouter)

const root = document.createElement('div')
document.body.appendChild(root)

const router = createRouter()

new Vue({
  router,
  render: (h) => h(App)
}).$mount(root)
