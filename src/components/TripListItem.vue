<template>
	<li class="trip-item">
		<a style="overflow: hidden" v-link="{path:'/TripDetail/'+trip.goods_id}">
			<img v-bind:src="trip.goods_image_url" class="trip-img">
			<div class="trip-info">
				<div class="trip-name">
					<p style="color:#505050">{{trip.goods_name}}</p>
				</div>
					<div>
						<span style="color:red">{{trip.evaluation_good_star}}分</span>
					</div>
					<div style="color:green">
						<span style="color:green" v-if="trip.evaluation_count!=0">{{trip.evaluation_count}}条评论</span>
						<span style="color:green" v-else>暂无评价</span>
						<span style="float: right;font-size:0.28rem">
							<span style='font-size:0.25rem;color:orangered'>¥</span>
							<span style='font-size:0.4rem;color:orangered'>{{trip.goods_price}}</span>
							<span style='font-size:0.3rem;color:orange'>起</span>
						</span>
					</div>
					
				<div>
					<div style="width: 95%;float:left;margin-left: 10px;display:block;white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
						{{trip.goods_jingle}}&nbsp
					</div>
					
				</div>
			</div>
		</a>
	</li>
</template>

<script type="text/javascript">
module.exports = {
	replace: true,
	props: ['trip'],
}
</script>

<style lang="stylus">
	@import "../main.styl"
.trip-item
	height:2.2rm
	color:text-gray
	background-color: #fff; 
	overflow:auto; 
	resize:horizontal;
	padding:0.2rem
	border-bottom:solid 1px line-gray
	& .trip-img
		width:2.3rem
		height:2.3rem
		float:left
		margin-right:0.3rem
	& .trip-info
		overflow:hidden
		height:2.3rem
		display:flex
		flex-direction:column
		& div
			flex:1
	& p,span
		color:text-gray
		margin:0
	& .trip-name
		color:text-gray
		font-size:0.35rem
		flex:1
</style>