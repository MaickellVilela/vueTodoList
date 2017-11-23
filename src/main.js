import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import Store from './store/store'

const store = new Vuex.Store(Store);

new Vue({
    el: '#app',
    store,
    render: h => h(App)
});
