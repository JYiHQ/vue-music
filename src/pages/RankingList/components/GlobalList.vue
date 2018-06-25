<template>
  <div class="wrapper">
    <div class="list-header">
      全球榜
    </div>
    <div class="list-wrapper">
      <div class="item" v-for="item in globalList"
           :key="item.id">
        <img class="img" :src="item.coverImgUrl"/>
        <div class="img-text">
          {{item.name}}
        </div>
        <div class="img-update">
          <span>{{item.updateFrequency}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'GlobalList',
  computed: {
    ...mapState({
      imageList: state => state.rankingList.coverImageList,
    }),
    globalList() {
      return this.imageList.slice(6, this.imageList.length);
    },
  },
};
</script>
<style scoped lang="stylus">
  .wrapper
    width 98%
    height 100px
    position relative
    top 95px;
    padding-left 5px
    .list-header
      width 100%;
      font-size 17px
      font-weight bold
      margin-bottom 15px
    .list-wrapper
      width 100%
      display flex
      flex-flow wrap
      .item
        flex 0 0 32.5%
        margin-right 3px
        margin-bottom 10px
        position relative
        .img
          width 100%;
          height 110px;
        .img-text
          width 100%
          padding-left  5px
          height 32px
          font-size 12px
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
          box-shadow:inset 0 -2px 50px #000;
          width 100%
          height 110px
          position absolute
          top 0
          left 0
</style>
