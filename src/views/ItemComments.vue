<template>
  <div class="flex-view" v-transition>
  <app-header :title="title" :left-label="leftLabel" :right-label="rightLabel" :left-link="leftLink" :right-link="rightLink" :left-icon="leftIcon" :right-icon="rightIcon"></app-header><input type="checkbox" v-model="anan">{{ anan }}
  	<flex-scroll-view>
      <input type="checkbox" v-model="nana">{{ nana }}

      <!-- <ul class="tab-header">
        <li><input type="radio" name="commentType"><label for="">好评()</label></li>
        <li><input type="radio" name="commentType">中评()</li>
        <li><input type="radio" name="commentType">差评()</li>
      </ul>
      <input type="checkbox">
      <div class="tab-content">
          <ul>
            <li v-for="comment in comments | filterBy 1 in 'type'">{{ comment.content }}|{{comment.name}}</li>
          </ul>
          <ul>
            <li v-for="comment in comments">{{ comment.content}}</li>
          </ul>
          <ul>
            <li v-for=""></li>
          </ul>
      </div> -->
    </flex-scroll-view>
  </div>
</template>
<style lang="stylus" scoped>
  @import "../main.styl"
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
      let comments = [];
      comments.push({
        name: 'www',
        avatar: 'dd',
        content: 'dddddddddd',
        type: '-1'
      })
      comments.push({
        name: 'www',
        avatar: 'dd',
        content: 'dddddddddd',
        type: '0'
      })
      comments.push({
        name: 'www',
        avatar: 'dd',
        content: 'dddddddddd',
        type: '1'
      })
      comments.push({
        name: 'www',
        avatar: 'dd',
        content: 'dddddddddd',
        type: '2',
        commentImg: ['ssss']
      })

      return {
        title: '',
        points: 90,
        comments: comments
      }
    }
  }
</script>