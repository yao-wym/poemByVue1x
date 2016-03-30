<template>
	<li class="addr-list-item" style="margin-bottom:20px;padding:15px;border-top:1px solid #ccc;border-bottom:1px solid #ccc">
		<div class="addr-head" style="position:relative;overflow:hidden;">
			<div style="float:left" class="addr-name">{{addr.true_name}}</div>
			<div style="float:right" class="addr-mobile">{{addr.mob_phone}}</div>
		</div>
		<p>
			<div class="addr-detail">{{addr.address}}</div>
		</p>
		<div style="margin-top:30px;overflow:hidden">
			<div style="float:left">
				<input type="checkbox" name="" id="">
				<span>设为默认</span>
			</div>
			<div style="float:right">
				<div style="display:inline-block">
					编辑
				</div>
				<div @click="deleteAddr" style="display:inline-block">
					删除
				</div>
			</div>
		</div>
	</li>
</template>

<script type="text/javascript">
module.exports = {
	replace: true,
	data:function(){
		return {

		}
	},
	props: ['addr'],
	methods:{
		deleteAddr:function(){
			$.poemPost(ADDR_DEL_API,{key:"bef844bb183057e8dca921ae556478e8",address_id:this.addr.address_id}).done(this.delDone)
		},
		delDone:function(res){
			if(!isEmpty(res.error)){
				poemUI.toast(res.error);
			}else{

			}
		}
	}
}
</script>

<style lang="stylus">
	@import "../main.styl"

</style>