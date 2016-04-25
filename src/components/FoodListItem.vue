<template>
	<li class="goods-item" style="padding:10px 20px">
		<a style="overflow: hidden;display:flex" v-link="{path:'/FoodDetail/'+food.goods_id}">
			<img v-bind:src="food.goods_image_url" class="goods-img">
			<div class="goods-info">
				<div class="goods-name">{{food.goods_name}}</div>
				<div style="margin-top:20px" clas="goods-name">{{food.goods_jingle}}</div>
			</div>
			<div>
				<div style="color:red;font-size:0.4rem">¥{{food.goods_price}}</div>
				<button style="float:right;margin-top:20px;color:white;">预定</button>
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
	 background-color: #fafafa; 
	 overflow:auto; 
	 resize:horizontal;
	 border-bottom:1px solid line-gray
button
	background-color:app-yellow
	border:none
	font-size:.3rem
	border-radius:5px
	padding:5px 10px
</style>