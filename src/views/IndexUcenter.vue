<template>
      <flex-scroll-view>
        <header class="uc-header">
          <div>
            <img src="../asset/images/user-white.png">
            <p>18782950298</p>
          </div>
        </header>
        <section class="li-section">
          <div class="li-label"><a href="">
              <div class="icon">123</div>
              <div class="title">我的订单</div>
              <div clase="arrow">123</div>
            </a></div>
          <div><a href="">
              <div></div>
              <div></div>
              <div></div>
            </a></div>
          <div><a href="">
              <div></div>
              <div></div>
              <div></div>
            </a></div>
        </section>
          <!-- <app-pane side="left" msg="1123" name="{{leftName}}"></app-pane> -->
      </flex-scroll-view>
</template>

<script>

	module.exports = {
  replace: true,
  components: {
    'app-header': require('../components/CommonHeader.vue'),
    'app-pane': require('../components/IndexHomePane.vue'),
    'index-tab': require('../components/IndexTab.vue'),
    'flex-scroll-view': require('../components/FlexScrollView.vue'),
  }
}
</script>

<style lang="stylus">
  @import "../main.styl"
  .uc-header
    background:url(../asset/images/news.png)
    text-align:center
    padding-top:1rem
    padding-bottom:.6rem
    color:white
  .li-section .li-label
    width:100%
    display:-webkit-box
    display: -webkit-box; /* Safari */
    & a
      width:100%
      display:-webkit-box
      display: -webkit-box; /* Safari */
      & .title
        -webkit-box-flex: 1
        flex:1
      & .icon
        width:.5rem
        height:.5rem
      & .arrow
        width:.5rem
        height:.5rem


</style>