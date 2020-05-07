import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/Index/index'
import work from '@/pages/work/index'
import log from '@/pages/log/index'
import my from '@/pages/my/index'


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta:{title:'首页'}
    },
    {
      path: '/log',
      name: 'log',
      component: log,
      meta:{title:'缺勤打卡'}
    },
    {
      path: '/work',
      name: 'work',
      component: work,
      meta:{title:'工作'}
    },
    {
      path: '/my',
      name: 'my',
      component: my,
      meta:{title:'我的'}
    },
    {
      path: '/login',
      name: 'login',
      component: my,
      meta:{title:'登录'}
    },
  ]
});


export default router;
