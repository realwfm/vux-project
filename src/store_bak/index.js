import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const state = {
  pageTitle: '首页', //头部标题
};

const mutations = {
  setPageTitle (state,title) {
    state.pageTitle = title;
  },
};

const actions = {};

const getters = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
