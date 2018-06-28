<template>
  <div class="wrapper">
    <div class="content">
      <div class="imgWrapper">
        <img class="img" :src="album.picUrl"/>
      </div>
      <div class="imgWrapper1">
        <div>{{album.name}}</div>
        <div class="artistName">
          <span>歌手：</span>
          <span>{{artistName}}</span>
        </div>
        <div class="time">
          <span>发行时间：</span>
          <span>{{publishTime}}</span>
        </div>
      </div>
    </div>
    <album-song-button></album-song-button>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import AlbumSongButton from './AlbumSongButton';

export default {
  name: 'AlbumSongInfo',
  components: {
    AlbumSongButton,
  },
  computed: {
    ...mapState({
      album: state => state.latestDisc.album,
    }),
    artistName() {
      const arr = this.album.artists;
      const newArr = [];
      let str = '';
      if (arr.length > 1) {
        arr.forEach((item) => {
          newArr.push(item.name);
        });
        str = newArr.join('/');
      } else {
        str = arr[0].name;
      }
      return str;
    },
    publishTime() {
      let time = new Date(this.album.publishTime).toLocaleDateString();
      time = time.replace(/\//g, '.');
      return time;
    },
  },
};
</script>
<style scoped lang="stylus">
  .wrapper
    width 100%
    position relative
    top 38px
    background-color #e2e1e5
    .content
      width 100%
      display flex
      .imgWrapper1
        font-weight bold
        color white
        margin-top 20px
        flex 0 0 50%
        height 150px
        .time
          margin-top 10px
          width 175px
          height 20px
          font-weight normal
          font-size 14px
        .artistName
          margin-top 20px
          width 175px
          height 20px
          white-space nowrap
          text-overflow ellipsis
          overflow hidden
          font-weight normal
          font-size 14px
      .imgWrapper
        font-weight bold
        color white
        margin-top 20px
        flex 0 0 37%
        height 150px
        .img
          margin-left 15px
          border-radius 3px
          width 100px
          height 100px
</style>
