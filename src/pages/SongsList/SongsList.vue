<template>
  <div class="list-wrapper">
    <div class="row">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SongsList',
};
</script>
<style scoped lang="stylus">
  .row
    display flex;
    flex-flow row wrap;
    margin-right 5px;
    .item
     width 45%;
     height 100px;
     border 1px solid black;
</style>
