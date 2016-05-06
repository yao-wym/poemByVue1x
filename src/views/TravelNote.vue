<template>
  <div class="flex-view" v-transition>
    <app-header :title="title" :left-label="leftLabel" :right-label="rightLabel" :left-link="leftLink" :right-link="rightLink" :left-icon="leftIcon" :right-icon="rightIcon"></app-header>
    <flex-scroll-view>
      <div class="container">
        <h1>{{ articleTitle }}</h1>
        <time>{{ publishTime }}</time>
        <img src="{{ travelImg }}" alt="">
        <p>{{{ content }}}</p>
        <div class="comments"></div>
      </div>
    </flex-scroll-view>
  </div>
</template>
<style scoped lang="stylus">
  @import "../main.styl"
  .container
    padding: section-padding
  time
    display: block
    width: 100%
    text-align: right
    font-size: .3rem
  h1
    font-size: .5rem
    font-weight: normal
    text-align: center
  
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
      return{
        articleTitle: '',
        content: '',
        pubishTime: ''
      }
    },
    methods: {
      getTravelNote() {
        $.poemGet(TRAVELNOTE_DETAIL_API,{article_id: this.$route.params.id}).done(this.getTravelNoteDone);
      },
      getTravelNoteDone(data) {
        let detail = data.article_detail;
        this.articleTitle = detail.article_title;
        this.content = detail.article_content;
        this.pubishTime = detail.article_publish_time
        this.$nextTick(function(){
          this.$broadcast('refresh');
        });
        // setTimeout((function(that){return function(){that.$broadcast('refresh');}})(this),1000)
      }
    },
    route:{
      data(){
        this.getTravelNote();
      }
    },
    ready() {
      
    }
  }
</script>
