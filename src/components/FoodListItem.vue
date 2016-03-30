<template>
	<li class="goods-item" style="padding:10px 20px">
		<a style="overflow: hidden;display:flex" v-link="{name:'hoteldetail',params:{hotelId:hotel.store_id}}">
			<img v-bind:src="hotel.store_label" class="goods-img">
			<div class="goods-info">
				<div class="goods-name">{{hotel.store_name}}</div>
				<div style="margin-top:20px" class="goods-name">{{hotel.store_name}}</div>
			</div>
			<div>
				<div style="color:red;font-size:0.4rem">¥{{hotel.min_price}}</div>
				<button style="margin-top:20px;color:white;">预定</button>
			</div>
		</a>
	</li>
</template>

<script type="text/javascript">
module.exports = {
	replace: true,
	props: ['food']
}
</script>

<style lang="stylus">
	@import "../main.styl"
.goods-img
	width:1.2rem
	height:1.2rem
	margin-right:0.3rem

.goods-info
	flex:1
	overflow:hidden
.goods-item
	 background-color: #eee; 
	 overflow:auto; 
	 resize:horizontal;
button
	background-color:app-yellow
	border:none
	font-size:.3rem
	border-radius:5px
	padding:5px 10px
</style>