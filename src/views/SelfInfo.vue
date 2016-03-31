<template>
  <div class="flex-view" v-transition>
     <app-header :title="title" :left-label="leftLabel" :right-label="rightLabel" :left-link="leftLink" :right-link="rightLink" :left-icon="leftIcon" :right-icon="rightIcon"></app-header>
  	<flex-scroll-view>
      <div class="section avatar">头像<div class="right avatar-img"><img src="" alt=""></div></div>
      <div class="section">昵称<input type="text" class="nico-name" value="{{ nicoName }}"></div>
      <div class="section">性别<span class="right">></span></div>
      <div class="section">出生日期<span class="right">></span></div>
      <a class="section">我的收获地址<span class="right">></span></a>
    </flex-scroll-view>
  </div>
</template>
<style lang="stylus" scoped>
  @import "../main.styl"
  a
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
  .nico-name
    width: 60%;
    height: .6rem;
    line-height: .6rem
    margin-left: .4rem
    font-size: .4rem
    border: none
  .avatar
    overflow: hidden
    line-height: 1.4rem
  .avatar-img
    width: 1rem
    height: 1rem
    border-radius: 50%

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
        title: '个人资料',
        nicoName: 'eeee'
      }
    }
  }
</script>