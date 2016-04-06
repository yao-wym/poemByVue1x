<template>
  <div class="flex-view" v-transition>
     <app-header :title="title" :left-label="leftLabel" :right-label="rightLabel" :left-link="leftLink" :right-link="rightLink" :left-icon="leftIcon" :right-icon="rightIcon"></app-header>
     <div class="section">
       <a  href="#/FeedBack" class="section"><img class="xsmall-icon" src="../asset/images/yijianfankui.png" alt="">诗画介绍<span class="right">></span></a>
     </div>
  </div>
</template>
<style lang="stylus" scoped>
  @import "../main.styl"
  a
    display: block
    &:link, &:visited
      color: text-gray
  .section
    margin-bottom: section-margin
    padding: section-padding
    background: poem-white
    display: block
  .xsmall-icon
    width: .4rem
    vertical-align: middle
    margin-right: .3rem
  .right
    float: right
</style>
<script>
  module.exports = {
    components: {
      'flex-scroll-view': function(resolve) {
        require(['../components/FlexScrollView.vue'], resolve);
      },
      'app-header': function(resolve) {
        require(['../components/CommonHeader.vue'], resolve);
      }
    },

    data() {
      return {
        title: '关于我们',
      }
    }
  }
</script>