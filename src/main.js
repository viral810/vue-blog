window.SETTINGS = {
  API_BASE_PATH: 'https://api.viralpatel.blog/wp-json/wp/v2/',
  API_BASE_MENU: '  https://api.viralpatel.blog/wp-json/menus/v1/menus/'
}
try {
  window.axios = require('axios');
  // window.axios.defaults.headers.common = {
  //   'X-CSRF-TOKEN': window.WordPress.csrfToken,
  //   'X-Requested-With': 'XMLHttpRequest'
  // };
} catch (e) {
  console.log(e)
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