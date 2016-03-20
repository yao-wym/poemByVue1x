<template>
	<div class="view" v-transition>
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
			<div class="poem-btn-green" v-on="click:login()">注册</div>
			<a style="float: left">我已阅读xxx</a>
		</div>
	</div>
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
  		register:register
  	},
  	components:{
    	'app-header': require('../components/CommonHeader.vue'),
  	},
  	created:function(){

  	},
  	props: ['title','leftLabel','rightLabel','leftLink','rightLink','leftIcon','rightIcon','search'],
  	ready:function(){
  		this.$dispatch('pageLoaded');
  		this.title="立即注册"
  	}
}
function register(){
	$.post(LOGIN_API).done(registerDone).fail(registerFail);
}
function registerDone(){
	localStorage.setItem('isLogin',1);
	setTimeout("alert(2)",5000);
}
function registerFail(){
	alert(3);
}
</script>