<template>
	<li class="collect-goods-item">
		<div v-link="{path:'/FoodDetail/'+goodsId}" class="icon">
			<img src="{{item.goods_image_url}}">
		</div>
		<div v-link="{path:'/FoodDetail/'+goodsId}" class="content">
			<div class="goods-name">{{item.goods_name}}</div>
			<div class="goods-price" style="position: relative">
				<div style="position: absolute;bottom: 0;color:red">￥{{item.goods_price}}</div>
			</div>
		</div>
		<div class="delete-btn">
			<img @click="deleteGoods()" src="../asset/images/delete-white.png">
		</div>
	</li>
</template>

<script type="text/javascript">
module.exports = {
	replace: true,
	props: ['item'],
	data:function(){
		return {
			'goodsId':""
		}
	},
	methods:{
		deleteGoods:function(){
			$.poemPost(GOODS_COLLECT_DELETE_API,{'key':poem.getItem('key'),'fav_id':this.item.fav_id}).done(this.deleteDone);
			event.stoppropagation();
		},
		deleteDone:function(res){
			if(res.error){
				poemUI.toast(res.error);
			}else{
				poemUI.toast('删除成功');
			}
		}
	},
	ready:function(){
		this.goodsId = this.item.goods_id;
	}
}
</script>

<style lang="stylus" scoped>
@import "../main.styl"
collect-item-height = 1.8rem
collect-img-height = 1.6rem
.collect-goods-item
	display:flex
	height:collect-item-height
	&>.icon
		width:collect-item-height
		text-align:center
		&>img
			width:collect-img-height
			height:collect-img-height
			margin:.1rem
	&>.content
		flex:1
		padding:.1rem
		display:flex
		flex-direction:column
		&>div
			flex:1
	&>.delete-btn
		text-align:center
		width:1rem
		position:relative
		&>img
			width:.6rem
			position:absolute
			bottom:10px
			right:20px
</style>