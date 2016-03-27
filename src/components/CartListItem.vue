<template>
	<li class="cart-item">
		<div style="overflow:hidden">
			<div style="float:left">
				<input type="checkbox">
			</div>
			<div style="float:right">
				<span>删除</span>
				<span>编辑</span>
			</div>
		</div>
		<div class="cart-goods-list">
			<div class="cart-goods-item">
				<a style="overflow: hidden;padding-top:20px">
			<img class="cart-goods-img"/>
			<div class="cart-goods-info">
				123
			</div>
			<div class="cart-goods-price">
				<p>123</p>
				<p>x1</p>
			</div>
			</a>
			</div>
		</div>
		<div style="overflow:hidden">
			<span style="float:right">总共xx件合计。。。</span>
		</div>
		<div style="overflow:hidden">
			<button style="float:right">联系卖家</button>
		</div>
	</li>
</template>

<script type="text/javascript">
module.exports = {
	replace: true,
	props: ['hotel']
}
</script>

<style lang="stylus">
	@import "../main.styl"
.cart-goods-list
	background-color:rgb(240,240,240)
.cart-goods-item a
	display:flex
	& .cart-goods-img
		width:2rem
		height:2rem
		margin-right:0.3rem
	& .cart-goods-info
		flex:1
	& .cart-goods-price
		width:1.4rem
</style>