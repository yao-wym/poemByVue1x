<template>
  <div class="flex-view" v-transition>
  <app-header :title="title" :left-label="leftLabel" :right-label="rightLabel" :left-link="leftLink" :right-link="rightLink" :left-icon="leftIcon" :right-icon="rightIcon"></app-header>
  	<flex-scroll-view>
      <!-- <ul class="tab-header">
        <li><input type="radio" name="commentType" id="filter-nice" v-model="commentFilter" value="h"><label for="filter-nice">好评()</label></li>
        <li><input type="radio" name="commentType" id="filter-nor" v-model="commentFilter" value="z"><label for="filter-nor">中评()</label></li>
        <li><input type="radio" name="commentType" id="filter-bad" v-model="commentFilter" value="c"><label for="filter-bad">差评()</label></li>
      </ul>
      <input type="checkbox">
      <div class="tab-content">
          <ul>{{ commentFilter }}
            <li v-for="comment in comments | filterBy {{ commentFilter }} in 'type'">{{ comment.content }}|{{comment.name}}</li>
          </ul>
          <ul>
            <li v-for="comment in comments | filterBy 'z' in 'type'">{{ comment.content}}</li>
          </ul>
          <ul>
            <li v-for="comment in comments | filterBy 'c' in 'type'">{{ comment.content }}</li>
          </ul>
      </div> -->
      <ul class="tab-header"></ul>
      <div class="comments">
        <ul>
          <li class="comments-sg" v-for="comment in comments">
            <div class="user-info">
              <img class="avatar" src="{{ comment.geval_useravatar }}" alt="">
              <p>{{ comment.geval_username }}</p>
            </div>
            <p>{{ comment.geval_content }}</p>
            <div class="order-info">
              <time>{{ comment.geval_addtime }}</time>
            </div>
            <ul class="comments-img">
              <li v-for="img in comment.geval_image_array">
                <img src="{{ img }}" alt="">
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </flex-scroll-view>
  </div>
</template>
<style lang="stylus" scoped>
  @import "../main.styl"
  .comments
    padding: section-padding 0
  .comments-sg
    padding: section-padding
    border-bottom: 1px solid line-gray
  .user-info
    display: flex
    align-items: center
  .avatar
    width: 1.5rem
    height: 1.5rem
    border-radius: 50%
    border: 1px solid line-gray
    margin-right: .4rem
  .order-info
    display: flex
    color: #ccc
    font-size: .3rem
  .comments-img
    display: flex
    margin: section-margin 0
    & li
      width: 1.5rem
      height: 1.5rem
      border-radius: .3rem
      overflow: hidden
      margin-right: .3rem
      & img
        width: 100%
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
    },

    data() {
      return {
        title: '',
        points: 90,
        comments: [],
        curpage: 1
      }
    },
    methods: {
      getCommentsList() {
        $.poemPost(COMMENT_LIST_API,{order:"asc",page:10,curpage:this.curpage, goods_id: this.$route.params.id}).done(this.getCommentListDone);
      },
      getCommentListDone(data) {
        this.comments = this.comments.concat(data);
        console.log(this.comments); 
        this.curpage++;
        this.$nextTick(function(){
          this.$broadcast('refresh');
        });
      }
    },
    ready() {
      this.getCommentsList();
    }
  }
</script>