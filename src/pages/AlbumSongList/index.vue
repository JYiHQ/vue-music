<template>
  <div class="wrapper">
    <album-song-header></album-song-header>
    <album-song-info></album-song-info>
    <album-song-list></album-song-list>
  </div>
</template>
<script>
import AlbumSongHeader from './components/AlbumSongHeader';
import AlbumSongInfo from './components/AlbumSongInfo';
import AlbumSongList from './components/AlbumSongList';

export default {
  name: 'AlbumSongList',
  components: {
    AlbumSongHeader,
    AlbumSongInfo,
    AlbumSongList,
  },
};
</script>
