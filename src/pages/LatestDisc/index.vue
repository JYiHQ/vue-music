<template>
  <div class="wrapper">
    <v-header :headerText="headerText"></v-header>
    <latest-content></latest-content>
  </div>
</template>
<script>
import VHeader from '../../components/header/VHeader';
import LatestContent from './components/LatestDiscContent';

export default {
  name: 'LatestDisc',
  components: {
    VHeader,
    LatestContent,
  },
  data() {
    return {
      headerText: '新碟上架',
    };
  },
};
</script>
<style scoped lang="stylus">
</style>
