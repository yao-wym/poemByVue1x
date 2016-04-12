<template>
  <div class="flex-view" v-transition>
     <app-header :title="title" :left-label="leftLabel" :right-label="rightLabel" :left-link="leftLink" :right-link="rightLink" :left-icon="leftIcon" :right-icon="rightIcon"></app-header>
      <div class="section avatar">头像
        <span class="right">></span>
        <div class="right avatar-img"><img src="{{ avatar }}" alt=""></div>
      </div>
      <div class="section">昵称<input type="text" class="nickname" value="{{ nickname }}" v-model="nickname"></div>
      <div  @click="showChooseSex = !showChooseSex" class="section">性别<span class="right">></span></div>
      <div v-show="showChooseSex" class="choose-sex">
        <input type="radio" value="1" name="sex" v-model="sex" id="man"><label :class="{'active': sex==1}" for="man">男性</label>
        <input type="radio" value="2" name="sex" v-model="sex" id="woman"><label :class="{'active': sex==2}" for="woman">女性</label>
        <input type="radio" value="0" name="sex" v-model="sex" id="secret"><label :class="{'active': sex==0}" for="secret">保密</label>
      </div>
      <div class="section">出生日期<span class="right">></span></div>
      <a href="#/AddressList" class="section">我的收货地址<span class="right">></span></a>
  </div>
</template>
<style lang="stylus" scoped>
  @import "../main.styl"
  .flex-view
    background: #f0f0f0
  a
    &:link, &:visited
      color: text-gray
  .section
    margin-top: section-margin
    padding: section-padding
    background: poem-white
    display: block
    &:first-child
      margin-top: 0
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
        &.active
          color: red
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
  .nickname
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
    width: 1.2rem
    height: 1.2rem
    border-radius: 50%
    border: 2px solid line-gray
    overflow: hidden
    margin-right: .4rem

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
        nickname: '',
        showChooseSex: 0,
        sex: 0,
        avatar: ''
      }
    },

    methods: {
      getUserInfo() {
        $.poemPost(USER_INFO_API, {key:"60669c1838e2613754ea9a466d50b89f"}).done(this.getUserInfoDone);
      },

      getUserInfoDone(data) {
        let info = data.member_info;
        this.avatar = info.avator;
        this.nickname = info.nickname
      }
    },

    ready() {
      this.getUserInfo();
    },

    watch: {
      nickname: function (val,oldval) {
          $.poemPost(SAVE_USER_INFO_API, {key:"60669c1838e2613754ea9a466d50b89f", nickname: val});
      },
      'sex': function(val, oldval) {
        $.poemPost(SAVE_USER_INFO_API, {key:"60669c1838e2613754ea9a466d50b89f", sex: val}).done(function(data) {
          console.log(data)
        })
      }
    }
  }
</script>