// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import './config/detect-browser'
import './config/rem'

Vue.use(require('vue-wechat-title'))

/* eslint-disable */
new Vue({
  router
}).$mount('#app')
/* eslint-enable */
