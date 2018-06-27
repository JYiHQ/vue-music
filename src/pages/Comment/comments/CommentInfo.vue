<template>
  <div class="comment-content">
    <div class="header1">精彩评论</div>
    <div class="hot-comment">
      <div class="hot-item" v-for="item in commentList.hotComments" :key="item.commentId">
        <div class="item-img">
          <img class="img" :src="item.user.avatarUrl"/>
        </div>
        <div class="item-info">
          <div class="info1">
            <div class="user-name">
              <span>{{item.user.nickname}}</span>
              <div class="like-wrapper">
                <span class="like-count">{{item.likedCount}}</span>
                <img class="like-img" src="../../../assets/icon/like.svg"/>
              </div>
              <div class="time">{{item.time}}</div>
            </div>
          </div>
          <div class="info2">
            <div class="info">
              {{item.content}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header1">最新评论</div>
    <div class="hot-comment">
      <div class="hot-item" v-for="item in commentList.comments" :key="item.commentId">
        <div class="item-img">
          <img class="img" :src="item.user.avatarUrl"/>
        </div>
        <div class="item-info">
          <div class="info1">
            <div class="user-name">
              <span>{{item.user.nickname}}</span>
              <div class="like-wrapper">
                <span class="like-count">{{item.likedCount}}</span>
                <img class="like-img" src="../../../assets/icon/like.svg"/>
              </div>
            </div>
            <div class="time">{{item.time}}</div>
          </div>
          <div class="info2">
            <div class="info">
              {{item.content}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import { handleTime } from '../../../utils/help';

export default {
  name: 'CommentInfo',
  data() {
    return {
      commentList: {},
    };
  },
  computed: {
    ...mapState({
      // comments: state => state.songsDetails.comments,
    }),
  },
  mounted() {
    // 获取评论
    this.$store.dispatch('get_listComment').then(() => {
      this.commentList = this.$store.state.songsDetails.comments;
      this.commentList = this.handleComment(this.commentList);
    });
  },
  methods: {
    handleComment(data) {
      const hotComments = data.hotComments;
      const comments = data.comments;
      hotComments.forEach((item) => {
        const commentTime = handleTime(item.time);
        const obj = {
          time: commentTime,
        };
        Object.assign(item, obj);
      });
      comments.forEach((item) => {
        const commentTime = handleTime(item.time);
        const obj = {
          time: commentTime,
        };
        Object.assign(item, obj);
      });
      return data;
    },
  },
};
</script>
<style scoped lang="stylus">
  .comment-content
    width 100%
    .header1
      font-size 12px
      width 97%
      height 25px
      padding-left 10px
      line-height 25px
    .hot-comment
      background-color white
      -webkit-box-sizing: border-box
      -moz-box-sizing: border-box
      box-sizing: border-box
      width 100%
      .hot-item
        -webkit-box-sizing: border-box
        -moz-box-sizing: border-box
        box-sizing: border-box
        display flex
        align-items flex-end
        justify-content space-between
        width 100%
        min-height 70px
        position relative
        .item-info
          -webkit-box-sizing: border-box
          -moz-box-sizing: border-box
          box-sizing: border-box
          border-bottom  1px solid #cdcbcd
          flex 0 0 87%
          min-height 60px
          display flex
          flex-direction column
          .info2
            width 97%
            display flex
            align-items center
            font-size 14px
            padding-bottom 5px
          .info1
            width 97%
            height 35px
            margin-top 10px
            display flex
            flex-direction column
            .time
              margin-top 3px
              flex 1
              font-size 10px
              color #a19fa1
            .user-name
              flex 1
              font-size 12px
              position relative
              .like-wrapper
                width 100px
                position absolute
                top 0
                left 210px
                text-align right
                padding-right 10px
                .like-count
                  position relative
                  top:-3px
        .item-img
          display flex
          justify-content flex-end
          flex 0 0 10%
          height inherit
          .img
            position absolute
            top 10px
            border-radius 50%
            height 25px
            width 25px
</style>
