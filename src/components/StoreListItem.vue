<template>
	<li class="store-item">
		<a style="overflow: hidden" v-if="store.sc_id==3" v-link="{path:'/ScenicDetail/'+store.store_id}">
			<img v-bind:src="store.store_label" class="store-img">
			<div class="store-info">
				<div class="store-name">
					<p style="color:#888">{{store.store_name}}</p>
				</div>
				<div class="store-name">
					<p style="margin-top:10px">
						<span style="color:red">{{store.store_star}}分</span>
					</p>
				</div>
				<div style="margin-top:10px;">
					<p style="float: left;font-size:0.3rem">
						<span style="color:rgb(80,180,100)" v-if="store.eval_num">共有{{store.eval_num}}人评价</span>
						<span style="color:rgb(80,180,100)" v-else>暂无评价</span>
					</p>
					<div v-if="store.min_price" style="float:right;margin-right: 10px">
						<span style='font-size:0.4rem;color:orangered'>¥</span>
						<span style='font-size:0.4rem;color:orangered'>{{store.min_price}}</span>
						<span>起</span>
					</div>
					<div v-else style="float:right;margin-right: 10px">
						<span style='font-size:0.4rem;color:red'>暂无报价</span>
					</div>
				</div>
				<div class="store-name">
					<div style="float: left;font-size:0.3rem">
						<p style="margin-top:10px">{{store.store_address}}</p>
					</div>
				</div>
				
			</div>
		</a>
		<a style="overflow: hidden" v-if="store.sc_id==2||store.sc_id==12" v-link="{path:'/HotelDetail/'+store.store_id}">
			<img v-bind:src="store.store_label" class="store-img">
			<div class="store-info">
				<div class="store-name">
					<p style="color:#888">{{store.store_name}}</p>
				</div>
				<div class="store-name">
					<p style="margin-top:10px">
						<span style="color:red">{{store.store_star}}分</span>
					</p>
				</div>
				<div style="margin-top:10px;">
					<p style="float: left;font-size:0.3rem">
						<span style="color:rgb(80,180,100)" v-if="store.eval_num">共有{{store.eval_num}}人评价</span>
						<span style="color:rgb(80,180,100)" v-else>暂无评价</span>
					</p>
					<div v-if="store.min_price" style="float:right;margin-right: 10px">
						<span style='font-size:0.4rem;color:orangered'>¥</span>
						<span style='font-size:0.4rem;color:orangered'>{{store.min_price}}</span>
						<span>起</span>
					</div>
					<div v-else style="float:right;margin-right: 10px">
						<span style='font-size:0.4rem;color:red'>暂无报价</span>
					</div>
				</div>
				<div class="store-name">
					<div style="float: left;font-size:0.3rem">
						<p style="margin-top:10px">{{store.store_address}}</p>
					</div>
				</div>
				
			</div>
		</a>
		<a style="overflow: hidden" v-if="store.sc_id==11" v-link="{path:'/StoreGoodsList/'+store.store_id}">
			<img v-bind:src="store.store_label" class="store-img">
			<div class="store-info">
				<div class="store-name">
					<p style="color:#888">{{store.store_name}}</p>
				</div>
				<div class="store-name">
					<p style="margin-top:10px">
						<span style="color:red">{{store.store_star}}分</span>
					</p>
				</div>
				<div style="margin-top:10px;">
					<p style="float: left;font-size:0.3rem">
						<span style="color:rgb(80,180,100)" v-if="store.eval_num">共有{{store.eval_num}}人评价</span>
						<span style="color:rgb(80,180,100)" v-else>暂无评价</span>
					</p>
					<div v-if="store.min_price" style="float:right;margin-right: 10px">
						<span style='font-size:0.4rem;color:orangered'>¥</span>
						<span style='font-size:0.4rem;color:orangered'>{{store.min_price}}</span>
						<span>起</span>
					</div>
					<div v-else style="float:right;margin-right: 10px">
						<span style='font-size:0.4rem;color:red'>暂无报价</span>
					</div>
				</div>
				<div class="store-name">
					<div style="float: left;font-size:0.3rem">
						<p style="margin-top:10px">{{store.store_address}}</p>
					</div>
				</div>
				
			</div>
		</a>
	</li>
</template>

<script type="text/javascript">
module.exports = {
	replace: true,
	props: ['store']
}
</script>

<style lang="stylus">
	@import "../main.styl"
.store-item
	height:2.2rm
	color:text-gray
	background-color: #fff; 
	overflow:auto; 
	resize:horizontal;
	padding:0.2rem
	border-bottom:solid 1px line-gray
	& .store-img
		width:2.3rem
		height:2.3rem
		float:left
		margin-right:0.3rem
	& .store-info
		overflow:hidden
		height:2.3rem
		display:flex
		flex-direction:column
	& p,span
		color:text-gray
		margin:0
	& .store-name
		color:text-gray
		font-size:0.35rem
		flex:1
</style>