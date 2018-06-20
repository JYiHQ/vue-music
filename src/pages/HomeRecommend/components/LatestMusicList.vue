<template>
  <div class="wrapper">
    <div class="header">
      <h4>最新音乐</h4>
      <img class="img" src="../../../assets/icon/arrow-right.svg"/>
    </div>
    <div class="content">
      <div class="row">
        <div class="item" v-for="music in list" :key="music.id">
          <img class="item-img" :src="music.picUrl"/>
          <span class="item-text">{{music.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'LatestMusicList',
  data() {
    return {
      list: [],
    };
  },
  computed: {
    ...mapState({
      latestMusic: state => state.home.latestMusic,
    }),
  },
  mounted() {
    this.$store.dispatch('get_latestMusic').then(() => {
      this.list = this.latestMusic.slice(0, 6);
    });
  },
};
</script>
<style scoped lang="stylus">
  .wrapper
    position relative;
    top: 60px;
    .header
      position relative;
      padding-left 10px;
      .img
        width 15px;
        height 15px;
        position absolute;
        top 3px;
        left 80px;
    .content
      display flex;
      flex-direction column;
      .row
        width 97%;
        margin-bottom 10px;
        padding-left 10px;
        display flex;
        flex-flow row wrap;
        .item
          width 32.9%;
          height 120px;
          margin-bottom 30px;
          text-overflow clip;
          .item-img
            width 98%;
            height 100px;
          .item-text
            font-size 12px;
</style>
