<template>
<footer class="text-center index-tab" style="bottom: 0;">
    <a href="#index/home"><img src="../asset/images/home-gray.png"><span>首页</span></a>
    <a href="#index/cart"><img src="../asset/images/cart-gray.png"><span>购物车</span></a>
    <a href="#/TravelNoteList/1"><img src="../asset/images/jounry.png"><span>游记</span></a> 
    <a href="#index/ucenter"><img src="../asset/images/my.png"><span>我的</span></a>
</footer> 
</template>
<script>
export default {
  props: ['msg','iconLeft','iconRight']
}
</script>
<style lang="stylus">
@import "../main.styl"
.index-tab
  z-index:2
  background-color:tab-color
  margin:0
  height:auto
  display:flex
  & a
    display:inline-block
    font-size:.4rem
    -webkit-box-flex: 1
    flex:1
    color:rgb(88,88,88)
    text-align:center
    padding:5px 0 10px 0
  & img
    width: .6rem
    margin:0 auto
    display: block
    margin-bottom:3px
.poem-green
  background-color:poem-green



</style>