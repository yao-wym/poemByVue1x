<template>
	<div class="flex-view" v-transition>
	<app-header :title="title"></app-header>
	<flex-scroll-view>
	<div id="address-form">
		<div>选择地区</div>
		<input v-model="addrData.area_info" type="text" name="" placeholder="地区">
		<input v-model="addrData.true_name" type="text" placeholder="收货人">
		<input v-model="addrData.mob_phone" type="text" placeholder="手机号码">
		<input v-model="addrData.address" type="text" placeholder="详细地址">
	</div>
    </flex-scroll-view>
	<footer class ="yellow-footer" @click="saveAddress">
		<span>保存</span>
	</footer>
</div>
</template>

<style lang="stylus">
#address-form
	padding-top:20px
	& input,& div
		padding-left:10px
		display:block
		width:100%
		border:none
		height:.6rem
		border-bottom:1px solid line-color
.yellow-footer
	background-color:app-yellow
	height:buttom-tab-height
	line-height:buttom-tab-height
	text-align:center
	font-size:.5rem
	bottom:0
	width:100%
	color:app-white
</style>


<script>
module.exports = {
	replace: true,
	methods: {
		saveAddress:function(){
			if($.isEmpty(this.addressId)){
				this.addAddress();
			}else{
				this.editAddress();
			}
		},
		addAddress: function () {
			$.poemPost(ADDR_ADD_API,this.addrData).done(this.addDone);
		},
		addDone: function(res){
			if(!$.isEmpty(res.error)){
				poemUI.toast(res.error)
			}else{
				poemUI.toast("添加成功");
				poem.saveObj('address',this.addrData);
				history.go(-1);
			}
		},
		editDone: function(res){
			if(!$.isEmpty(res.error)){
				poemUI.toast(res.error)
			}else{
				poemUI.toast("修改成功");
				history.go(-1);
			}
		},
		getAddress:function(){
			$.poemPost(ADDR_DETAIL_API,{'address_id':this.addressId,'key':poem.getItem('key')}).done(this.getAddrDone);
		},
		getAddrDone:function(res){
			this.addrData=res.address_info;
			this.addrData['key'] = poem.getItem('key');
			//$.extend(this.addrData,res.address_info);  此方法有问题this.addrData貌似解绑了
			console.log(JSON.stringify(this.addrData))
		},
		editAddress: function () {
			$.poemPost(ADDR_EDIT_API,this.addrData).done(this.editDone);
		},
	},
	ready: function() {
		if(!$.isEmpty(this.$route.query.addressId)){
			this.addressId = this.$route.query.addressId
			this.getAddress();
			this.title = '修改地址';
		}
	},
	data:function(){
		return {
			title:'新增地址',
			addrData:{
			'area_id':37,
			'city_id':36,
			'is_default':1,
			'key':poem.getItem('key'),
			}
		}
	},
	components: {
		'yellow-bottom': require('../components/YellowBottom.vue'),
		'app-header': require('../components/CommonHeader.vue'),
		'flex-scroll-view': require('../components/FlexScrollView.vue'),
	},
}


</script>