<template>
	<li class="hotel-item">
		<a style="overflow: hidden" v-link="{name:'hoteldetail',params:{hotelId:hotel.store_id}}">
			<img v-bind:src="hotel.store_label" class="hotel-img">
			<div class="hotel-info">
				<div class="hotel-name">
					<p style="color:#505050">{{hotel.store_name}}</p>
					<p style="margin-top:4px">
						<span v-if="hotel.store_star" style="color:red">{{hotel.store_star}}分</span>
						<span style="color:red" v-else>5分</span>
					</p>
				</div>
				<div style="margin-top:0rem">
					<div style="float: left;font-size:0.35rem">
						<p>
							<span style="color: green" v-if="hotel.eval_num">{{hotel.eval_num}}条评论</span>
							<span  style="color: green" v-else>暂无评价</span>
						</p>
					</div>

					<div style="float:right;margin-right: 10px;" v-if="hotel.min_price">
						<span style='font-size:0.3rem;color:orangered'>¥</span>
						<span style='font-size:0.45rem;color:orangered'>{{hotel.min_price}}</span>
						<span style="color:orangered">起</span>
					</div>
					<div style="float:right;margin-right: 10px;" v-else>
						<span style='font-size:0.3rem;color:orangered'>暂无报价</span>
					</div>
				</div>
				<p style="margin-top:10px">{{hotel.store_address}}</p>
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

<style lang="stylus" scoped>
@import "../main.styl"
.hotel-item
	height:2.2rem
	color:text-gray
	background-color: #fff; 
	overflow:auto; 
	resize:horizontal;
	padding:0.1rem
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
		font-size:0.4rem
		flex:1
		overflow:hidden
</style>