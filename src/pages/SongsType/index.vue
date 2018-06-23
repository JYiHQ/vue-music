<template>
  <div class="wrapper">
    <v-header :headerText="headerText"></v-header>
    <type-list></type-list>
  </div>
</template>
<script>
import VHeader from '../../components/header/VHeader';
import TypeList from './components/TypeList';

export default {
  name: 'SongsType',
  components: {
    VHeader,
    TypeList,
  },
  data() {
    return {
      headerText: '选择分类',
    };
  },
};
</script>
<style scoped lang="stylus">
  @import "../../assets/styl/songsTypes.styl";
</style>
