<template>
	<li class="cart-item">
		<div class="cart-item-header" style="overflow:hidden">
			<div style="float:left;margin-left: 10px">
				<input style="height:.4rem;width:.4rem" type="checkbox">
			</div>
			<div style="float:right">
				<span style="margin-right:15px">删除</span>
				<span>编辑</span>
			</div>
		</div>
		<div class="cart-goods-list">
			<div class="cart-goods-item" v-link="{path:'/ScenicDetail/'+cart.goods_id}">
				<a>
			<img class="cart-goods-img" src="{{cart.goods_image_url}}" />
			<div class="cart-goods-info">
				{{cart.goods_name}}
			</div>
			<div class="cart-goods-price">
				<p>{{cart.goods_price}}</p>
				<p>x{{cart.goods_num}}</p>
			</div>
			</a>
			</div>
		</div>
		<div class="cart-item-price" style="overflow:hidden">
			<span style="float:right">总共
			<span>{{cart.goods_num}}</span>
			件合计¥
			<span >{{cart.goods_sum}}</span>
			（含运费
			<span>0</span>
			)
			</span>
		</div>
		<div class="cart-item-operate" style="overflow:hidden">
			<div class="cart-item-pay" style="float:right">付款</div>
			<div class="cart-item-cancel" style="float:right">取消订单</div>
			<div class="cart-item-call" style="float:right">联系卖家</div>
		</div>
	</li>
</template>

<script type="text/javascript">
module.exports = {
	replace: true,
	props: ['cart']
}
</script>

<style lang="stylus">
	@import "../main.styl"
.cart-item
	font-size:.35rem
	& .cart-item-header
		padding:15px
	& .cart-item-price
		border-bottom:solid 1px line-gray
		padding:20px
	& .cart-item-operate
		padding:20px
		& div
			background-color:white
			margin:10px
			min-width:2rem
			color:text-gray
			text-align:center
			border:solid 1px line-gray
			padding:5px 10px
			&.cart-item-pay
				color:white
				background-color:app-green
				border:none


.cart-goods-list
	background-color:rgb(242,242,242)
.cart-goods-item a
	border-bottom:solid 1px line-gray
	padding:20px 10px
	overflow: hidden;
	display:flex
	& .cart-goods-img
		width:2rem
		height:2rem
		margin-right:0.3rem
	& .cart-goods-info
		flex:1
	& .cart-goods-price
		width:1rem
		text-align:center	
		& p 
			margin-top:0
			margin-bottom:30px
</style>