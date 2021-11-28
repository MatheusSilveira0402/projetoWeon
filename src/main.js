import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import VueMask from "v-mask"
import VueRouter from 'vue-router'

import cadastro from './components/cadastro.vue'
import listaUsuarios from './components/listaUsuarios.vue'

import './plugins/bootstrap-vue'
import './plugins/axios'

/* área das rotas */
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/cadastro',
      component: cadastro
    },
    {
      path: '/',
      component: listaUsuarios
    }
  ]
})

Vue.use(VueMask)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
