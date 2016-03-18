<template>
<footer class="text-center col-xs-12 index-tab" style="position: fixed;bottom: 0;">
    <a href="#index-home" class="col-xs-3"><img src="../asset/images/store-white.png"><span>首页</span></a>
    <a href="#index-cart" class="col-xs-3"><img src="../asset/images/cart-white.png"><span>购物车</span></a>
    <a href="#index-article" class="col-xs-3"><img src="../asset/images/jounry.png"><span>游记</span></a> 
    <a href="#index-ucenter" class="col-xs-3" ><img src="../asset/images/my.png"><span>我的</span></a>
</footer> 
</template>
<script>
export default {
  props: ['msg','iconLeft','iconRight']
}
</script>
<style lang="stylus">
tab-color = #efefef
poem-green = #bada55
poem-yellow = yellow
poem-gray = gray 
poem-white = white
poem-line-color = grey
poem-text-gray = gray
poem-text-black = black

@import "../main.styl"
app-header
  color #bada55
.index-tab
	background-color:tab-color
	padding:3px 0
.poem-green
  background-color:poem-green
.index-tab img
	width: 20px
	display: block
	margin:0 auto
.index-tab a
	font-size:2em
	color:rgb(88,88,88)

</style>