<template>
  <div class="flex-view" v-transition>
    <app-header :title="title" :left-label="leftLabel" :right-label="rightLabel" :left-link="leftLink" :right-link="rightLink" :left-icon="leftIcon" :right-icon="rightIcon"></app-header>
    <flex-scroll-view>
      <div class="section">
        <h2>景点详情</h2>
        <img :src="{{ scenicImg }}" alt="">
        <p>{{{ scenicDetail }}}</p>
      </div>
      <div class="section">
        <h2>温馨提示</h2>
        <p>{{{ notice }}}</p>
      </div>
      <div class="section">
        <h2>交通与到达</h2>
        <img :src="{{ mapImg }}" alt="">
        <p>{{{ transportation }}}</p>
      </div>
    </flex-scroll-view>
  </div>
</template>
<style lang="stylus" scoped>
  @import "../main.styl"
  .section
    margin: section-margin 0
    background: poem-white
    padding: .4rem 0
    h2
      font-size: .4rem
      font-weight: normal
      margin: 0 section-margin
      padding: 0.1rem section-padding
      border-left: .2rem solid app-green
    p
      padding: section-padding
      line-height: 170%
    img
      width: 100%
      display: block
</style>
<script>
  module.exports = {
    components: {
      'flex-scroll-view': function(resolve) {
        require(['../components/FlexScrollView.vue'], resolve);
      },
      'app-header': function(resolve) {
        require(['../components/CommonHeader.vue'], resolve);
      },
      'yellow-bottom': function(resolve) {
        require(['../components/YellowBottom.vue'], resolve);
      }
    },

    data() {
      return {
        title: '景点详情',
        scenicImg: '',
        mapImg: '',
        scenicDetail: '',
        notice: '',
        transportation: ''
      }
    },

    methods: {
      initPage(data) {
        console.log(data)
        this.scenicDetail = data.store_info.store_description;
        setTimeout((function(that){return function(){that.$broadcast('refresh');}})(this),500)
        
      }
    },

    route: {
      data() {
        // $.poemGet(GOODS_DEEP_DETAIL_API,{'goods_id':this.$route.params.id}).done(this.initPage)
        $.poemGet(SCENIC_DETAIL_API,{'store_id':this.$route.params.id}).done(this.initPage)
      }
    }
  }
</script>