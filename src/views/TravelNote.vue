<template>
  <div class="flex-view" v-transition>
    <app-header :title="title" :left-label="leftLabel" :right-label="rightLabel" :left-link="leftLink" :right-link="rightLink" :left-icon="leftIcon" :right-icon="rightIcon"></app-header>
    <flex-scroll-view>
      <div class="container">
        <h1>{{ noteTitle }}</h1>
        <time>{{ date }}</time>
        <img src="{{ travelImg }}" alt="">
        <p>{{ content }}</p>
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
        title: '',
        noteTitle: '盛大开幕盛大开幕盛大开幕盛大开幕',
        date: '2014-3-3',
        travelImg: '',
        content: '党中央党中央党中央党中央党中央党中央党中央党中央党中央党中央党中央党中央党中央党中央党中央党中央党中央党中央党中央党中央党中央党中央党中央党中央党中央党中央党中央党中央党中央党中央党中央党中央党中央党中央党中央党中央党中央党中央党中央党中央党中央党中央党中央党中央党中央党中央党中央'
      }
    }
  }
</script>
