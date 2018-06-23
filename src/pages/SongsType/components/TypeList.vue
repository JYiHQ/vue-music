<template>
  <div class="wrapper">
    <div class="content">
      <div class="type1">
        <div class="type1-item" @click.stop="handleClick({ name: '全部'})">
          <span class="text">全部歌单</span>
        </div>
      </div>
      <div class="type2">
        <div class="row">
          <div class="type2-header">
            <img src="../../../assets/icon/earth.svg"/>
            <div class="header-text">语种</div>
          </div>
          <div class="type2-content">
            <div class="item" v-for="(item, index) in language" :class="{itemActive: item.isActive}"
                 :key="index" @click.stop="handleClick(item)">
              <div>{{item.name}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="type2">
        <div class="row">
          <div class="type2-header">
            <img src="../../../assets/icon/Viewlist.svg"/>
            <div class="header-text">风格</div>
          </div>
          <div class="type2-content">
            <div class="item" v-for="(item, index) in style" :class="{itemActive: item.isActive}"
                 :key="index" @click.stop="handleClick(item)">
              <div>{{item.name}}</div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="type2-content1">
            <div class="item" v-for="(item, index) in style1" :class="{itemActive: item.isActive}"
                 :key="index" @click.stop="handleClick(item)">
              <div>{{item.name}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="type2">
        <div class="row">
          <div class="type2-header">
            <img src="../../../assets/icon/coffe.svg"/>
            <div class="header-text">场景</div>
          </div>
          <div class="type2-content">
            <div class="item" v-for="(item, index) in scene" :class="{itemActive: item.isActive}"
                 :key="index" @click.stop="handleClick(item)">
              <div>{{item.name}}</div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="type2-content1">
            <div class="item" v-for="(item, index) in scene1" :class="{itemActive: item.isActive}"
                 :key="index" @click.stop="handleClick(item)">
              <div>{{item.name}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="type2">
        <div class="row">
          <div class="type2-header">
            <img src="../../../assets/icon/smail.svg"/>
            <div class="header-text">情感</div>
          </div>
          <div class="type2-content">
            <div class="item" v-for="(item, index) in emotion" :class="{itemActive: item.isActive}"
                 :key="index" @click.stop="handleClick(item)">
              <div>{{item.name}}</div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="type2-content1">
            <div class="item" v-for="(item, index) in emotion1"
                 :key="index" @click.stop="handleClick(item)">
              <div>{{item.name}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="type2">
        <div class="row">
          <div class="type2-header">
            <img src="../../../assets/icon/classfy.svg"/>
            <div class="header-text">主题</div>
          </div>
          <div class="type2-content">
            <div class="item" v-for="(item, index) in theme" :class="{itemActive: item.isActive}"
                 :key="index" @click.stop="handleClick(item)">
              <div>{{item.name}}</div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="type2-content1">
            <div class="item" v-for="(item, index) in theme1" :class="{itemActive: item.isActive}"
                 :key="index" @click.stop="handleClick(item)">
              <div>{{item.name}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import { getObjectByAttr } from '../../../utils/help';

export default {
  name: 'TypeList',
  data() {
    return {
      language: [],
      language1: [],
      style: [],
      style1: [],
      scene: [],
      scene1: [],
      emotion: [],
      emotion1: [],
      theme: [],
      theme1: [],
    };
  },
  mounted() {
    this.$store.dispatch('get_songsType').then(() => {
      this.handleSongsType(this.songType);
    });
  },
  computed: {
    ...mapState({
      songType: state => state.songList.songsType,
    }),
  },
  methods: {
    handleSongsType(songsType) {
      this.language = getObjectByAttr('category', 0, songsType);
      this.style = getObjectByAttr('category', 1, songsType);
      this.scene = getObjectByAttr('category', 2, songsType);
      this.emotion = getObjectByAttr('category', 3, songsType);
      this.theme = getObjectByAttr('category', 4, songsType);
      this.style1 = this.sliceArr(this.style);
      this.language1 = this.sliceArr(this.language);
      this.emotion1 = this.sliceArr(this.emotion);
      this.theme1 = this.sliceArr(this.theme);
      this.scene1 = this.sliceArr(this.scene);
    },
    sliceArr(arr) {
      if (arr.length > 6) {
        return arr.splice(6, arr.length - 6);
      }
      return [];
    },
    // 获取该类型下的歌单
    handleClick(item) {
      this.$set(item, 'isActive', true);
      if (item.name !== '全部') {
        this.$store.commit('CHANGE_NAME', item.name);
      }
      this.$store.dispatch('get_songByType', { tag: item.name, limit: 10 }).then(() => {
        this.$router.go(-1);
      });
    },
  },
};
</script>
<style scoped lang="stylus">
  @import "../../../assets/styl/songsTypes.styl";
</style>
