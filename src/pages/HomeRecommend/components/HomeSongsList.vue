<template>
  <div class="wrapper">
    <div class="header">
      <h4>推荐歌单</h4>
      <img class="img" src="../../../assets/icon/arrow-right.svg"/>
    </div>
    <div class="content">
      <div class="row">
        <div class="item" v-for="song in list" :key="song.id" @click="handleClick(song.id)">
          <img class="item-img" :src="song.picUrl"/>
          <span class="item-text">{{song.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import RecommendHeader from './recommendHeader';

export default {
  name: 'RecommendHeader',
  components: {
    RecommendHeader,
  },
  data() {
    return {
      list: [],
    };
  },
  computed: {
    ...mapState({
      songsList: state => state.home.songList,
    }),
  },
  mounted() {
    this.$store.dispatch('get_songsList').then(() => {
      this.list = this.songsList.slice(0, 6);
    });
  },
  methods: {
    handleClick(listId) {
      this.$store.dispatch('get_listDetails', { id: listId }).then(() => {
        this.$router.push('/listDetails');
      });
    },
  },
};
</script>
<style scoped lang="stylus">
  .wrapper
    position relative;
    top 65px;
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
