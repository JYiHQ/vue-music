<template>
  <div class="content-wrapper">
    <song-list-info></song-list-info>
    <comment-info></comment-info>
  </div>
</template>
<script>
import SongListInfo from './SongListInfo';
import CommentInfo from './CommentInfo';

export default {
  name: 'ContentWrapper',
  components: {
    SongListInfo,
    CommentInfo,
  },
};
</script>
<style scoped lang="stylus">
  .content-wrapper
    position relative
    top 39px
    width 100%
    height 900px
    background-color #f4f2f4
</style>
