<template>
  <div class="wrapper">
    <song-list-header :bgColor="bgColor"></song-list-header>
    <song-list-info></song-list-info>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import SongListHeader from './components/SongListHeader';
import SongListInfo from './components/SongListInfo';

export default {
  name: 'SongsList',
  components: {
    SongListHeader,
    SongListInfo,
  },
  computed: {
    ...mapState({
      bgColor: state => state.songsDetails.backgroundColor,
    }),
  },
};
</script>
<style scoped lang="stylus">
</style>
