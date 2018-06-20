<template>
  <div class="listInfo">
    <img class="coverImg" :src="coverImgUrl"/>
    <div class="playCount">
      <img class="headset" src="../../../assets/icon/headset.svg"/>
      <span class="play-count">{{playCount}}</span>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'ListInfo',
  data() {
    return {
      playCount: '89万',
    };
  },
  computed: {
    ...mapState({
      coverImgUrl: state => state.songsDetails.coverImgUrl,
    }),
  },
};
</script>
<style scoped lang="stylus">
  .listInfo
    position relative;
    top 65px;
    left 15px;
    .coverImg
      width 100px;
      height 100px;
      border-radius 4px;
    .playCount
      width 100px;
      text-align right;
      position absolute;
      top 0;
      left 0;
      color white;
      font-size 10px;
      .play-count
        position relative;
        top 0;
</style>
