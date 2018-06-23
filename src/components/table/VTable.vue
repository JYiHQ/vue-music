<template>
  <div class="wrapper">
    <table border class="table">
      <tr v-for="row in tableData" :key="row.id">
        <td v-for="(item, index) in row" :key="index">
          {{item.name}}
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: 'VTable',
  props: ['tableData'],
};
</script>
<style scoped lang="stylus">
  .table
    width 100%;
    border-collapse collapse;
    td
      text-align center;
      vertical-align middle;
      width 25%;
      height 40px;
</style>
