<template>
  <div class="wrapper">
    <songs-header></songs-header>
    <!--<songs-list></songs-list>-->
    <div class="list-wrapper">
      <div class="row">
        <div class="item" v-for="item in listData" :key="item.id">
          <img class="img" :src="item.coverImgUrl"/>
          <div class="img-text">{{item.name}}</div>
          <div class="playCount">
            <img class="play-img" src="../../assets/icon/headset.svg"/>
            <span>{{item.playCount}}</span>
            <div class="user">
              <img class="play-img" src="../../assets/icon/user.svg"/>
              <span>{{item.creator.nickname}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import SongsHeader from './components/SongsHeader';
import VHeader from '../../components/header/VHeader';
// import SongsList from './SongsList';

export default {
  name: 'SongsList',
  components: {
    SongsHeader,
    VHeader,
    // SongsList,
  },
  data() {
    return {
      headerSong: {},
      unit: '万',
    };
  },
  mounted() {
    this.$store.dispatch('get_highQualitySong', { limit: 20 }).then(() => {
      this.headerSong = this.songsData[0];
    });
  },
  computed: {
    ...mapState({
      songsData: state => state.songList.songsList,
    }),
    listData() {
      const data = this.songsData;
      const obj = {
        playCount: 0,
      };
      data.forEach((itemData) => {
        if (itemData.playCount > 100000) {
          obj.playCount = (Math.ceil(itemData.playCount / 10000) - 1) + this.unit;
          Object.assign(itemData, obj);
        }
      });
      return data;
    },
  },
};
</script>
<style scoped lang="stylus">
  .row
    display flex;
    flex-flow row wrap;
    margin-left 8px;
    .item
      position relative;
      -webkit-box-sizing: border-box
      -moz-box-sizing: border-box
      box-sizing: border-box
      width 48%;
      height 200px;
      margin-right 5px;
      margin-bottom 10px;
      font-size 12px;
      color rgba(67,68,66,0.83);
      .img
        width 100%;
        height 160px;
      .img-text
        padding-left 3px;
      .playCount
        width 94%;
        height 160px;
        padding-right 10px;
        box-shadow:inset 0 2px 50px #000;
        color white;
        text-align right;
        position absolute;
        top 0;
        left 0;
        .play-img
          position relative;
          top 3px;
        .user
          position absolute;
          top 135px;
          left 5px;
</style>
