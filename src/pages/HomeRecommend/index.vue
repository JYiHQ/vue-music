<template>
  <div>
    <home-swoimg-map></home-swoimg-map>
    <home-buttons></home-buttons>
    <home-songs-list></home-songs-list>
    <latest-music-list></latest-music-list>
  </div>
</template>
<script>
import HomeSwoimgMap from './components/HomeSowingMap';
import HomeButtons from './components/HomeButtons';
import HomeSongsList from './components/HomeSongsList';
import LatestMusicList from './components/LatestMusicList';

export default {
  name: 'HomeRecommend',
  components: {
    HomeSwoimgMap,
    HomeButtons,
    HomeSongsList,
    LatestMusicList,
  },
};
</script>
