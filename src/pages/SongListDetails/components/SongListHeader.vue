<template>
  <div>
    <div class="header-wrapper" :style="styleObject">
    </div>
    <div class="header-img">
      <img @click="handleBack" class="imgLeft" src="../../../assets/icon/jiantouzuo.svg"/>
      <div class="headerText">
        <div class="text1">{{headerText}}</div>
        <div class="text2">{{textTip}}</div>
      </div>
      <img class="img" src="../../../assets/icon/search.svg"/>
      <img class="img2" src="../../../assets/icon/more.svg"/>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'SongListHeader',
  data() {
    return {
      styleObject: {
        backgroundColor: 'rgb(37,35,40)',
        opacity: 0,
        color: '#000',
      },
      headerText: '歌单',
      textTip: '编辑推荐：优质华语新歌优质华语新歌优质华语新歌优质华语新歌',
    };
  },
  mounted() {
    document.addEventListener('scroll', this.handleScroll);
  },
  computed: {
    ...mapState({
      bgColor: state => state.songsDetails.backgroundColor,
    }),
  },
  methods: {
    handleScroll() {
      const top = document.body.scrollTop + document.documentElement.scrollTop;
      const result = (top / 200).toFixed(2);
      this.styleObject.opacity = result;
    },
    handleBack() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped lang="stylus">
  .header-wrapper
    width 100%
    height 48px
    position fixed
    top 0
    z-index: 999
  .header-img
    position fixed
    top 0;
    z-index: 999
    .img2
      width 25px;
      height 25px;
      position absolute;
      top 14px;
      left 340px;
    .img
      width 30px;
      height 30px;
      position absolute;
      top 12px;
      left 290px;
    .headerText
      width 190px
      color white
      position absolute
      top 5px
      left 60px
      .text2
        font-size 10px
        width 190px
        height 20px
        white-space nowrap
        overflow hidden
        text-overflow:ellipsis;
    .imgLeft
      width 30px
      height 30px
      position absolute
      left 10px
      top 10px
</style>
