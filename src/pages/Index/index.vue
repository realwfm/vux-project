<template>
  <div class="container">
    <img src="../../assets/images/index_active.png">

    <div>{{str}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello World!',
      str: null
    }
  },

  created () {
    let link = 'http//v.qq.com/x/page/r0706trleyz.html';
    // let reg=/(https?)\/\/(([^\/]+)\/)+/i;
    // let arr = link.match(reg);
    // console.log("====arr===",arr);

    // arr = link.split(arr[0])[1].split('.');

    // this.str = arr[0];

    let reg=/(\/\w+)/ig;
    let arr = link.match(reg);
    this.str = arr[arr.length-1].split('/')[1];

    console.log("====link===",this.str);
  }
}
</script>

<style scoped>

</style>