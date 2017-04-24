// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import './config/detect-browser'
import './config/rem'
import './config/wx-port'
import { TimeSelect, DatePicker } from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import '../static/plupload.dev.js'
import '../static/qiniu.min.js'
import 'mint-ui/lib/style.css'
import store from './store/index'
import { Indicator } from 'mint-ui'

Vue.use(require('vue-wechat-title'))
Vue.component(TimeSelect.name, TimeSelect)
Vue.component(DatePicker.name, DatePicker)

window.addEventListener('popstate', function (e) { // 监听手机返回按钮, 清除loading效果
  Indicator.close()
}, false)

/* eslint-disable */
new Vue({
  router,
  store
}).$mount('#app')
/* eslint-enable */
