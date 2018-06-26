<template>
  <div class="button-wrapper">
    <div class="comment" @click="jumpCommentPage">
      <img class="img" src="../../../assets/icon/comment.svg"/>
      <div class="img-text">{{commentCount}}</div>
    </div>
    <div class="share">
      <img class="img" src="../../../assets/icon/share.svg"/>
      <div>{{shareCount}}</div>
    </div>
    <div class="download">
      <img class="img" src="../../../assets/icon/download.svg"/>
      <div>下载</div>
    </div>
    <div class="select">
      <img class="img" src="../../../assets/icon/select.svg"/>
      <div>多选</div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'SongListButton',
  computed: {
    ...mapState({
      commentCount: state => state.songsDetails.commentCount,
      shareCount: state => state.songsDetails.shareCount,
    }),
  },
  methods: {
    jumpCommentPage() {
      this.$router.push('/comment');
    },
  },
};
</script>
<style scoped lang="stylus">
  .button-wrapper
    width 100%;
    height 40px;
    -webkit-box-sizing: border-box
    -moz-box-sizing: border-box
    box-sizing: border-box
    position relative
    top 140px;
    color white;
    font-size 14px;
    .comment
      position absolute;
      top 0;
      left 35px;
      text-align center;
      .img
        width 20px;
        height 20px;
    .share
      position absolute;
      top 0;
      left 125px;
      text-align center;
      .img
        width 20px;
        height 20px;
    .download
      position absolute;
      top 0;
      left 215px;
      text-align center;
      .img
        width 20px;
        height 20px;
    .select
      position absolute;
      top 0;
      left 305px;
      text-align center;
      .img
        width 20px;
        height 20px;
</style>
