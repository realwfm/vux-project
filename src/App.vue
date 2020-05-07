<template>
  <div id="app">
    <ViewBox ref="viewBox" body-padding-top="46px" body-padding-bottom="55px">
        <Header
        slot="header"
        style="width:100%;position:absolute;left:0;top:0;z-index:100;" ></Header>
        <router-view class="router-view"/>
        <Footer  slot="bottom"></Footer>
    </ViewBox>
  </div>
</template>

<script>
import {ViewBox} from 'vux'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    ViewBox,
    Footer,
  },
  data () {
    return {}
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}

#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.container {
  background: #fefefe;
  flex: 1;
  overflow: auto;
}

</style>
