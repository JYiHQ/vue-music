<template>
  <div class="wrapper">
    <songs-header :headerSong="headerSong"></songs-header>
    <songs-list></songs-list>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import SongsHeader from './SongsHeader';
import SongsList from './SongsList';

export default {
  name: 'SongsList',
  components: {
    SongsHeader,
    SongsList,
  },
  data() {
    return {
      headerSong: {},
    };
  },
  mounted() {
    this.$store.dispatch('get_highQualitySong').then(() => {
      this.headerSong = this.songsData[0];
    });
  },
  computed: {
    ...mapState({
      songsData: state => state.songList.songsList,
    }),
  },
};
</script>
<style scoped lang="stylus">
</style>
