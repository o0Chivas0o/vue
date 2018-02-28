import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css'
import './assets/reset.scss'

// 注册全局element-ui组件
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App },
  template: '<App />',
})
