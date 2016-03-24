<template>
	<div class="view" v-transition>
	<div style="margin-top:2rem;text-align:center" class="login-container">
		<div class="poem-input-box">
			<div class="input-item">
				<img src='../asset/images/user-green.png' style="width:30px;height: 30px"/>
				<label style="width:1.5rem display:inline-block">手机号</label>
				<input v-model="mobile" id="mobile" style="width:5rem;border:0;heigth:50px;display:inline-block;" placeholder='手机号'/>
				<button style="" @click="sendSms">发送验证码</button>
			</div>
			<div>
				<img src='../asset/images/lock-white.png' style="width:30px;height: 30px"/>
				<label v-model="validCode" id="valid-code" style="width:1.5rem display:inline-block">验证码</label>
				<input style="width:7rem display:inline-block;" placeholder='请填写密码' />
			</div>
			<div>
				<img src='../asset/images/lock-white.png' style="width:30px;height: 30px"/>
				<label id="password" style="width:1.5rem display:inline-block">密码</label>
				<input v-model="password" style="width:7rem display:inline-block;" placeholder='请填写密码' />
			</div>
		</div>
		<div style="display: block;width: 80%;margin:0 auto">
			<div class="poem-btn-green" @click="register">注册</div>
			<span style="float: left;font-size:.3rem">
				<input type="checkbox" style="width:auto" v-model="agreeCheck">
			我已阅读并同意诗画草原<a v-link="hostlist">《用户使用协议》</a></span>
		</div>
	</div>
</div>
</template>

<style lang="stylus">

</style>


<script>
module.exports = {
  	replace: true,
  	data:function(){
  		return {
  			mobile:'',
  			password:'',
  			validCode:'',
  			agreeCheck:''
  		}
  	},
  	components:{
    	'app-header': require('../components/CommonHeader.vue'),
  	},
  	created:function(){

  	},
  	methods:{
  		register:function(){
  			var client = "ios"
  			var invite_code = "Mg==";
  			if(!this.agreeCheck){
  				poemUI.toast('请先同意使用协议');
  				return;
  			}
  			$.post(REG_API,{'username':this.mobile,'password':this.password,'password_confirm':this.password,'client':client,'invite_code':invite_code},'','json').done(this.regDone).fail(this.regFail);
  		},
  		sendSms:function(res){
  			var random = Math.floor(Math.random()*1000000);
  			$.post(SEND_SMS_API,{'mobile':this.mobile,'random_str':random},'','json').done(this.sendSmsDone).fail(this.sendSmsFail);
  		},
  		regDone:function(res){
  			if(res.code == 200){
  				if(res.datas.error){
  					poemUI.toast(res.datas.error)
  				}else{
  					localStorage.setItem('username',this.mobile);
  					localStorage.setItem('key',res.datas.key);
  					poemUI.toast('注册成功');
  					this.$route.router.go("/");
  				}
  			}
  		},
  		regFail:function(){

  		},
  		sendSmsDone:function(res){
  			if(res.code==200){
  				poemUI.toast('短信已发送');
  			}else{
  				poemUI.toast(res.datas);
  			}
  		},
  		sendSmsFail:function(){
  			poemUI.toast("发送失败");
  		}
  	},
  	props: ['title','leftLabel','rightLabel','leftLink','rightLink','leftIcon','rightIcon','search'],
  	ready:function(){
  		this.$dispatch('pageLoaded');
  		this.title="立即注册"
  	}
}
</script>