<template>
		<li class="goods-item">
			<img src="../asset/images/about.png" class="goods-img">
			<!-- <p>{{cartGoods}}</p>
		-->
			<div class="goods-info">
				<div class="goods-name">{{hotel.store_name}}</div>
				<div>
					<div style="float: left">
						<p>{{hotel.store_star}}</p>
						<p>{{hotel.store_star}}</p>
						<p>{{hotel.store_address}}</p>
					</div>
					<div style="float:right;margin-right: 10px">
						298元起
					</div>
				</div>
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
.goods-img
	width:2rem
	height:2rem
	float:left
	margin-right:0.3rem

.goods-info
	overflow:hidden
.goods-item
	 background-color: #eee; 
	 overflow:auto; 
	 resize:horizontal;
</style>