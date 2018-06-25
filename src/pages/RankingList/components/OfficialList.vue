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
          <div class="song-list">
          </div>
          <div class="img-update">
            {{item.updateFrequency}}
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
    };
  },
  computed: {
    ...mapState({
      imageList: state => state.rankingList.coverImageList,
    }),
    officialList() {
      return this.imageList.slice(0, 6);
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
