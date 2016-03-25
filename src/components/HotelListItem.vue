<template>
	<li class="goods-item">
		<a style="overflow: hidden" v-link="{name:'hoteldetail',params:{hotelId:hotel.store_id}}">
			<img v-bind:src="hotel.store_label" class="goods-img">
			<div class="goods-info">
				<div class="goods-name">{{hotel.store_name}}</div>
				<div>
					<div style="float: left">
						<p>{{hotel.store_star}}</p>
						<p>{{hotel.store_star}}</p>
						<p>{{hotel.store_address}}</p>
					</div>
					<div style="float:right;margin-right: 10px">
						{{hotel.min_price}}起
					</div>
				</div>
			</div>
		</a>
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