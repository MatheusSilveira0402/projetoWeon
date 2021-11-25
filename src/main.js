import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import VueMask from "v-mask";

import './plugins/bootstrap-vue'
import './plugins/axios'

Vue.use(VueMask)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
