<template>
	<li class="cart-item">
		<div class="cart-item-header" style="overflow:hidden">
			<div style="float:left">
				{{order.store_name}}<span style="margin-left:20px;">订单编号:{{order.order_sn}}</span>
			</div>
			<div style="float:right">
				<span style="color:red;margin-right:15px">{{order.state_desc}}</span>
			</div>
		</div>
		<div class="cart-goods-list">
			<div class="cart-goods-item">
				<a>
			<!-- <img class="cart-goods-img" v-link="{path:'/FoodDetail/'+order.goods_id}" src="{{order.goods_image_url}}" /> -->
			<img class="cart-goods-img" src="{{order.goods_image_url}}" />
			<div class="cart-goods-info">
				<div>{{order.goods_name}}</div>
				<div style="margin-top:50px" v-if="order.vr_code">兑换码:{{order.vr_code}}</div>
			</div>
			<div class="cart-goods-price">
				<p>{{order.goods_price}}</p>
				<p>x{{order.goods_num}}</p>
			</div>
			</a>
			</div>
		</div>
		<div class="cart-item-price" style="overflow:hidden">
			<span style="float:right">总共
			<span>{{order.goods_num}}</span>
			件合计¥
			<span >{{parseFloat(order.goods_price)*parseInt(order.goods_num)}}</span>
			
		</div>
		<div v-if="order.order_state_text=='待付款'" class="cart-item-operate" style="overflow:hidden">
			<div @click="payOrder()" class="cart-item-pay" style="float:right">付款</div>
			<div @click="cancelOrder()" class="cart-item-cancel" style="float:right">取消订单</div>
			<!-- <div class="cart-item-call" style="float:right">联系卖家</div> -->
		</div>
		<div v-if="order.order_state_text=='已支付'" class="cart-item-operate" style="overflow:hidden">
			<div @click="orderRefund()" class="cart-item-cancel" style="float:right">申请退款</div>
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
		orderRefund:function(){
			$.post(VR_ORDER_REFUND,{'key':poem.getItem('key'),'order_id':this.orderId}).done(this.refundDone);
		},
		refundDone:function(){
			var res = JSON.parse(res);
			poemUI.toast(res.datas);
			this.$dispatch('refreshTechanOrder');
		},
		cancelOrder:function(order_id){
			$.poemPost(VR_CANCEL_ORDER_API,{'key':poem.getItem('key'),'order_id':this.orderId}).done(this.cancelDone);
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
			location.href="http://www.shcyec.cn/mobile/index.php?act=member_payment&op=vr_pay&key="+poem.getItem('key')+"&pay_sn="+this.order.order_sn+"&payment_code=wxpay"
		}
	},
	ready:function(){
		this.orderId = this.order.order_id;
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