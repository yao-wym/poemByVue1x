<template>
      <flex-scroll-view>
      <div id="uc-container">
        <header class="uc-header">
          <div>
            <img src="../asset/images/user-white.png">
            <p>18782950298</p>
          </div>
        </header>
        <section class="li-section">
          <div class="li-label"><a>
              <div class="icon">
                <img src="../asset/images/order-yellow.png">
              </div>
              <div class="title">我的订单</div>
            </a></div>
          <div class="li-label"><a v-link="{name:'orderhotel'}">
              <div class="icon">
                <img src="../asset/images/hotel-blue.png">
              </div>
              <div class="title">酒店景点订单</div>
              <div class="arrow">
              <i></i>
              </div>
            </a></div>
            <div class="li-label"><a v-link="{name:'ordertechan'}">
              <div class="icon">
                <img src="../asset/images/techan.png">
              </div>
              <div class="title">特产订单</div>
              <div class="arrow">
              <i></i>
              </div>
            </a></div>
        </section>
        <section class="li-section" style="margin-top: 10px">
         <div class="li-label"><a v-link="{name:'addresslist'}">
              <div class="icon">
                <img src="../asset/images/star-red-full.png">
              </div>
              <div class="title">我的地址</div>
              <div class="arrow">
              <i></i>
              </div>
            </a></div>
          <div class="li-label"><a href="">
              <div class="icon">
                <img src="../asset/images/collect-red.png">
              </div>
              <div class="title">收藏商品</div>
              <div class="arrow">
              <i></i>
              </div>
            </a></div>
          <div class="li-label"><a href="">
              <div class="icon">
                <img src="../asset/images/invite-friends.png">
              </div>
              <div class="title">邀请好友</div>
              <div class="arrow">
              <i></i>
              </div>
            </a></div>
            <div class="li-label"><a href="">
              <div class="icon">
                <img src="../asset/images/score-detail.png">
              </div>
              <div class="title">积分详情</div>
              <div class="arrow">
              <i></i>
              </div>
            </a></div>
            <div class="li-label"><a href="">
              <div class="icon">
                <img src="../asset/images/score-exchange.png">
              </div>
              <div class="title">积分兑换</div>
              <div class="arrow">
              <i></i>
              </div>
            </a></div>
        </section>
        <section class="li-section" style="margin-top: 10px">
          <div class="li-label"><a href="">
              <div class="icon">
                <img src="../asset/images/about-us.png">
              </div>
              <div class="title">关于我们</div>
              <div class="arrow">
              <i></i>
              </div>
            </a></div>
          <div class="li-label"><a href="">
              <div class="icon">
                <img src="../asset/images/help-suggest.png">
              </div>
              <div class="title">客服帮助</div>
              <div class="arrow">
              <i></i>
              </div>
            </a></div>
        </section>
        <section class="li-section" style="margin-top: 10px">
          <div class="li-label"><a href="">
              <div class="icon">
                <img src="../asset/images/setting-yellow.png">
              </div>
              <div class="title">设置</div>
              <div class="arrow">
              <i></i>
              </div>
            </a></div>
        </section>
      </div>
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
  #uc-container
    background-color:rgb(238,238,238)
  .uc-header
    background:url(../asset/images/news.png)
    text-align:center
    padding-top:1rem
    padding-bottom:.6rem
    color:white
  .li-section
    background-color:white
  .li-section .li-label
    height:1rem
    padding:0 10px
    line-height:1rem
    width:100%
    display:-webkit-box
    display: -webkit-box; /* Safari */
    font-size: .3rem
    color:poem-text-gray
    & a
      width:100%
      display:-webkit-box
      display: -webkit-box; /* Safari */
      & .title
        -webkit-box-flex: 1
        flex:1
        border-bottom:none
      & .icon
        width:.3rem
        height:.3rem
        margin-right:10px
        & img
          width:100%
      & .arrow
        height:.5rem
        background:none
        width:0.5rem
        & i
          margin-top:.6rem
          line-height:room-item-height
          display:block
          width:.3rem
          height:@width
          background-size:100%
          background-image:url(../asset/images/right_icon.png)
</style>