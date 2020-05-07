const getters = {
  headerTitle: state => state.app.headerTitle,
  islogin: state => state.user.islogin,
  avatar: state => state.user.avatar,
  username: state => state.user.username,
  memberinfo: state => state.user.memberinfo
}
export default getters
