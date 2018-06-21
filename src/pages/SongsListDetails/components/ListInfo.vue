<template>
  <div class="listInfo">
    <img class="coverImg" :src="coverImgUrl"/>
    <div class="playCount">
      <img class="headset" src="../../../assets/icon/headset.svg"/>
      <span class="play-count">{{playCount}}</span>
    </div>
    <div class="content">
      <div>{{listName}}</div>
      <img class="creator-img" :src="creatorInfo.avatarUrl"/>
      <span class="nickname">{{creatorInfo.nickname}}</span>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'ListInfo',
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      coverImgUrl: state => state.songsDetails.coverImgUrl,
      listName: state => state.songsDetails.listName,
      creatorInfo: state => state.songsDetails.creatorInfo,
    }),
    playCount() {
      const unit = '万';
      let count = this.$store.state.songsDetails.playCount;
      count = Math.ceil(count / 10000) + unit;
      return count;
    },
  },
  methods: {
  },
};
</script>
<style scoped lang="stylus">
  .listInfo
    position relative;
    top 65px;
    padding-left 15px;
    .coverImg
      width 100px;
      height 100px;
      border-radius 4px;
    .playCount
      width 100px;
      text-align right;
      position absolute;
      top 0;
      left 10px;
      color white;
      font-size 10px;
      padding-right 10px;
      .headset
        position relative;
        top 3px;
      .play-count
        position relative;
        top 0;
    .content
       position absolute;
       left 125px;
       top 10px;
       width 220px;
       /*border 1px solid black;*/
       color white;
       font-size 16px;
       .creator-img
         width 25px;
         height 25px;
         border-radius 50%;
         margin-top 10px;
       .nickname
         font-size 14px;
         position absolute;
         top 55px;
         left 30px;
</style>
