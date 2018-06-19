<template>
  <div class="wrapper">
    <home-header>
    </home-header>
    <home-content>
    </home-content>
    <home-recommend>
    </home-recommend>
  </div>
</template>
<script>
import HomeHeader from './components/HomeHeader';
import HomeContent from './components/HomeContent';
import HomeRecommend from './components/HomeRecommend';

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeContent,
    HomeRecommend,
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
