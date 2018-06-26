<template>
  <div class="wrapper">
    <song-list-header></song-list-header>
    <song-list-info></song-list-info>
  </div>
</template>
<script>
import SongListHeader from './components/SongListHeader';
import SongListInfo from './components/SongListInfo';

export default {
  name: 'SongsList',
  components: {
    SongListHeader,
    SongListInfo,
  },
};
</script>
<style scoped lang="stylus">
</style>
