<template>
  <div class="header">
    <v-header :headerText="headerText"></v-header>
    <div class="content" :style="styleObject">
      <img id="image" class="img" :src="headerSong.coverImgUrl"/>
      <div class="figure">
        <div class="figure-content">
          <span>精品歌单</span>
          <img class="figure-img" src="../../assets/icon/arrow-right.svg"/>
        </div>
        <div class="figure-name">
          <span>{{headerSong.name}}</span>
        </div>
        <!--<div class="figure-description">-->
          <!--{{headerSong.description}}-->
        <!--</div>-->
      </div>
    </div>
    <div class="tag-wrapper">
      <button class="btn">
        {{btnText}}
        <img src="../../assets/icon/arrow_black.svg"/>
      </button>
      <div class="tags-list">
        <div class="tags" v-for="tag in tags" :key="tag.id">
          {{tag.name}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VHeader from '../../components/header/VHeader';
// import RGBaster from '../../../assets/js/rgbaster';

export default {
  name: 'SongsHeader',
  props: ['headerSong'],
  components: {
    VHeader,
  },
  data() {
    return {
      headerText: '歌单',
      styleObject: {
        backgroundColor: '',
      },
      timeFn: null,
      btnText: '全部歌单',
      tags: [
        {
          id: 10,
          name: '欧美',
        },
        {
          id: 20,
          name: '影视原声',
        },
        {
          id: 30,
          name: '电子',
        },
      ],
    };
  },
  mounted() {
    // const img = document.getElementById('image');
    // let color = '';
    // RGBaster.colors(img, {
    //   // paletteSize: 50,
    //   exclude: ['rgb(255,255,255)', 'rgb(0,0,0)'],
    //   success(payload) {
    //     // payload.dominant是主色，RGB形式表示
    //     // payload.secondary是次色，RGB形式表示
    //     // payload.palette是调色板，含多个主要颜色，数组
    //     // const colorArr = payload.palette;
    //     color = payload.secondary;
    //     console.log(color);
    //   },
    // });
    // this.timeFn = setInterval(() => {
    //   if (color) {
    //     this.styleObject.backgroundColor = color;
    //   }
    //   clearInterval(this.timeFn);
    // }, 100);
  },
};
</script>
<style scoped lang="stylus">
  .content
    width 100%;
    height 115px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display flex;
    align-items flex-start;
    background-color rgba(20,105,175,0.83)
    .img
      width 90px;
      height 90px;
      margin 15px 10px 10px 10px;
      border-radius 5px;
    .figure
       flex 1;
       height 115px;
       -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
       box-sizing: border-box;
       position relative;
      .figure-content
         margin-top 20px;
         color white;
         .figure-img
           width 15px;
           height 15px;
      .figure-name
        margin-top 10px;
        color white;
  .tag-wrapper
    width 100%;
    height 48px;
    position relative;
    .btn
      outline none;
      background-color white;
      border: 1px solid rgba(182,183,181,0.83);
      border-radius 10px;
      line-height 20px;
      position absolute;
      top 15px;
      left 10px;
    .tags-list
      color rgba(78,79,77,0.83);
      position absolute;
      top 15px;
      left 200px;
      .tags
        display inline;
        text-align center;
        border-right 1px solid rgba(182,183,181,0.83);
        font-size 14px;
        padding 0 6px;
        line-height 20px;
</style>
