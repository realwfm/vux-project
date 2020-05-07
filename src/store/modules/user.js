import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    username: '',
    avatar: '',
    email: '',
    userid: null,
    memberinfo: {uid: null, fid: null, collection_question_ids: '', error_question_ids: ''}
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USERNAME: (state, username) => {
    state.username = username
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_EMAIL: (state, email) => {
    state.email = email
  },
  SET_USERID: (state, userid) => {
    state.userid = userid
  },
  SET_MEMBERINFO: (state, memberinfo) => {
    // todo 这两种ids 通过额外请求获取
    // 收藏题目ids
    if (memberinfo.collection_question_ids) {
      memberinfo.collection_question_ids = memberinfo.collection_question_ids.split(',')
    }
    // 错题ids
    if (memberinfo.error_question_ids) {
      memberinfo.error_question_ids = memberinfo.error_question_ids.split(',')
    }
    // 对象需要这样赋值
    state.memberinfo = {...memberinfo}
  }
}

const actions = {
  // user login
  login ({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        const { data } = response
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo ({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const { data } = response

        if (!data) {
          reject('Verification failed, please Login again.')
        }

        commit('SET_USERNAME', data.data.username)
        commit('SET_AVATAR', data.data.avatar)
        commit('SET_EMAIL', data.data.email)
        commit('SET_USERID', data.data.userid)
        commit('SET_MEMBERINFO', data.data.memberinfo)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout ({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        removeToken() // must remove  token  first
        resetRouter()
        commit('RESET_STATE')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken ({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
