<template>
  <div class="wrapper">
    <div class="row" v-for="(item, index) in songList" :key="item.id">
      <div class="item-header">{{index + 1}}</div>
      <div class="item-content">
        <div class="content">
          <div class="text1">{{item.name}}</div>
          <div class="content-text">{{item.ar[0].name}} - {{item.al.name}}</div>
        </div>
        <div class="item">
          <img class="img" src="../../assets/icon/player_black.svg" v-show="item.no === 1"/>
        </div>
        <div class="item">
          <img class="img" src="../../assets/icon/more_gray.svg"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VList',
  props: ['songList'],
};
</script>
<style scoped lang="stylus">
  .row
    display flex;
    width 100%
    .item-header
      flex 0 0 15%;
      height 55px;
      display flex;
      justify-content center;
      align-items center;
      color #9e9e98;
    .item-content
      flex 0 0 85%;
      display flex;
      height 55px;
      border-bottom 1px solid #c8c8c2;
      .item
        flex 0 0 10%;
        display flex;
        height 55px;
        justify-content center;
        align-items center;
        .img
          width 20px;
          height 20px;
      .content
        flex 0 0 245px;
        font-size 14px;
        display flex;
        flex-direction column;
        justify-content center;
        .text1
          width 245px;
          height 25px;
          font-size 17px;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
          line-height 25px;
        .content-text
          width 245px;
          height 25px;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
          line-height 25px;
          font-size 12px;
          color #888;
</style>
