// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueFakeData from '../src/vue-fake-data.js'


Vue.config.productionTip = true

// Using plugin
Vue.use(vueFakeData,{locale: 'en_US'})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
