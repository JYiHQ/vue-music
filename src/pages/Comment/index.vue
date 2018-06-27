<template>
  <div class="wrapper">
    <comment-header></comment-header>
    <comment-content></comment-content>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import CommentHeader from './comments/CommentHeader';
import CommentContent from './comments/CommentContent';

export default {
  name: 'Comment',
  components: {
    CommentHeader,
    CommentContent,
  },
  data() {
    return {
      headerText: '评论',
    };
  },
  computed: {
    ...mapState({
    }),
  },
};
</script>
<style scoped lang="stylus">
</style>
