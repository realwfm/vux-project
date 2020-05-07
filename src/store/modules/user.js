import { login, logout, getInfo } from '@/api/user'

const getDefaultState = () => {
  return {
    islogin: false, // 是否登录
    username: '',
    avatar: '',
    email: '',
    userid: null,
    memberinfo: {uid:null, fid:null, collection_question_ids:'', error_question_ids:''}
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
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
    if(memberinfo.collection_question_ids){
      memberinfo.collection_question_ids = memberinfo.collection_question_ids.split(',');
    }
    // 错题ids
    if(memberinfo.error_question_ids){
      memberinfo.error_question_ids = memberinfo.error_question_ids.split(',');
    }
    // 对象需要这样赋值
    state.memberinfo = {...memberinfo}
  },
  SET_ISLOGIN: (state, islogin) => {
    state.islogin = islogin
  }
}

const actions = {
  // user login
  login ({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        const { data } = response
        commit('SET_ISLOGIN', data.success)
        resolve()
      }).catch(error => {
        console.log("login no");
        reject(error)
      })
    })
  },

  // get user info
  getInfo ({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo().then(response => {
        const { data } = response.data

        if (!data) {
          reject('Verification failed, please Login again.')
        }

      // console.log(data);
      //   const { username, avatar, email, userid, memberinfo } = data

        commit('SET_USERNAME', data.username)
        commit('SET_AVATAR', data.avatar)
        commit('SET_EMAIL', data.email)
        commit('SET_USERID', data.userid)
        commit('SET_MEMBERINFO', data.memberinfo)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout().then(() => {
        // removeToken() // must remove  token  first
        // resetRouter()
        commit('RESET_STATE')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  // resetToken({ commit }) {
  //   return new Promise(resolve => {
  //     removeToken() // must remove  token  first
  //     commit('RESET_STATE')
  //     resolve()
  //   })
//   }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

