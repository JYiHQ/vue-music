<template>
  <div class="wrapper">
    <v-header :headerText="headerText"></v-header>
    <singer-type-content></singer-type-content>
  </div>
</template>
<script>
import VHeader from '../../components/header/VHeader';
import SingerTypeContent from './components/SingerTypeContent';

export default {
  name: 'SingerType',
  components: {
    VHeader,
    SingerTypeContent,
  },
  data() {
    return {
      headerText: '歌手分类',
    };
  },
};
</script>
<style scoped lang="stylus">
  .wrapper
    background-color #efeef2
</style>
