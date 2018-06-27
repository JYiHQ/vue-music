<template>
  <div class="comment-info">
    <div class="row1">
      <img class="img" :src="coverImgUrl"/>
    </div>
    <div class="row2">
      <div class="list-name">{{listName}}</div>
      <div class="creator">
        <span>by </span>
        <span style="color: rgba(5,103,205,0.87)">{{creatorInfo.nickname}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'SongListInfo',
  computed: {
    ...mapState({
      coverImgUrl: state => state.songsDetails.coverImgUrl,
      listName: state => state.songsDetails.listName,
      creatorInfo: state => state.songsDetails.creatorInfo,
    }),
  },
};
</script>
<style scoped lang="stylus">
  .comment-info
    width 100%
    height 100px
    display flex
    justify-content space-between
    background-color white
    .row2
      flex 0 0 75%
      height 100px
      display flex
      flex-direction column
      justify-content  center
      .creator
        font-size 12px
        margin-top 7px
      .list-name
        width 250px
        height 40px
    .row1
      flex 0 0 22%
      height 100px
      display flex
      justify-content flex-end
      align-items center
      .img
        border-radius 5px
        width 75px
        height 75px
</style>
