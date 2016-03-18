<template>
<footer class="text-center index-tab" style="bottom: 0;">
    <a href="#index-home"><img src="../asset/images/store-white.png"><span>首页</span></a>
    <a href="#index-cart"><img src="../asset/images/cart-white.png"><span>购物车</span></a>
    <a href="#index-article"><img src="../asset/images/jounry.png"><span>游记</span></a> 
    <a href="#index-ucenter"><img src="../asset/images/my.png"><span>我的</span></a>
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
  background-color:tab-color
  padding:5px 0 10px 0
  margin:0
  height:auto
  & a
    display:inline-block
    width:25%
    font-size:.5rem
    color:rgb(88,88,88)
    text-align:center
    margin-left:-3px
  & img
    width: 1rem
    margin:0 auto
    display: block
.poem-green
  background-color:poem-green



</style>