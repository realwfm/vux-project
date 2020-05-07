<template>
  <div class="container">
      <Group>
        <XInput  title="账号" v-model="username"></XInput>
        <XInput  title="密码" v-model="password"></XInput>
        <XButton type="primary" @click.native="login">登录</XButton>
      </Group>
  </div>
</template>

<script>
import { Group, XInput, XButton} from 'vux'

export default {
  components: {Group, XInput, XButton},
  data () {
    return {
      username: null,
      password: null,
      msg: '登录页面!'
    }
  },

  methods: {
    login () {
      this.$store.dispatch('user/login', {username: this.username, password: this.password}).then(() => {
        this.$router.push({ path: this.redirect || '/' })
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

</style>
