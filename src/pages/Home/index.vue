<template>
  <div class="wrapper">
    <home-header></home-header>
    <home-content></home-content>
    <home-recommoned></home-recommoned>
  </div>
</template>
<script>
import HomeHeader from './components/HomeHeader';
import HomeContent from './components/HomeContent';
import HomeRecommoned from './HomeRecommoned/index';

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeContent,
    HomeRecommoned,
  },
  mounted() {
    this.$store.dispatch('get_songsList');
    this.$store.dispatch('get_latestMusic');
    this.$store.dispatch('get_radioStation');
    this.$store.dispatch('get_sowingMap');
  },
};
</script>
<style scoped lang="stylus">
</style>
