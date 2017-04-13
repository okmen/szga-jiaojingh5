// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import './config/detect-browser'
import './config/rem'
import { Button, Select } from 'element-ui'

Vue.use(require('vue-wechat-title'))
Vue.component(Button.name, Button)
Vue.component(Select.name, Select)

/* eslint-disable */
new Vue({
  router
}).$mount('#app')
/* eslint-enable */
