<template>
  <div class="header-wrapper">
    <img @click="handlePageBack" class="img" src="../../../assets/icon/jiantouzuo.svg"/>
    <div class="span">评论({{headerText}})</div>
    <img class="left" src="../../../assets/icon/share.svg"/>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'CommentHeader',
  data() {
    return {
      headerText: '17',
      timeFn: null,
    };
  },
  methods: {
    handlePageBack() {
      this.$router.go(-1);
    },
  },
  computed: {
    ...mapState({
      comments: state => state.songsDetails.comments,
    }),
  },
  mounted() {
    this.timeFn = setInterval(() => {
      if (this.comments.total) {
        this.headerText = this.comments.total;
        clearInterval(this.timeFn);
      }
    }, 70);
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
