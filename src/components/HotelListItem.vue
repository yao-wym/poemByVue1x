<template>
	<li class="hotel-item">
		<a style="overflow: hidden" v-link="{name:'hoteldetail',params:{hotelId:hotel.store_id}}">
			<img v-bind:src="hotel.store_label" class="hotel-img">
			<div class="hotel-info">
				<div class="hotel-name">
					<p>{{hotel.store_name}}</p>
					<p style="margin-top:6px">
					<span style="color:red">{{hotel.store_star}}</span>
					<span>/{{hotel.eval_num}}条评论</span>
					</p>
				</div>
				<div style="margin-top:0.2rem">
					<div style="float: left;font-size:0.28rem">
						<p><span>{{hotel.store_star}}</span>星级</p>
						<p style="margin-top:10px">{{hotel.store_address}}</p>
					</div>
					<div style="float:right;margin-right: 10px">
						<span style='font-size:0.4rem;color:orangered'>¥</span>
						<span style='font-size:0.4rem;color:orangered'>{{hotel.min_price}}</span>
						<span>起</span>
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
.hotel-item
	height:2.2rm
	color:text-gray
	background-color: #fff; 
	overflow:auto; 
	resize:horizontal;
	padding:0.2rem
	border-bottom:solid 1px line-gray
	& .hotel-img
		width:2.3rem
		height:2.3rem
		float:left
		margin-right:0.3rem
	& .hotel-info
		overflow:hidden
		height:2.3rem
		display:flex
		flex-direction:column
	& p,span
		color:text-gray
		margin:0
	& .hotel-name
		color:text-gray
		font-size:0.35rem
		flex:1
</style>