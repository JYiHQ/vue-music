<template>
  <div class="wrapper">
    <v-header :headerText="headerText"></v-header>
    <official-list></official-list>
    <global-list></global-list>
  </div>
</template>
<script>
import VHeader from '../../components/header/VHeader';
import OfficialList from './components/OfficialList';
import GlobalList from './components/GlobalList';

export default {
  name: 'RankingList',
  components: {
    VHeader,
    OfficialList,
    GlobalList,
  },
  data() {
    return {
      headerText: '排行榜',
    };
  },
  mounted() {
    this.$store.dispatch('get_coverImage');
  },
};
</script>
<style scoped lang="stylus">
  .wrapper >>> .header
                 position fixed;
                 top 0;
                 z-index 999;
  .wrapper
    width 100%;
</style>
