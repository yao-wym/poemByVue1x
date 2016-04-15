<template>
  <div class="flex-view" v-transition>
    <app-header title="设置"></app-header>
  	<flex-scroll-view>
      <div class="two-section">
        <p><img class="xsmall-icon" src="../asset/images/zhanghao.png" alt="">账号<input class="xid" type="text" value="{{xid}}"></p>
        <a href=""><p><img class="xsmall-icon" src="../asset/images/mima.png" alt="">密码<span class="right">></span></p></a>
      </div>
      <a href="#/FeedBack" class="section"><img class="xsmall-icon" src="../asset/images/yijianfankui.png" alt="">意见反馈<span class="right">></span></a>
     <!--  <a href="" class="section"><img class="xsmall-icon" src="../asset/images/qingchuhuancun.png" alt="">清除缓存<span class="right">></span></a> -->
    </flex-scroll-view>
    <footer @click="loginOut()" class="yellow-footer">
    退出当前账号
    </footer>
  </div>
</template>
<style lang="stylus" scoped>
  @import "../main.styl"
  buttom-tab-height = 1.2rem
  .yellow-footer
    background-color:app-yellow
    height:buttom-tab-height
    line-height:buttom-tab-height
    text-align:center
    font-size:.5rem
    bottom:0
    width:100%
    color:app-white
  .two-section
    margin-bottom: section-margin
    background: poem-white
    & p
      margin: 0
    & > p
      padding: section-padding
      border-bottom: 1px solid line-gray
    & a
      display: block
      padding: section-padding
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
  .xid
    width: 60%;
    height: .6rem;
    line-height: .6rem;
    margin-left: .4rem;
    font-size: .4rem;
    border: none;

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
        xid: poem.getItem('username')
      }
    },
    methods:{
      loginOut(){
        poem.saveItem('username','');
        poem.saveItem('key','');
        history.go(-1);
      },
    }
  }
</script>