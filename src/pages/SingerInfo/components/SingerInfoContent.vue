<template>
  <div class="wrapper">
    <img class="img" :src="imgUrl"/>
    <div class="dialog"></div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import Bus from '../../../assets/js/Bus';

export default {
  name: 'SingerInfoContent',
  data() {
    return {
      value: '123',
      info: {},
      imgUrl: '',
    };
  },
  computed: {
    ...mapState({
      singerInfo: state => state.hotSingers.singerInfo,
    }),
  },
  mounted() {
    Bus.$on('getSingerInfo', () => {
      Object.assign(this.info, this.singerInfo);
      this.imgUrl = this.singerInfo.picUrl;
    });
  },
};
</script>
<style scoped lang="stylus">
  .wrapper
    width 100%
    position relative
    .img
      width 100%
      height 340px
    .dialog
      width 100%
      height 340px
      position absolute
      top 0
      background-color rgba(232,231,231,0.64)
</style>
