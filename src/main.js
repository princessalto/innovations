import '@/assets/stylus/main.styl'
import './components/index'
import './directives/index'
import './filters/index'
import './mixins/index'
// import './plugins/axios'
import './plugins/shortkey'
import './plugins/vee-validate'
import './plugins/vuetify'
import './registerServiceWorker'
// import '@/stylus/main.styl'
import './plugins/jquery'
import '@babel/polyfill'
import '@mdi/font/css/materialdesignicons.css'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import '@/components';
import Vue from 'vue'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
