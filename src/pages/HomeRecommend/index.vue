<template>
  <div>
    <home-swoimg-map></home-swoimg-map>
    <home-buttons></home-buttons>
    <home-songs-list></home-songs-list>
    <latest-music-list></latest-music-list>
    <radio-station-list></radio-station-list>
  </div>
</template>
<script>
import HomeSwoimgMap from './components/HomeSowingMap';
import HomeButtons from './components/HomeButtons';
import HomeSongsList from './components/HomeSongsList';
import LatestMusicList from './components/LatestMusicList';
import RadioStationList from './components/RadioStationList';

export default {
  name: 'HomeRecommend',
  components: {
    HomeSwoimgMap,
    HomeButtons,
    HomeSongsList,
    LatestMusicList,
    RadioStationList,
  },
};
</script>
