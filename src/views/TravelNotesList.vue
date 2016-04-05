<template>
  <div class="flex-view" v-transition>
  	<flex-scroll-view>
      <app-header :title="title" :left-label="leftLabel" :right-label="rightLabel" :left-link="leftLink" :right-link="rightLink" :left-icon="leftIcon" :right-icon="rightIcon"></app-header>
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
      'yellow-bottom': function(resolve) {
        require(['../components/YellowBottom.vue'], resolve);
      }
    },

    data() {
      return {
        title: '游记',
        xid: '0988776'
      }
    }
  }
</script>