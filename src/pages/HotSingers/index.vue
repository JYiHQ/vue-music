<template>
  <div class="wrapper">
    <v-header :headerText="headerText"></v-header>
    <hot-singers-list></hot-singers-list>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import VHeader from '../../components/header/VHeader';
import HotSingersList from './components/HotSingersList';

export default {
  name: 'HotSingers',
  components: {
    VHeader,
    HotSingersList,
  },
  computed: {
    ...mapState({
      headerText: state => state.hotSingers.headerText,
    }),
  },
};
</script>
<style scoped lang="stylus">
</style>
