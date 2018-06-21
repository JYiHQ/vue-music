<template>
  <div class="wrapper">
    <div class="row" v-for="(item, index) in listData" :key="item.id">
      <div>{{index}}</div>
      <div></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VList',
};
</script>
<style scoped lang="stylus">
</style>
