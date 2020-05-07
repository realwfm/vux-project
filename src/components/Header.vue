<template>
  <div>
    <XHeader :title="headerTitle"></XHeader>
  </div>
</template>

<script>
import { XHeader } from 'vux'
import {mapState} from "vuex"

export default {

  data () {
    return {}
  },

  components: {
    XHeader
  },

  computed : {
    ...mapState('app',['headerTitle'])
  }
}
</script>

<style scoped>

</style>