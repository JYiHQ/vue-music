<template>
  <div class="header-wrapper">
    <img @click="backPage" class="img" src="../../../assets/icon/jiantouzuo.svg"/>
    <span class="text">专辑</span>
    <img class="left" src="../../../assets/icon/more.svg"/>
  </div>
</template>
<script>
export default {
  name: 'AlbumSongHeader',
  methods: {
    backPage() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped lang="stylus">
  .header-wrapper
    width 100%
    height 38px
    position fixed
    top 0
    background-color #e2e1e5
    .left
      width 25px
      height 25px
      position absolute
      top 6px
      left 340px
    .text
      position absolute
      left 60px
      top 6px
      color white
    .img
      position absolute
      top 3px
      left 15px
      width 30px
      height 30px
</style>
