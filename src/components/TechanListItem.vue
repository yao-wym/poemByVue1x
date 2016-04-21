<template>
	<li class="techan-item">
		<a style="overflow: hidden" v-link="{path:'/FoodDetail/'+techan.goods_id}">
			<img v-bind:src="techan.goods_image_url" class="techan-img">
			<div class="techan-info">
				<div class="techan-name">
					<p style="color:#505050">{{techan.goods_name}}</p>
				</div>
					<div>
						<span style="color:red">{{techan.evaluation_good_star}}分</span>
					</div>
					<div style="color:green">
						<span style="color:green" v-if="techan.evaluation_count!=0">{{techan.evaluation_count}}条评论</span>
						<span style="color:green" v-else>暂无评价</span>
						<span style="float: right;font-size:0.28rem">
							<span style='font-size:0.25rem;color:orangered'>¥</span>
							<span style='font-size:0.4rem;color:orangered'>{{techan.goods_price}}</span>
							<span style='font-size:0.3rem;color:orange'>起</span>
						</span>
					</div>
					
				<div>
					<div style="width: 95%;float:left;margin-left: 10px;display:block;white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
						{{techan.goods_jingle}}&nbsp
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
		& div
			flex:1
	& p,span
		color:text-gray
		margin:0
	& .techan-name
		color:text-gray
		font-size:0.35rem
		flex:1
</style>