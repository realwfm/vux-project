
const state = {
  headerTitle: '首页', //头部标题
};

const mutations = {
  SET_HEADER_TITLE (state,title) {
    state.headerTitle = title;
  },
};

const actions = {};

export default {
namespaced: true,
state,
mutations,
actions
}

