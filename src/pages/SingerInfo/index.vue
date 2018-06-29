<template>
  <div class="wrapper">
    <singer-info-header></singer-info-header>
    <singer-info-content></singer-info-content>
  </div>
</template>
<script>
import SingerInfoHeader from './components/SingerInfoHeader';
import SingerInfoContent from './components/SingerInfoContent';

export default {
  name: 'SingerInfo',
  components: {
    SingerInfoHeader,
    SingerInfoContent,
  },
};
</script>
<style scoped lang="stylus">
</style>
