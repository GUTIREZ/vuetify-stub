import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import 'vuetify/src/stylus/app.styl'

import './components'
import './plugins'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
