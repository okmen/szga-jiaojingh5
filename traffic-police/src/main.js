// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import './config/detect-browser'
import './config/rem'
import './config/wx-port'
import { TimeSelect } from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import '../static/plupload.dev.js'
import '../static/qiniu.min.js'
import 'mint-ui/lib/style.css'

// Vue.use(require('vue-wechat-title'))
Vue.component(TimeSelect.name, TimeSelect)

/* eslint-disable */
new Vue({
  router
}).$mount('#app')
/* eslint-enable */
