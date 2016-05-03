<template>
	<li class="cart-item">
		<div class="cart-item-header" style="overflow:hidden">
			<div style="float:left">
				{{order.order_list[0].store_name}}
			</div>
			<div style="float:right">
				<span style="color:red;margin-right:15px">{{order.order_list[0].state_desc}}</span>
			</div>
		</div>
		<div class="cart-goods-list">
			<div class="cart-goods-item" v-for="goods in order.order_list[0].extend_order_goods" :index="$index">
				<a>
					<img class="cart-goods-img" v-link="{path:'/FoodDetail/'+goods.goods_id}" src="{{goods.goods_image_url}}" />
					<div class="cart-goods-info">
						{{goods.goods_name}}
					</div>
					<div class="cart-goods-price">
						<p>{{goods.goods_price}}</p>
						<p>x{{goods.goods_num}}</p>
					</div>
				</a>
			</div>
		</div>
		<div class="cart-item-price" style="overflow:hidden">
			<span style="float:right">总共
			<span>{{order.order_list[0].extend_order_goods.length}}</span>
			件合计¥
			<span >{{order.order_list[0].order_amount}}</span>
			（含运费
			<span>0</span>
			)
			</span>
		</div>
		<div class="cart-item-operate" style="overflow:hidden">
			<div @click="payOrder()" class="cart-item-pay" style="float:right">付款</div>
			<div @click="cancelOrder()" class="cart-item-cancel" style="float:right">取消订单</div>
			<!-- <div class="cart-item-call" style="float:right">联系卖家</div> -->
		</div>
	</li>
</template>

<script type="text/javascript">
module.exports = {
	replace: true,
	props: ['order'],
	data:function(){
		return {
			'orderId':""
		}
	},
	methods:{
		cancelOrder:function(order_id){
			$.poemPost(TECHAN_CANCEL_ORDER_API,{'key':poem.getItem('key'),'order_id':this.orderId}).done(this.cancelDone);
		},
		cancelDone:function(res){
			if(!$.isEmpty(res.error)){
					poemUI.toast(res.error)
				}else{
					poemUI.toast('取消成功');
					this.$dispatch('refreshTechanOrder');
				}
		},
		payOrder:function(res){
			location.href="http://www.shcyec.cn/mobile/index.php?act=member_payment&op=pay&key="+poem.getItem('key')+"&pay_sn="+this.order.pay_sn+"&payment_code=wxpay"
		}
	},
	ready:function(){
		this.orderId = this.order.order_list[0].order_id;
	}
}
</script>

<style lang="stylus">
	@import "../main.styl"
.cart-item
	font-size:.3rem
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
			width:1.8rem
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
		width:1.5rem
		height:@width
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