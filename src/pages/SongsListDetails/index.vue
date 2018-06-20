<template>
  <div class="wrapper">
    <img id="image" class="img" :src="this.coverImgUrl"/>
    <div class="header" :style="styleObject">
      <list-header></list-header>
      <list-info></list-info>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import RGBaster from '../../assets/js/rgbaster';
import ListHeader from './components/ListHeader';
import ListInfo from './components/ListInfo';

export default {
  name: 'SongsListDetails',
  components: {
    ListHeader,
    ListInfo,
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
      paletteSize: 30,
      exclude: ['rgb(255,255,255)', 'rgb(0,0,0)'],
      success(payload) {
        // payload.dominant是主色，RGB形式表示
        // payload.secondary是次色，RGB形式表示
        // payload.palette是调色板，含多个主要颜色，数组
        color = payload.dominant;
      },
    });
    this.timeFn = setInterval(() => {
      if (color) {
        this.styleObject.backgroundColor = color;
      }
      clearInterval(this.timeFn);
    }, 100);
  },
};
</script>
<style scoped lang="stylus">
  .wrapper
    .img
      width 100%;
      display none;
    .header
      width 100%;
      height 200px;
</style>
