<template>
  <div class="wrapper">
    <img id="image" class="img" :src="this.coverImgUrl"/>
    <div class="header" :style="styleObject">
      <list-header></list-header>
      <list-info></list-info>
      <list-button></list-button>
    </div>
    <songs-list></songs-list>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import RGBaster from '../../assets/js/rgbaster';
import ListHeader from './components/ListHeader';
import ListInfo from './components/ListInfo';
import ListButton from './components/ListButton';
import SongsList from './components/SongsList';

export default {
  name: 'SongsListDetails',
  components: {
    ListHeader,
    ListInfo,
    ListButton,
    SongsList,
  },
  data() {
    return {
      backColor: 'rgb(112,103,113)',
      styleObject: {
        backgroundColor: '',
      },
      timeFn: null,
    };
  },
  computed: {
    ...mapState({
      coverImgUrl: state => state.songsDetails.coverImgUrl,
    }),
  },
  mounted() {
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
        this.styleObject.backgroundColor = color;
        clearInterval(this.timeFn);
      }
    }, 100);
  },
};
</script>
<style scoped lang="stylus">
  .wrapper
    padding 0;
    .img
      width 100%;
      display none;
    .header
      width 100%;
      height 260px;
</style>
