import Vue from 'vue'
import router from './router'
import store from './store'
import getPageTitle from '@/utils/get-page-title'
import {isLoginFromCookie} from '@/utils/auth'

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {

  // set page title
  document.title = getPageTitle(to.meta.title)
  // set header title  by vuex
  store.commit("app/SET_HEADER_TITLE",to.meta.title)

  // determine whether the user has logged in
  const islogin = isLoginFromCookie();
  console.log("permission path %s",to.path);
  console.log("permission %s",islogin);
  if (islogin) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
    } else {
      const hasGetUserInfo = store.getters.username

      if (hasGetUserInfo) {
        next()
      } else {
        try {
          // get user info
          await store.dispatch('user/getInfo')
          next()
        } catch (error) {
          // remove token and go to login page to re-login
          store.commit('user/SET_ISLOGIN', false);
          console.log(error);
          Vue.vux.toast.text('出现错误，请重新登录', 'top')
          next(`/login?redirect=${to.path}`)
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
    }
  }
})

router.afterEach(() => {
  // finish progress bar
})
