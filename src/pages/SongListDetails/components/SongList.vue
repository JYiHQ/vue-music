<template>
  <div class="list-wrapper">
    <div class="header">
      <div class="item1">
        <img class="img" src="../../../assets/icon/player_black.svg"/>
        <span class="img-text1">播放全部</span>
        <span class="img-text2">（共{{songCount}}首）</span>
      </div>
      <div class="item2">
        <img class="item2-img" src="../../../assets/icon/add.svg"/>
        <span class="img-text">收藏（{{collectCount}}）</span>
      </div>
    </div>
    <div class="content">
      <list :songList="songList"></list>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import List from '../../../components/list/list';

export default {
  name: 'SongsList',
  data() {
    return {
      unit: '万',
    };
  },
  components: {
    List,
  },
  computed: {
    ...mapState({
      songCount: state => state.songsDetails.songCount,
      subscribedCount: state => state.songsDetails.subscribedCount,
      songList: state => state.songsDetails.songList,
    }),
    collectCount() {
      if (this.subscribedCount > 10000) {
        const count = ((this.subscribedCount / 10000) - 0.1).toFixed(1);
        return count + this.unit;
      }
      return this.subscribedCount;
    },
  },
};
</script>
<style scoped lang="stylus">
  .list-wrapper
    width 100%;
    background-color white;
    border-radius 10px;
    position relative;
    top -10px;
    .header
      width 100%;
      height 46px;
      border-bottom 1px solid gainsboro;
      display flex;
      flex-direction row;
      .item1
        flex 0 0 55%;
        box-sizing border ;
        padding-left 15px;
        .img
          width 20px;
          height 20px;
          vertical-align center;
          position relative;
          top 5px;
        .img-text1
          line-height 46px;
        .img-text2
          font-size 12px;
          color rgba(159,159,157,0.83);
          line-height 46px;
          margin-left -5px;
      .item2
        flex auto;
        background-color #d43c33;
        border-radius 0 11px 0 0;
        color white;
        padding-left 10px;
        .item2-img
          position relative;
          top 2px;
        .img-text
          line-height 46px;
    .content
      width 100%;
      height 300px;
      background-color white;
</style>
