<template>
<div class="view" v-transition>
		<div style="margin-top:3rem;text-align:center" class="login-container">
		<div class="poem-input-box">
			<div class="input-item">
				<img src='../asset/images/user-green.png'/>
				<label style="font-size:.4rem;;width:1.5rem display:inline-block">账号</label>
				<input placeholder='手机号'/>
			</div>
			<div>
				<img src='../asset/images/lock-white.png'/>
				<label id="password" style="font-size:.4rem;width:1.5rem display:inline-block">密码</label>
				<input placeholder='请填写密码' />
			</div>
		</div>
		<div style="display: block;width: 80%;margin:1rem auto">
			<div class="poem-btn-green" @click="login()">登陆</div>
			<a href="#/user/findpwd" style="margin-top:0.5rem;float: left;color:green;font-size:.3rem">忘记密码?</a>
		</div>
	</div>
</div>
</template>

<style lang="stylus">
.login-container
	font-size:.5rem
	test(20,20)
	& input
		font-size:.4rem
		display:inline-block
		width:6.5rem
		height:.4rem
	& img
		width:.4rem
		height:.4rem
#password:before
	width:30px
#account:before
	width:30px
</style>


<script>
module.exports = {
  	replace: true,
  	data:function(){
  		return {

  		};
  	},
  	 methods: {
  	 	login:login
  	 },
  	 props:['rightLabel','rightLink'],
  	 created:function(){

  	 },
  	 ready:function(){
  	 	this.$dispatch('pageLoaded');
  	 	this.rightLabel = '注册';
  	 	this.rightLink = '#/user/reg'
  	 }
}
function login(){
	$.post(LOGIN_API).done(loginDone).fail(loginFail).done(function(){alert(4)});
}
function loginDone(){
	localStorage.setItem('isLogin',1);
	setTimeout("alert(2)",5000);
}
function loginFail(){
	alert(3);
}
</script>