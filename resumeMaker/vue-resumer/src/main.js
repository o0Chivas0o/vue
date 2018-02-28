import Vue from 'vue'
import App from './App'
import 'normalize.css'
import './assets/reset.scss'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App },
  template: '<App />'
})
