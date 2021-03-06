
import Vue from 'vue'
import App from './App'
import fastClick from 'fastclick'
import router from './router'
import './assets/styles/reset.css'
import './assets/styles/border.css'
Vue.config.productionTip = false

fastClick.attach(document.body)

new Vue({
  el: '#app',
 router,
  components: { App },
  template: '<App/>'
})
