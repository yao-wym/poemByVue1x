<template>
  <div class="flex-view" v-transition>
  	<flex-scroll-view>
      <app-header :title="title" :left-label="leftLabel" :right-label="rightLabel" :left-link="leftLink" :right-link="rightLink" :left-icon="leftIcon" :right-icon="rightIcon"></app-header>
      <div style="height:auto;width: 100%">
        <banner banner-height="3.5rem" :img-item-arr="articleImgArr"></banner>
      </div>
      <ul style="margin-top:50px">
        <li class="article" v-for="article in articleList">
          <a href="#/TravelNote/{{ article.article_id }}">
            <div class="article-img">
              <img src="{{article.article_image}}" alt="">
            </div>
            <div class="article-detail">
              <h2>{{ article.article_title }}</h2>
              <p style="height:1.1rem">{{ article.article_abstract }}</p>
              <div style="font-size: .3rem" class="info">
                <div>阅读量：{{ article.article_click }}</div>
                <div style="margin:0 20px" div>评论：{{ article.article_comment_flag }}</div>
                <time>{{ (new Date(article.article_publish_time*1000)).getFullYear()+'-'+(new Date(article.article_publish_time*1000)).getMonth()+'-'+ (new Date(article.article_publish_time*1000)).getDate()  }}</time>
              </div>
            </div>
          </a>
        </li>
        <!-- <li class="article" style="width:100%;position: relative" v-for="article in articleList">
          <a href="#/TravelNote/{{ article.article_id }}" style="width:100%;padding: .1rem 0">
            <div class="article-img" style="width:100%;height:3.5rem">
              <img src="{{article.article_image}}" alt="">
            </div>
            <div class="article-detail" style="position: absolute;bottom:5px;width: 100%;background-color: rgba(0, 0, 0, 0.7);overflow: hidden">
              <h2 style="color:white;margin: 10px">{{ article.article_title }}</h2>
            </div>
          </a>
        </li> -->
      </ul>
  </div>
</template>
<style lang="stylus">
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
      height:100%
  .article-detail
    & h2
      color: app-green
      font-size: .33rem
      margin-top: 0
      font-weight: normal
      margin-bottom:2px
    & p
      overflow:hidden;
      font-size: .3rem
      margin:15px 0;
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
      },
      'banner': function (resolve) {
        require(['../components/BannerView.vue'], resolve);
      }
    },

    data() {
      return {
        title: '游记',
        xid: '0988776',
        curpage: 1,
        articleList: [],
        articleImgArr:[]
      }
    },

    methods: {
      getTravelNoteList() {
        $.poemGet(TRAVELNOTE_LIST_API,{order:"asc",page:100,curpage:this.curpage, class_id: this.$route.params.id}).done(this.getTravelNoteListDone);
      },
      getTravelNoteListDone(data) {
        this.articleList = this.articleList.concat(data.article_list);
        this.curpage++;
        setTimeout((function(that){return function(){that.$broadcast('refresh');}})(this),500)
      },
        getTripArticleSlide:function(){
          $.poemGet(ARTICLE_SLIDE_API).done(this.getArticleSlideDone);
        },
        getArticleSlideDone:function(slide){
          this.articleImgArr = slide[0].adv_list.item;
          setTimeout((function(that){return function(){that.$broadcast('refresh');}})(this),500)
        },
    },

    ready() {
      this.getTravelNoteList();
      this.getTripArticleSlide();
    }

  }
</script>