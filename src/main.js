// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import {post,fetch,patch,put} from '@/utils/http'
import {ToastPlugin} from 'vux'

import store from './store'
import  '@/permission'

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(ToastPlugin)

Vue.use(VueRouter)
Vue.config.productionTip = false

Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;

// 反转义方法
Vue.prototype.unescape = function (html) {
  return html
      // .replace(html ? /&(?!#?\w+;)/g : /&/g, '&amp;')
      // .replace(/&lt;/g, '<')
      // .replace(/&gt;/g, '>')
      // .replace(/&quot;/g, '"')
      // .replace(/&#39;/g, '\'')
      .replace(/\\/g, '')
}


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
