<template>
	<li class="addr-list-item" style="margin-top:20px;padding:15px;border-bottom:1px solid #ccc;border-bottom:1px solid #ccc;background-color: #fafafa">
		<div class="addr-head" style="position:relative;overflow:hidden;">
			<div style="float:left" class="addr-name">{{addr.true_name}}</div>
			<div style="float:right" class="addr-mobile">{{addr.mob_phone}}</div>
		</div>
		<p>
			<div class="addr-detail">{{addr.address}}</div>
		</p>
		<div style="margin-top:30px;overflow:hidden">
			<div style="float:left">
				<input v-if="addr.is_default == 1" checked="true" style="font-size:1rem;width:30px;height:30px" type="radio" name="defaultAddr" @click="setDefault"/>  
				<input v-if="addr.is_default == 0" chec type="radio" style="font-size:1rem;width:30px;height:30px" name="defaultAddr" @click="setDefault"/>  
				<span>设为默认</span>
			</div>
			<div style="float:right">
				<div style="display:inline-block" v-link="'AddressAdd?addressId='+addr.address_id">
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
			"addr":{}
		}
	},
	props: ['addr'],
	methods:{
		deleteAddr:function(){
			$.poemPost(ADDR_DEL_API,{key:poem.getItem('key'),address_id:this.addr.address_id}).done(this.delDone)
		},
		delDone:function(res){
			if(!isEmpty(res.error)){
				poemUI.toast(res.error);
			}else{
				poemUI.toast("删除成功");
			}
		},
		setDefault:function(){
			this.addr.is_default = 1;
			this.addr['key'] = poem.getItem('key');
			$.poemPost(ADDR_EDIT_API,this.addr).done(this.setDone);
			poem.saveObj('address',this.addr);
		},
		setDone:function(res){
			if(!$.isEmpty(res.error)){
				poemUI.toast(res.error)
			}else{
				poemUI.toast("修改成功");
			}
		}
	}
}
</script>

<style lang="stylus">
	@import "../main.styl"

</style>