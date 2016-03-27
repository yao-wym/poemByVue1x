<template>
  <div id="app-container">
    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>
  <!-- </div> -->
</template>

<script type="text/javascript">
    module.exports = {
  replace: true,
  
  components: {
    'app-header': require('./components/CommonHeader.vue'),
  }
}
</script>

<style lang="stylus">
@import "./variables.styl"

html, body
  font-family Verdana
  height 100%
  color:text-gray

ul
  color:text-gray
  list-style-type none
  padding 0
  margin 0

a
  cursor pointer
  text-decoration none
  color:text-gray
  
#app-container
  background-color $bg
  position relative
  width 100%
  min-height 80px
  margin 0 auto
  height:100%

#header
  background-color #f60
  height 24px
  position relative
  h1
    font-weight bold
    font-size 13px
    display inline-block
    vertical-align middle
    margin 0
  .source
    color #fff
    font-size 11px
    position absolute
    top 4px
    right 4px
    a
      color #fff
      &:hover
        text-decoration underline

#yc
  border 1px solid #fff
  margin 2px
  display inline-block
  vertical-align middle
  img
    vertical-align middle

.view
  position absolute
  background-color $bg
  width 100%
  transition opacity .2s ease
  box-sizing border-box
  //padding 8px 20px
  &.v-enter, &.v-leave
    opacity 0

@media screen and (max-width: 700px)
  html, body
    margin 0
  #app-container
    width 100%
</style>
