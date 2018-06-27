<template>
  <div class="content">
    <div class="content-item" :style="backColor">
      <img id="image" :style="styleObject" class="img" :src="this.coverImgUrl"/>
      <div class="playCount" :style="styleObject">
        <img class="headset" src="../../../assets/icon/headset.svg"/>
        <span class="play-count">{{playCount}}</span>
      </div>
      <div class="info-content" :style="styleObject">
        <div class="list-name">{{listName}}</div>
        <img class="creator-img" :src="creatorInfo.avatarUrl"/>
        <span class="nickname">{{creatorInfo.nickname}}</span>
      </div>
      <song-list-button :style="styleObject"></song-list-button>
    </div>
    <song-list></song-list>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import RGBaster from '../../../assets/js/rgbaster';
import Bus from '../Bus/Bus';
import SongListButton from './SongListButton';
import SongList from './SongList';

export default {
  name: 'SongListInfo',
  data() {
    return {
      backColor: {
        backgroundColor: 'gray',
      },
      styleObject: {
        opacity: 1,
      },
    };
  },
  components: {
    SongListButton,
    SongList,
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
  mounted() {
    document.addEventListener('scroll', this.handleScroll);
    const img = document.getElementById('image');
    let color = '';
    RGBaster.colors(img, {
      // paletteSize: 50,
      exclude: ['rgb(255,255,255)', 'rgb(0,0,0)'],
      success(payload) {
        // payload.dominant是主色，RGB形式表示
        // payload.secondary是次色，RGB形式表示
        // payload.palette是调色板，含多个主要颜色，数组
        // const colorArr = payload.palette;
        color = payload.secondary;
        // console.log(payload.palette);
      },
    });
    this.timeFn = setInterval(() => {
      if (color) {
        this.$store.commit('GET_COLOR', color);
        Bus.$emit('handleGetColor', color);
        this.backColor.backgroundColor = color;
        clearInterval(this.timeFn);
      }
    }, 100);
  },
  methods: {
    handleScroll() {
      const top = document.body.scrollTop + document.documentElement.scrollTop;
      this.styleObject.opacity = 1 - (top / 250).toFixed(2);
    },
  },
};
</script>
<style scoped lang="stylus">
  .content
    width 100%
    position relative
    -webkit-box-sizing: border-box
    -moz-box-sizing: border-box
    box-sizing: border-box
    .content-item
      position relative
      -webkit-box-sizing: border-box
      -moz-box-sizing: border-box
      padding-top 40px;
      box-sizing: border-box
      background-color gray
      color white
      width 100%
      height 250px
      .info-content
        position absolute;
        left 125px;
        top 70px;
        width 220px;
        color white;
        font-size 16px;
        .list-name
          width 200px;
          height 40px;
        .creator-img
          width 25px;
          height 25px;
          border-radius 50%;
          margin-top 10px;
        .nickname
          font-size 14px;
          position absolute;
          top 53px;
          left 30px;
      .playCount
        width 100px
        text-align right
        position absolute
        top 60px
        left 10px
        color white
        font-size 10px
        padding-right 10px
        .headset
          position relative
          top 3px
      .img
        position absolute
        top 60px
        left 15px
        width 100px
        height 100px
</style>
