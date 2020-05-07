<template>
  <div class="container">
    <p v-for="(item,index) in 50" :key="index">{{item}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
      msg: '记录页面!'
    }
  },

  created () {
  }
}
</script>

<style scoped>

</style>