<template>
  <div class="wrapper">
    <v-header :headerText="headerText"></v-header>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import VHeader from '../../components/header/VHeader';

export default {
  name: 'HotSingers',
  components: {
    VHeader,
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
