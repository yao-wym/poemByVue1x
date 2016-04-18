<template>
  <div class="flex-view" v-transition>
  	<flex-scroll-view>
      <app-header :title="title" :left-label="leftLabel" :right-label="rightLabel" :left-link="leftLink" :right-link="rightLink" :left-icon="leftIcon" :right-icon="rightIcon"></app-header>
      <ul>
        <li class="article" v-for="article in articleList">
          <a href="#/TravelNote/{{ article.article_id }}">
            <div class="article-img">
              <img src="{{article.article_image}}" alt="">
            </div>
            <div class="article-detail">
              <h2>{{ article.article_title }}</h2>
              <p>{{ article.article_abstract }}代替代替代替代替代替代替代替代替代替代替代替代替代替代替代替代替代替代替代替替代替代替代替</p>
              <div class="info">
                <div>阅读量：{{ article.article_click }}</div>
                <div>评论：{{ article.article_comment_flag }}</div>
                <time>{{ article.article_publish_time }}</time>
              </div>
            </div>
          </a>
        </li>
      </ul>
  </div>
</template>
<style lang="stylus" scoped>
  @import "../main.styl"
  .article a
    display: block
    overflow: hidden
    padding: .2rem
    border-bottom: 1px solid line-gray
  .article-img
    float: left
    width: 3rem
    height: 2.5rem
    margin-right: .4rem
    & img
      width: 100%
  .article-detail
    & h2
      color: app-green
      font-size: .33rem
      margin-top: 0
      font-weight: normal
    & p
      font-size: .3rem
  .info
    display: flex
    font-size: .25rem
    
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
        title: '游记',
        xid: '0988776',
        curpage: 1,
        articleList: []
      }
    },

    methods: {
      getTravelNoteList() {
        $.poemGet(TRAVELNOTE_LIST_API,{order:"asc",page:10,curpage:this.curpage, class_id: this.$route.params.id}).done(this.getTravelNoteListDone);
      },
      getTravelNoteListDone(data) {
        this.articleList = this.articleList.concat(data.article_list);
        this.curpage++;
        this.$nextTick(function(){
          this.$broadcast('refresh');
        });
        setTimeout((function(that){return function(){that.$broadcast('refresh');}})(this),1000)
      }
    },

    ready() {
      this.getTravelNoteList();
    }

  }
</script>