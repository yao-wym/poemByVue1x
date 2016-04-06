<template>
	<li class="techan-item">
		<a style="overflow: hidden" v-link="{path:'/FoodDetail/'+techan.store_id}">
			<img v-bind:src="techan.goods_image_url" class="techan-img">
			<div class="techan-info">
				<div class="techan-name">
					<p>{{techan.goods_name}}</p>
					<p style="margin-top:6px">
					<span style="color:red">{{techan.evaluation_good_star}}分</span>/<span>{{techan.evaluation_count}}条评论</span>
					</p>
				</div>
				<div style="margin-top:0.2rem">
					<div style="float:left;margin-left: 10px">
						<span style='font-size:0.4rem;color:orangered'>¥</span>
						<span style='font-size:0.4rem;color:orangered'>{{techan.goods_price}}</span>
					</div>
					<div style="float: right;font-size:0.28rem">
						<p>銷量&nbsp&nbsp<span>{{techan.goods_salenum}}</span>笔</p>
						<!-- <p style="margin-top:10px">{{techan.store_address}}</p> -->
					</div>
				</div>
			</div>
		</a>
	</li>
</template>

<script type="text/javascript">
module.exports = {
	replace: true,
	props: ['techan']
}
</script>

<style lang="stylus">
	@import "../main.styl"
.techan-item
	height:2.2rm
	color:text-gray
	background-color: #fff; 
	overflow:auto; 
	resize:horizontal;
	padding:0.2rem
	border-bottom:solid 1px line-gray
	& .techan-img
		width:2.3rem
		height:2.3rem
		float:left
		margin-right:0.3rem
	& .techan-info
		overflow:hidden
		height:2.3rem
		display:flex
		flex-direction:column
	& p,span
		color:text-gray
		margin:0
	& .techan-name
		color:text-gray
		font-size:0.35rem
		flex:1
</style>