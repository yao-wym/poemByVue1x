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
@import "./main.styl"

html, body
  font-family Verdana
  font-size 30px
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

.poem-btn-green
  font-size:.4rem
  background-color:app-green
  border-radius:10px
  height:1rem
  line-height:1rem
  width:8rem
  margin:30px auto
  text-align: center;
  color:white
  
.poem-input-box
  margin:0 auto;
  width:9.5rem;
  background-color:#fff
  border:line-gray 1px solid
  color:text-gray
  &>div
    height:input-height+0.2rem
    line-height:input-height+0.2rem
    border-bottom:solid 1px line-gray
  & input
    outline:none !important
    height:(input-height)
    border:none
    font-size:.4rem
    height:input-height
  
.poem-hidden
  display:none
  
.poem-mask
  position: fixed
  bottom: 0
  width: 100%
  height:100%
  width: 100%
  background-color:grey
  opacity:0.5
  animation:showMask 0.2s;
  -moz-animation:showMask 0.2s; /* Firefox */
  -webkit-animation:showMask 0.2s; /* Safari and Chrome */
  -o-animation:showMask 0.2s; /* Opera */

.flex-view
  -webkit-box-orient:vertical
  -webkit-box-direction:normal
  flex-direction:column;
  height:100%
  display: flex

.small-icon
  width: .6rem
  height: .6rem

  
@keyframes showMask
  from 
    background:#ffffff
  to 
    background:grey

@-moz-keyframes showMask /* Firefox */
  from 
    background:#ffffff
  to 
    background:grey

</style>
