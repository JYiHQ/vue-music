<template>
  <div class="header">
    <div class="header-btn">
      <img class="img menu" src="../../../assets/icon/menu.svg"/>
      <img class="img music" src="../../../assets/icon/music.svg"/>
      <img class="img wangyi" src="../../../assets/icon/wangyi.svg"/>
      <img class="img player" src="../../../assets/icon/player.svg"/>
      <img class="img search" src="../../../assets/icon/search.svg"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader',
};
</script>
<style scoped lang="stylus">
  .header
    width: 100%;
    height: 38px;
    background-color :#d43c33;
    padding-top : 10px;
    .header-btn
      position :relative;
      .img
        width :20px;
        height :20px;
      .menu
        position :absolute;
        left:15px;
      .music
        position :absolute;
        left:120px;
      .wangyi
        width :25px;
        height :25px;
        position :absolute;
        top: -3px;
        left:190px;
      .player
        width :22px;
        height :22px;
        position :absolute;
        top: -2px;
        left:250px;
      .search
        position :absolute;
        left:340px;
</style>
