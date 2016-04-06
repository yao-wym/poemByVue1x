<template>
  <div class="flex-view" v-transition>
     <app-header :title="title" :left-label="leftLabel" :right-label="rightLabel" :left-link="leftLink" :right-link="rightLink" :left-icon="leftIcon" :right-icon="rightIcon"></app-header>
      <div class="section avatar">头像<div class="right avatar-img"><img src="" alt=""></div></div>
      <div class="section">昵称<input type="text" class="nico-name" value="{{ nicoName }}"></div>
      <div  @click="showChooseSex = !showChooseSex" class="section">性别<span class="right">></span></div>
      <div v-show="showChooseSex" class="choose-sex">
        <input type="radio" value="1" name="sex" v-model="sex" id="man"><label for="man">男性</label>
        <input type="radio" value="2" name="sex" v-model="sex" id="woman"><label for="woman">女性</label>
        <input type="radio" value="0" name="sex" v-model="sex" id="secret"><label for="secret">保密</label>
      </div>
      <div class="section">出生日期<span class="right">></span></div>
      <a href="#/user/addresslist" class="section">我的收货地址<span class="right">></span></a>
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
  .choose-sex
    display: flex
    justify-content: space-around
    background-color: #ccc
    padding: .4rem
    & input
      display: none
      & + label
        display: block
        width: 1.6rem
        height: .8rem
        line-height: .8rem
        text-align: right
  #man + label
    background: url(../asset/images/man.png) no-repeat
    background-size: auto 50%
    background-position: 0 50%
  #woman + label
    background: url(../asset/images/woman.png) no-repeat
    background-size: auto 50%
    background-position: 0 50%
  #secret + label
    background: url(../asset/images/lock-white.png) no-repeat
    background-size: auto 50%
    background-position: 0 50%
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
        nicoName: 'eeee',
        showChooseSex: 0,
        sex: 0
      }
    }
  }
</script>