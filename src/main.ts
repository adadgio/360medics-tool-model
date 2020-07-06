import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { JsonImport } from './service/json-import'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  created()
  {
      JsonImport.init()
  }
}).$mount('#app')
