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
          <div class="li-label"><a href="">
              <div class="icon">
                <img src="../asset/images/star-red-full.png">
              </div>
              <div class="title">我的订单</div>
              <div clase="arrow">
              </div>
            </a></div>
          <div class="li-label"><a href="">
              <div class="icon">
                <img src="../asset/images/star-red-full.png">
              </div>
              <div class="title">我的订单</div>
              <div clase="arrow">
              </div>
            </a></div>
            <div class="li-label"><a href="">
              <div class="icon">
                <img src="../asset/images/star-red-full.png">
              </div>
              <div class="title">我的订单</div>
              <div clase="arrow">
              </div>
            </a></div>
        </section>
        <section class="li-section" style="margin-top: 10px">
          <div class="li-label"><a href="">
              <div class="icon">
                <img src="../asset/images/star-red-full.png">
              </div>
              <div class="title">我的订单</div>
              <div clase="arrow">
              </div>
            </a></div>
          <div class="li-label"><a href="">
              <div class="icon">
                <img src="../asset/images/star-red-full.png">
              </div>
              <div class="title">我的订单</div>
              <div clase="arrow">
              </div>
            </a></div>
            <div class="li-label"><a href="">
              <div class="icon">
                <img src="../asset/images/star-red-full.png">
              </div>
              <div class="title">我的订单</div>
              <div clase="arrow">
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
  },
    route: {
    data ({ to }) {
      // This is the route data hook. It gets called every time the route
      // changes while this component is active.
      // 
      // What we are doing:
      // 
      // 1. Get the `to` route using ES2015 argument destructuring;
      // 2. Get the `page` param and cast it to a Number;
      // 3. Fetch the items from the store, which returns a Promise containing
      //    the fetched items;
      // 4. Chain the Promise and return the final data for the component.
      //    Note we are waiting until the items are resolved before resolving
      //    the entire object, because we don't want to update the page before
      //    the items are fetched.
      const page = +to.params.page
      document.title = 'Vue.js HN Clone'
      return store.fetchItemsByPage(page).then(items => ({
        page,
        items
      }))
    }
  },
  ready:function(){
    alert(JSON.stringify(this.$route.params));
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
  .arrow
    background:url(../asset/images/right_icon.png)
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
      & .icon
        width:.3rem
        height:.3rem
        margin-right:10px
        & img
          width:100%
      & .arrow
        width:.5rem
        height:.5rem


</style>