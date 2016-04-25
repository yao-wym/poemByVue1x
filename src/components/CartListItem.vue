<template>
	<li class="cart-item">
		<div class="cart-item-header" style="overflow:hidden">
			<div style="float:left;margin-left: 10px">
				<img src="../asset/images/techan.png" height="35" width="35">
				<span style="position: relative;top:-4px">{{cart[0].store_name}}</span>
				<!-- <input style="height:.4rem;width:.4rem" type="checkbox"> -->
			</div>
			<div style="float:right">
				<!-- <span>{{cart[0].store_name}}</span> -->
				<!-- <span style="margin-right:15px">删除</span>
				<span>编辑</span> -->
			</div>
		</div>
		<div v-for="goods in cart" class="cart-goods-list">
			<div class="cart-goods-item">
				<a>
			<img class="cart-goods-img" src="{{goods.goods_image_url}}"  v-link="{path:'/FoodDetail/'+goods.goods_id}"/>
			<div class="cart-goods-info">
				{{goods.goods_name}}
			</div>
			<div class="cart-goods-price">
				<p>￥{{goods.goods_price}}</p>
				<p><button style="border:none;background-color: rgb(80,180,100);color:white;width:.4rem;height:.4rem;;font-size:30px" @click="minusGoods($index)">-</button>
				<span style="position:relative;top:3px;margin: 0 8px">{{goods.goods_num}}</span>
				<button style="border:none;background-color: rgb(80,180,100);color:white;width:.4rem;height:.4rem;color:white;font-size:30px" @click="addGoods($index)">+</button></p>
			</div>
			</a>
			</div>
		</div>
		<div class="cart-item-price" style="overflow:hidden">
			<span style="float:right">总共
			<span>{{goods.goods_num}}</span>
			件合计¥
			<span style="color:rgb(217,96,86)">{{goods.goods_sum}}</span>
			（含运费
			<span>0</span>
			)
			</span>
		</div>
		<div class="cart-item-operate" style="overflow:hidden">
			<div @click="submitOrder()" class="cart-item-pay" style="float:right">去下单</div>
			<!-- <div @click="delete()" class="cart-item-cancel" style="float:right">取消订单</div> -->
			<!-- <div class="cart-item-call" style="float:right">联系卖家</div> -->
		</div>
	</li>
</template>

<script type="text/javascript">
module.exports = {
	replace: true,
	props: ['cart'],
	methods:{
	    delete:function(cart_id){
	    	$.poemPost(CART_DEL_API,{key:poem.getItem('key'),cart_id:cart_id}).done(this.delSuccess);
	    },
	    delSuccess:function(res){
	    	poemUI.toast('删除成功');
      		this.$dispatch('cartRefresh');
	    },
	    addGoods:function(index){
	    	this.cart[index].goods_num++;
	    },
	    minusGoods:function(index){
	    	if(this.cart[index].goods_num>1)
	    	this.cart[index].goods_num--;
	    	if(this.cart[index].goods_num==1){
	    		this.delete(this.cart[index].cart_id);
	    	}

	    },
	    // buy:function(cart_id){
	    //   $.poemPost(BUY_CART_VR_API,{key:poem.getItem('key'),cart_id:cart_id}).done(this.delSuccess);
	    // },
	    // buySuccess:function(res){
	    // 	poemUI.toast('购买成功成功');
	    // },
	    submitOrder:function(cart_id){
	    	var cartJson = JSON.stringify(this.cart);
	    	this.$route.router.go({path:'/TechanOrderForm?cart='+cartJson});
	    }
	}
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
		width:2rem
		text-align:center	
		& p 
			margin-top:0
			margin-bottom:30px
</style>