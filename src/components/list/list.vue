<template>
  <div class="wrapper">
    <div class="row" v-for="(item, index) in songList" :key="item.id">
      <div>{{index}}</div>
      <div></div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'VList',
  computed: {
    ...mapState({
      songList: state => state.songsDetails.songList,
    }),
  },
};
</script>
<style scoped lang="stylus">
</style>
