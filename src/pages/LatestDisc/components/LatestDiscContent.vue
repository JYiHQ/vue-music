<template>
  <div class="wrapper">
    <div class="header">本周新碟</div>
    <div class="content">
      <div class="row">
        <div class="item" v-for="item in listData" :key="item.id" @click="getAlbumDetail(item.id)">
          <img class="item-content" :src="item.picUrl"/>
          <div class="item-text">
            <div class="play-name">{{item.name}}</div>
            <div class="artists-name">{{item.artistName}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LatestDiscContent',
  data() {
    return {
      listData: [],
    };
  },
  created() {
    // 请求数据
    this.$store.dispatch('get_latestDisc').then(() => {
      this.listData = this.$store.state.latestDisc.DiscList;
    });
  },
  methods: {
    getAlbumDetail(albumId) {
      this.$store.dispatch('get_albumSong', { id: albumId }).then(() => {
        this.$router.push('/albumSongList');
      });
    },
  },
};
</script>
<style scoped lang="stylus">
  .wrapper
    width 100%
    height 900px
    position relative
    top 44px
    -webkit-box-sizing: border-box
    -moz-box-sizing: border-box
    box-sizing: border-box
    .content
      width 100%
      .row
        width 100%
        display flex
        flex-flow wrap
        justify-content space-between
        .item
          flex 0 0 45%
          min-height 160px
          margin-bottom 5px
          .item-text
            width 150px
            height 60px
            -webkit-box-sizing: border-box
            -moz-box-sizing: border-box
            box-sizing: border-box
            margin-left 10px
            .artists-name
              font-size 12px
              margin-top 5px
            .play-name
              font-size 14px
              width 150px
              height 20px
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
          .item-content
            width 150px
            height 120px
            -webkit-box-sizing: border-box
            -moz-box-sizing: border-box
            box-sizing: border-box
            margin-left 10px
    .header
      height 40px
      padding-left 10px
      line-height 40px
      font-weight bold
</style>
