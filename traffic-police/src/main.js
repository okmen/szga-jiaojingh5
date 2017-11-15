// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import router from './router'
import './config/detect-browser'
import './config/rem'
import './config/wx-port'
import { TimeSelect } from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// import '../static/plupload.dev.js'
// import '../static/qiniu.min.js'
import 'mint-ui/lib/style.css'
import store from './store/index'
import { Indicator, DatetimePicker, MessageBox, Swipe, SwipeItem, Popup, Loadmore, Cell } from 'mint-ui'
// import Toasts from './service/toast'

// Vue.use(Toasts)
Vue.use(require('vue-wechat-title'))
Vue.component(TimeSelect.name, TimeSelect)
// Vue.component(DatePicker.name, DatePicker)
Vue.component(DatetimePicker.name, DatetimePicker)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Popup.name, Popup)
Vue.component(Loadmore.name, Loadmore)
Vue.component(Cell.name, Cell)
Vue.prototype.$plateerification = function (plate) {
  if (plate.length === 8) {
    if (plate.indexOf('粤B') >= 0 || plate.indexOf('苏A') >= 0 || plate.indexOf('苏B') >= 0 || plate.indexOf('鲁A') >= 0 || plate.indexOf('沪') >= 0) {
      return false
    } else {
      return '请输入正确的车牌号码'
    }
  } else if (plate.length === 7) {
    if (plate.indexOf('粤Z') >= 0) {
      if (plate.indexOf('港') >= 0 || plate.indexOf('澳') >= 0) {
        return false
      } else {
        return '请输入正确的车牌号码'
      }
    } else {
      return false
    }
  } else if (plate.length === 1) {
    return '请输入车牌号码'
  } else {
    return '请输入正确的车牌号码'
  }
}
window.addEventListener('popstate', function (e) { // 监听手机返回按钮, 清除loading效果
  Indicator.close()
  MessageBox.close()
}, false)

/* eslint-disable */
new Vue({
  router,
  store
}).$mount('#app')
/* eslint-enable */
