<template>
	<li class="scenic-item">
		<a style="overflow: hidden" v-link="{path:'ScenicDetail/'+scenic.store_id}">
			<img v-bind:src="scenic.store_label" class="scenic-img">
			<div class="scenic-info">
				<div class="scenic-name">
					<p style="color:#888">{{scenic.store_name}}</p>
				</div>
				<div class="scenic-name">
					<p style="margin-top:10px">
						<span style="color:red">{{scenic.store_star}}分</span>
					</p>
				</div>
				<div style="margin-top:10px;">
					<p style="float: left;font-size:0.3rem">
						<span style="color:rgb(80,180,100)" v-if="scenic.eval_num">共有{{scenic.eval_num}}人评价</span>
						<span style="color:rgb(80,180,100)" v-else>暂无评价</span>
					</p>
					<div v-if="scenic.min_price" style="float:right;margin-right: 10px">
						<span style='font-size:0.4rem;color:orangered'>¥</span>
						<span style='font-size:0.4rem;color:orangered'>{{scenic.min_price}}</span>
						<span>起</span>
					</div>
					<div v-else style="float:right;margin-right: 10px">
						<span style='font-size:0.4rem;color:red'>暂无报价</span>
					</div>
				</div>
				<div class="scenic-name">
					<div style="float: left;font-size:0.3rem">
						<p style="margin-top:10px">{{scenic.store_address}}</p>
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