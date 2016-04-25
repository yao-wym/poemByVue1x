<template>
	<li v-if="item.store.sc_id==3||item.store.sc_id==2" class="collect-store-item">
		<div v-if="item.store.sc_id==2" v-link="{path:'/HotelDetail/'+storeId}" class="icon">
			<img src="{{item.store.store_label}}">
		</div>
		<div v-if="item.store.sc_id==3" v-link="{path:'/ScenicDetail/'+storeId}" class="icon">
			<img src="{{item.store.store_label}}">
		</div>
		<div v-if="item.store.sc_id==2" v-link="{path:'/HotelDetail/'+storeId}" class="content">
			<div class="store-name">{{item.store.store_name}}</div>
			<div class="store-price" style="position: relative">
				<div style="position: absolute;bottom: 0;color:red">{{item.store.area_info}}</div>
			</div>
		</div>
		<div v-if="item.store.sc_id==3" v-link="{path:'/ScenicDetail/'+storeId}" class="content">
			<div class="store-name">{{item.store.store_name}}</div>
			<div class="store-price" style="position: relative">
				<div style="position: absolute;bottom: 0;color:red">{{item.store.area_info}}</div>
			</div>
		</div>
		<div class="delete-btn">
			<img @click="deleteStore()" src="../asset/images/delete-white.png">
		</div>
	</li>
</template>

<script type="text/javascript">
module.exports = {
	replace: true,
	props: ['item'],
	data:function(){
		return {
			'storeId':""
		}
	},
	methods:{
		deleteStore:function(){
			$.poemPost(STORE_COLLECT_DELETE_API,{'key':poem.getItem('key'),'fav_id':this.item.fav_id}).done(this.deleteDone);
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
		this.storeId = this.item.store.store_id;
	}
}
</script>

<style lang="stylus" scoped>
@import "../main.styl"
collect-item-height = 1.8rem
collect-img-height = 1.6rem
.collect-store-item
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