<template>
  <div class="wrapper">
    <v-header :headerText="headerText"></v-header>
    <latest-disc-content></latest-disc-content>
  </div>
</template>
<script>
import VHeader from '../../components/header/VHeader';
import LatestDiscContent from './components/LatestDiscContent';

export default {
  name: 'LatestDisc',
  components: {
    VHeader,
    LatestDiscContent,
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
