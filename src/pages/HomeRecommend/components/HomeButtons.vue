<template>
  <div class="btnWrapper">
    <div class="imgWrapper position1">
      <div class="img-wrapper fm">
        <img class="img" src="../../../assets/icon/FM.svg"/>
      </div>
      <div class="img-text">私人FM</div>
    </div>
    <div class="imgWrapper position2">
      <div class="img-wrapper date">
        <img class="img" src="../../../assets/icon/date.svg"/>
      </div>
      <div class="img-text">每日推荐</div>
    </div>
    <div class="imgWrapper position3" @click.stop="jumpSongsList">
      <div class="img-wrapper">
        <img class="img" src="../../../assets/icon/songList.svg"/>
      </div>
      <div class="img-text">歌单</div>
    </div>
    <div class="imgWrapper position4" @click="jumpRankingList">
      <div class="img-wrapper">
        <img class="img" src="../../../assets/icon/rankingList.svg"/>
      </div>
      <div class="img-text">排行榜</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeButtons',
  methods: {
    jumpSongsList() {
      this.$router.push('/songsList');
    },
    jumpRankingList() {
      this.$router.push('/rankingList');
    },
  },
};
</script>
<style scoped lang="stylus">
  .btnWrapper
    width 100%;
    height 130px;
    border-bottom 1px solid rgba(237,238,236,0.83);
    position relative;
    top 70px;
    .imgWrapper
      width 70px;
    .position1
      position absolute;
      top 50px;
      left 25px;
      .img-wrapper
        width 45px;
        height 45px;
        border-radius 50%;
        background-color #d43c33;
        .img
          position relative;
          top 4px;
          left 7px;
      .img-text
        font-size 12px;
        margin-top 6px;
    .position2
      position absolute;
      top 50px;
      left 120px;
      .img-wrapper
        width 45px;
        height 45px;
        border-radius 50%;
        background-color #d43c33;
        .img
          position relative;
          top 4px;
          left 7px;
      .img-text
        font-size 12px;
        margin-top 6px;
    .position3
      position absolute;
      top 50px;
      left 215px;
      .img-wrapper
        width 45px;
        height 45px;
        border-radius 50%;
        background-color #d43c33;
        .img
          width 30px;
          height 30px;
          position relative;
          top 10px;
          left 9px;
      .img-text
        padding-left 12px;
        font-size 12px;
        margin-top 6px;
    .position4
      position absolute;
      top 50px;
      left 305px;
      .img-wrapper
        width 45px;
        height 45px;
        border-radius 50%;
        background-color #d43c33;
        .img
          position relative;
          top 5px;
          left 7px;
      .img-text
        padding-left 5px;
        font-size 12px;
        margin-top 6px;
</style>
