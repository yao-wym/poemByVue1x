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
      <ul class="tab-header">
        <li @click="filterComments(0)">好评</li>
        <li @click="filterComments(1)">中评</li>
        <li @click="filterComments(2)">差评</li>
      </ul>
      <div class="comments">
        <ul>
          <li class="comments-sg" v-for="comment in filtedComments">
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
  .tab-header
    display: flex
    height: 1.5rem
    align-items: center
    border-bottom: 1px solid line-gray
    li
      flex: 1
      text-align: center
      font-size: .4rem
      border-right: 4px solid app-green
      &:last-child
        border-right: none
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
        curpage: 1,
        filtedComments: []
      }
    },
    methods: {
      getCommentsList() {
        $.poemPost(COMMENT_LIST_API,{order:"asc",page:10,curpage:this.curpage, goods_id: this.$route.params.id}).done(this.getCommentListDone);
      },
      getCommentListDone(data) {
        this.comments = this.comments.concat(data);
        this.filtedComments = this.comments;
        console.log(this.comments); 
        this.curpage++;
        this.$nextTick(function(){
          this.$broadcast('refresh');
        });
      },
      filterComments(type) {
        this.filtedComments = [];
        let comments = this.comments
        if (type==0) {
          for (var i=0; i<comments.length; i++){
            if (comments[i].geval_scores >= 4) {
              this.filtedComments.push(comments[i]);
            }
          }
        }
        if (type==1) {
          for (var i=0; i<comments.length; i++){
            if (comments[i].geval_scores == 3) {
              this.filtedComments.push(comments[i]);
            }
          }
        }
        if (type==2) {
          for (var i=0; i<comments.length; i++){
            if (comments[i].geval_scores <= 2) {
              this.filtedComments.push(comments[i]);
            }
          }
        }
      }
    },
    ready() {
      this.getCommentsList();
    }
  }
</script>