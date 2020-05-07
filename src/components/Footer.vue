<template>
  <tabbar slot="bottom">
    <TabbarItem :selected="$route.name === 'Index'" link="/">
      <img slot="icon" src="../assets/images/index.png"/>
      <img slot="icon-active" src="../assets/images/index_active.png"/>
      <span slot="label">首页</span>
    </TabbarItem>
    <TabbarItem :selected="$route.name === 'log'" link="/log">
      <img slot="icon" src="../assets/images/cate.png"/>
      <img slot="icon-active" src="../assets/images/cate_active.png"/>
      <span slot="label">缺勤打卡</span>
    </TabbarItem>
    <TabbarItem :selected="$route.name === 'work'" link="/work">
      <img slot="icon" src="../assets/images/cate.png"/>
      <img slot="icon-active" src="../assets/images/cate_active.png"/>
      <span slot="label">工作</span>
    </TabbarItem>
    <TabbarItem :selected="$route.name === 'my'" link="/my">
      <img slot="icon" src="../assets/images/my.png"/>
      <img slot="icon-active" src="../assets/images/my_active.png"/>
      <span slot="label">我的</span>
    </TabbarItem>
  </tabbar>
</template>

<script>
import { Tabbar, TabbarItem} from 'vux'

export default {
  data () {
    return {}
  },

  components: {
    Tabbar,
    TabbarItem
  },

}
</script>

<style lang="less">
@import '../assets/vux_theme.less';

</style>