<template>
  <div class="wrapper">
    <div class="list-header">
      官方榜
    </div>
    <div class="list-content">
      <div class="official-list" v-for="item in officialList"
           :key="item.id">
        <div class="img-wrapper">
          <img class="img" :src="item.coverImgUrl"/>
          <div class="img-update">
            {{item.updateFrequency}}
          </div>
        </div>
        <div class="song-list">
          <div class="list-item" v-for="(list, index) in item.tracks" :key="list.id">
            {{index + 1}}. {{list.name}} - {{list.ar[0].name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'OfficialList',
  data() {
    return {
      officialList: [],
    };
  },
  computed: {
    ...mapState({
      imageList: state => state.rankingList.coverImageList,
      rankingListSong: state => state.rankingList.rankingListSong,
    }),
  },
  mounted() {
    this.$store.dispatch('get_coverImage').then(() => {
      this.$store.dispatch('get_officialRankingList', { idx: 3 }).then(() => {
        this.$store.dispatch('get_officialRankingList', { idx: 0 }).then(() => {
          this.$store.dispatch('get_officialRankingList', { idx: 1 }).then(() => {
            this.$store.dispatch('get_officialRankingList', { idx: 2 }).then(() => {
              this.$store.dispatch('get_officialRankingList', { idx: 4 }).then(() => {
                this.$store.dispatch('get_officialRankingList', { idx: 23 }).then(() => {
                  // setTimeout(() => {
                  //   this.officialList = this.handleData();
                  // }, 500);
                  this.officialList = this.imageList.slice(0, 6);
                });
              });
            });
          });
        });
      });
    });
  },
  methods: {
    handleData() {
      const data1 = this.imageList.slice(0, 6);
      const data2 = this.rankingListSong;
      data1.forEach((item, index) => {
        const obj = {
          tracks: [],
        };
        obj.tracks = data2[index + 1];
        Object.assign(item, obj);
      });
      return data1;
    },
  },
};
</script>
<style scoped lang="stylus">
  .wrapper
    width 98%
    position relative;
    top 60px
    padding-left 5px
    .list-header
      width 100%;
      font-size 17px
      font-weight bold
      margin-bottom 10px
    .list-content
      width 100%
      .official-list
        -webkit-box-sizing: border-box
        -moz-box-sizing: border-box
        box-sizing: border-box
        width 100%
        height 100px
        display flex
        border-bottom 1px solid #cfcfc9
        align-items flex-end
        .song-list
          flex 0 0 70%;
          -webkit-box-sizing: border-box
          -moz-box-sizing: border-box
          box-sizing: border-box
          height 80px
          font-size 14px
          display flex
          flex-direction column
          .list-item
            flex 1
            color #888
        .img-wrapper
          width 110px
          height 100px
          display flex
          align-items flex-end
          position relative
          .img
            width 100px
            height 95px
            border-radius 5px
          .img-update
            -webkit-box-sizing: border-box
            -moz-box-sizing: border-box
            box-sizing: border-box
            color white
            display flex
            align-items flex-end
            padding-left 5px
            padding-bottom 5px
            font-size 12px
            width 100px
            height 95px
            position absolute
            top 5px
            left 0
</style>
