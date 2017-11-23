import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import store from './store/store'

new Vuex.Store(store)

new Vue({
  el: '#app',
  render: h => h(App)
})
