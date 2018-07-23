window.SETTINGS = {
  API_BASE_PATH: 'https://api.viralpatel.blog/wp-json/wp/v2/'
}

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
