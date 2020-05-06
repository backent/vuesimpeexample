import Vue from 'vue'
/*file vue yg menjadi intinya*/
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
require('@/assets/main.css')

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
