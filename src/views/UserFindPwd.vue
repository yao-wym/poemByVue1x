<template>
	<div class="flex-view" v-transition>
	<flex-scroll-view>
       <div style="margin-top:2rem;text-align:center" class="login-container">
		<div class="poem-input-box">
			<div class="input-item">
				<img src='../asset/images/user-green.png' style="width:30px;height: 30px"/>
				<label style="width:1.5rem display:inline-block">手机号</label>
				<input style="border:0;heigth:50px;display:inline-block;" placeholder='手机号'/>
			</div>
			<div>
				<img src='../asset/images/lock-white.png' style="width:30px;height: 30px"/>
				<label id="password" style="width:1.5rem display:inline-block">验证码</label>
				<input style="width:7rem display:inline-block;" placeholder='请填写密码' />
			</div>
			<div>
				<img src='../asset/images/lock-white.png' style="width:30px;height: 30px"/>
				<label id="password" style="width:1.5rem display:inline-block">密码</label>
				<input style="width:7rem display:inline-block;" placeholder='请填写密码' />
			</div>
		</div>
		<div style="display: block;width: 80%;margin:0 auto">
			<div class="poem-btn-green" @click="login()">登陆</div>
			<a style="float: left">我已阅读xxx</a>
		</div>
	</div>
    </flex-scroll-view>
	<yellow-bottom>
		<span>下一步</span>
	</yellow-bottom>
</div>
</template>

<style lang="stylus">
.login-container
	font-size:.5rem
	test(20,20)
#password:before
	width:30px
#account:before
	width:30px
</style>


<script>
module.exports = {
	replace: true,
	methods: {
		goNextStep: goNextStep
	},
	created: function() {
		this.leftLabel = '找回密码';
		this.title = '';
		this.$on('goNextStep', function(child) {
			location.href='#user-login'
		})
	},
	components: {
		'yellow-bottom': require('../components/YellowBottom.vue'),
		'app-header': require('../components/CommonHeader.vue'),
		'flex-scroll-view': require('../components/FlexScrollView.vue'),
	},
	props:['title','leftLabel']
}

function goNextStep() {
	alert(2);
	$.post(LOGIN_API).done(registerDone).fail(registerFail);
}
</script>