<template>
  <div class="wrapper">
    <div class="header">本周新碟</div>
  </div>
</template>
<script>
export default {
  name: 'LatestSongDisc',
  data() {
    return {
      listData: [],
    };
  },
  created() {
    // 请求数据
    this.$store.dispatch('get_latestDisc').then(() => {
      this.listData = this.$store.state.latestDisc.DiscList;
    });
  },
};
</script>
<style scoped lang="stylus">
  .wrapper
    width 100%
    height 900px
    position relative
    top 44px
    -webkit-box-sizing: border-box
    -moz-box-sizing: border-box
    box-sizing: border-box
    .header
      height 40px
      padding-left 10px
      line-height 40px
      font-weight bold
</style>
