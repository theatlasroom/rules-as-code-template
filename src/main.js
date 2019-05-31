import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.js'

Vue.use(VueRouter)

import { routes } from './routes/index'

let router = new VueRouter({
	mode: 'hash',
	routes
})

new Vue({
	el: "#app",
	router,
	render: h => h(App)
})




// import App from './components/App.js'

// new Vue({
//   render: h => h(App),
// }).$mount(`#app`);
