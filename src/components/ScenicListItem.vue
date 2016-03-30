<template>
	<li class="scenic-item">
		<a style="overflow: hidden" v-link="{path:'ScenicDetail/'+scenic.goods_id}">
			<img v-bind:src="scenic.goods_image_url" class="scenic-img">
			<div class="scenic-info">
				<div class="scenic-name">
					<p>{{scenic.goods_name}}</p>
					<p style="margin-top:6px">
					<span style="color:red">{{scenic.store_star}}</span>
					<span>/{{scenic.eval_num}}条评论</span>
					</p>
				</div>
				<div style="margin-top:0.2rem">
					<div style="float: left;font-size:0.28rem">
						<p><span>{{scenic.evaluation_good_star}}</span>星级</p>
						<p style="margin-top:10px">{{scenic.store_address}}</p>
					</div>
					<div style="float:right;margin-right: 10px">
						<span style='font-size:0.4rem;color:orangered'>¥</span>
						<span style='font-size:0.4rem;color:orangered'>{{scenic.min_price}}</span>
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
	props: ['scenic']
}
</script>

<style lang="stylus">
	@import "../main.styl"
.scenic-item
	height:2.2rm
	color:text-gray
	background-color: #fff; 
	overflow:auto; 
	resize:horizontal;
	padding:0.2rem
	border-bottom:solid 1px line-gray
	& .scenic-img
		width:2.3rem
		height:2.3rem
		float:left
		margin-right:0.3rem
	& .scenic-info
		overflow:hidden
		height:2.3rem
		display:flex
		flex-direction:column
	& p,span
		color:text-gray
		margin:0
	& .scenic-name
		color:text-gray
		font-size:0.35rem
		flex:1
</style>