<template>
	<div class="flex-view" v-transition>
	<flex-scroll-view>
       <div style="margin-top:2rem;text-align:center" class="find-container">
		<div class="poem-input-box">
			<div class="input-item">
				<div class="icon-label">
					<img src='../asset/images/user-green.png' style="width:30px;height: 30px"/>
					<label style="width:1.5rem display:inline-block">手机号</label>
				</div>
				<div class="input-field">
					<input style="border:0;heigth:50px;display:inline-block;" placeholder='手机号'/>
				</div>
				</div>
			<div class="input-item">
				<div class="icon-label">
					<img src='../asset/images/lock-white.png' style="width:30px;height: 30px"/>
					<label id="password" style="width:1.5rem display:inline-block">验证码</label>
				</div>
				<div class="input-field">
					<input style="width:7rem display:inline-block;" placeholder='请填写密码' />
				</div>
			</div>
			<div class="input-item">
				<div class="icon-label">
					<img src='../asset/images/lock-white.png' style="width:30px;height: 30px"/>
					<label id="password" style="width:1.5rem display:inline-block">密码</label>
				</div>
				<div class="input-field">
					<input style="width:7rem display:inline-block;" placeholder='请填写密码' />
				</div>
			</div>
		</div>
<!-- 		<div style="display: block;width: 80%;margin:0 auto">
			<div class="poem-btn-green" @click="login()">登陆</div>
			<a style="float: left">我已阅读xxx</a>
		</div> -->
	</div>
    </flex-scroll-view>
	<yellow-bottom v-link="{name:'changepwd'}">
		<span>下一步</span>
	</yellow-bottom>
</div>
</template>

<style lang="stylus" scoped>
.find-container
	font-size:.5rem
	& .input-item
		display:flex
		& .icon-label
			text-align:left
			padding-left:10px
			width:2.2rem
		& .input-field
			flex:1
			& input
				width:100%
				height:1rem
				line-height:1rem
#password:before
	width:30px
#account:before
	width:30px
</style>


<script>
module.exports = {
	replace: true,
	methods: {
		// goNextStep: goNextStep
	},
	ready: function() {
		this.$dispatch('pageLoaded');
		this.leftLabel = '找回密码';
	},
	components: {
		'yellow-bottom': require('../components/YellowBottom.vue'),
		'app-header': require('../components/CommonHeader.vue'),
		'flex-scroll-view': require('../components/FlexScrollView.vue'),
	},
	props:['title','leftLabel']
}
</script>