
import Vue from 'vue'
import App from './App'
import fastClick from 'fastclick'
import router from './router'
import './assets/iconfont/iconfont.css'
import 'styles/reset.css'
import 'styles/border.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
require('swiper/dist/css/swiper.css')

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

fastClick.attach(document.body)

new Vue({
  el: '#app',
 router,
  components: { App },
  template: '<App/>'
})
