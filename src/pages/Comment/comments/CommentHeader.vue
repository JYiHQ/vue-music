<template>
  <div class="header-wrapper">
    <img @click="handlePageBack" class="img" src="../../../assets/icon/jiantouzuo.svg"/>
    <div class="span">{{headerText}}</div>
    <img class="left" src="../../../assets/icon/share.svg"/>
  </div>
</template>
<script>
export default {
  name: 'CommentHeader',
  data() {
    return {
      headerText: '评论(10000)',
    };
  },
  methods: {
    handlePageBack() {
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
    top:0
    z-index 999
    background-color #d43c33
    .left
      width 25px
      height 25px
      position absolute
      top 7px
      left 335px
    .span
      width 100px
      height 38px
      line-height 38px
      color white
      position absolute
      left 60px
    .img
      position absolute
      left 15px
      top 5px
      width 30px
      height 30px
</style>
