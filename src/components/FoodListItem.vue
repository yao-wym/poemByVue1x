<template>
	<li class="goods-item" style="padding:10px 20px">
		<a style="overflow: hidden;display:flex" @click="buyGoods">
			<img v-bind:src="food.goods_image_url" class="goods-img">
			<div class="goods-info">
				<div class="goods-name">{{food.goods_name}}</div>
				<div style="margin-top:10px;color: orangered" class="goods-name">{{food.evaluation_good_star}}分</div>
				<div style="margin-top:10px;color: rgb(40, 173, 40)" class="goods-name">{{food.evaluation_count}}人评价</div>
				<div style="margin-top:10px" class="goods-name">{{food.goods_jingle}}</div>
			</div>
			<div>
				<div style="color:red;font-size:0.4rem">¥{{food.goods_price}}</div>
				<button style="float:right;margin-top:50px;color:white;">预定</button>
			</div>
		</a>
	</li>
</template>

<script type="text/javascript">
module.exports = {
	replace: true,
	props: ['food'],
	methods:{
		buyGoods(){
			var goodsInfo = {
	          'scenicName':this.food.storeName,
	          'goodsName':this.food.goods_name,
	          'goodsPrice':this.food.goods_price,
	          'goodsId':this.food.goods_id
        }	
        this.$route.router.go({path:'/ScenicOrderForm?goodsInfo='+JSON.stringify(goodsInfo)})
		}
	}
}
</script>

<style lang="stylus" scoped>
	@import "../main.styl"
.goods-item
	border-bottom:1px solid #ccc
	resize:horizontal;
	overflow:auto; 
	.goods-img
		width:2rem
		height:2rem
		margin-right:0.3rem
	.goods-info
		flex:1
		overflow:hidden
	button
		background-color:app-yellow
		border:none
		font-size:.3rem
		border-radius:5px
		padding:5px 10px
</style>