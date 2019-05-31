import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './src/components/App.vue'
import store from './src/store/index'

Vue.use(VueRouter)

import { routes } from './src/routes/index'

let router = new VueRouter({
  mode: 'hash',
  routes,
  store
})

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  store,
  render: (h) => h(App)
})
