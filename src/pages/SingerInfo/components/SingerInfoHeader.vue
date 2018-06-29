<template>
  <div class="header-wrapper">
    <img @click="backPreviousPage" class="img" src="../../../assets/icon/jiantouzuo.svg"/>
    <span class="span-text">{{contentText}}</span>
    <img class="left" src="../../../assets/icon/share.svg"/>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import Bus from '../../../assets/js/Bus';

export default {
  name: 'SingerInfoHeader',
  data() {
    return {
      contentText: '',
      right: ' ( ',
      left: ' ) ',
    };
  },
  computed: {
    ...mapState({
      singerInfo: state => state.hotSingers.singerInfo,
    }),
  },
  mounted() {
    Bus.$on('getSingerInfo', () => {
      if (this.singerInfo.alias.length > 0) {
        this.contentText = this.singerInfo.name + this.right +
          this.singerInfo.alias[this.singerInfo.alias.length - 1] + this.left;
      } else {
        this.contentText = this.singerInfo.name;
      }
    });
  },
  methods: {
    backPreviousPage() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped lang="stylus">
  .header-wrapper
    width 100%
    height 45px
    position fixed
    top 0
    z-index: 999
    .img
      width 30px
      height 30px
      position absolute
      top 8px
      left 15px
    .span-text
      color white
      position absolute
      top 11px
      left 60px
    .left
      width 25px
      height 25px
      position absolute
      top 10px
      left 330px
</style>
