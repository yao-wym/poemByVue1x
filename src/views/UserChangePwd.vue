<template>
	<div class="flex-view" v-transition>
	<app-header title="修改密码"></app-header>
	<flex-scroll-view>
       <div style="margin-top:2rem;text-align:center" class="change-container">
		<div class="poem-input-box" style="padding:2px">
			<div class="input-item">
				<div class="icon-label">
					<img src='../asset/images/user-green.png' style="width:30px;height: 30px"/>
					<label style="width:1.5rem display:inline-block">手机号</label>
				</div>
				<div class="input-field">
					<input v-model="mobile" style="border:0;heigth:50px;display:inline-block;" placeholder='手机号'/>
				</div>
				<button id="timerBtn" style="min-width:150px;text-align: center;margin: 30px 5px 0 0;border: none;padding: 5px 10px;color:#aaa;background-color: #eee;height:.6rem;font-size:.3rem;" @click="sendSms">发送验证码</button>
				</div>
			<div class="input-item">
				<div class="icon-label">
					<img src='../asset/images/lock-white.png' style="width:30px;height: 30px"/>
					<label id="password" style="width:1.5rem display:inline-block">验证码</label>
				</div>
				<div class="input-field">
					<input v-model="validCode" style="width:7rem display:inline-block;" placeholder='请填写密码' />
				</div>
			</div>
			<div class="input-item">
				<div class="icon-label">
					<img src='../asset/images/lock-white.png' style="width:30px;height: 30px"/>
					<label id="password" style="width:1.5rem display:inline-block">新密码</label>
				</div>
				<div class="input-field">
					<input v-model="newPwd" type="password" style="width:7rem display:inline-block;" placeholder='请填写新密码' />
				</div>
			</div>
			<div class="input-item">
				<div class="icon-label">
					<img src='../asset/images/lock-white.png' style="width:30px;height: 30px"/>
					<label id="newPwd" style="width:1.5rem display:inline-block">确认</label>
				</div>
				<div class="input-field">
					<input v-model="confirmPwd" type="password" style="width:7rem display:inline-block;" placeholder='请确认新密码' />
				</div>
			</div>
		</div>
<!-- 		<div style="display: block;width: 80%;margin:0 auto">
			<div class="poem-btn-green" @click="login()">登陆</div>
			<a style="float: left">我已阅读xxx</a>
		</div> -->
	</div>
    </flex-scroll-view>
	<yellow-bottom @click="resetPwd">
		<span>确认</span>
	</yellow-bottom>
</div>
</template>

<style lang="stylus" scoped>
.change-container
	font-size:.5rem
	& .poem-input-box
		border:none
	& .input-item
		display:flex
		padding:2px
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
	data:{
		timerObj:'',
		mobile:'',
		random:'',
		validCode:'',
		newPwd:'',
		confirmPwd:'',
		timer:60
	},
	methods: {
		// goNextStep: goNextStep
		sendSms:function(res){
  			this.random = Math.floor(Math.random()*1000000);
  			if($.isEmpty(this.mobile)||this.mobile.length!=11){
  				poemUI.toast('手机号码格式错误');
  				return;
  			}
  			$.post(SEND_SMS_API,{'mobile':this.mobile,'random_str':this.random},'','json').done(this.sendSmsDone).fail(this.sendSmsFail);
  		},
  		sendSmsDone:function(res){
  			if(res.code==200){
  				poemUI.toast('短信已发送');
  				this.timer = 10;
  				this.timerObj = setInterval(this.timerFunc,1000)
  			}else{
  				poemUI.toast(res.datas);
  			}
  		},
  		timerFunc:function(){
  			this.timer--;
  			$("#timerBtn").text(this.timer+"s");
			if(this.timer == 0){
				$("#timerBtn").text("发送验证码");
				clearInterval(this.timerObj)
			}
  		},
  		sendSmsFail:function(){
  			poemUI.toast("发送失败");
  		},
  		resetPwd:function(){
  			if(this.random != this.validCode||$.isEmpty(this.random)){
  				poemUI.toast('验证码错误');
	          	return;
  			}
			if(this.newPwd != this.confirmPwd){
				poemUI.toast('密码确认错误');
	          	return;
			}
			$.poemPost(RESET_PWD_API,{username:this.mobile,new_password:this.newPwd}).done(this.resetDone);
  		},
  		resetDone:function(res){
  			if(res.error){
  				poemUI.toast(res.error);
  			}else{
  				poemUI.toast('修改成功');
  				history.go(-1);
  			}
  		}
	},
	ready: function() {
		this.$dispatch('pageLoaded');
	},
	components: {
		'yellow-bottom': require('../components/YellowBottom.vue'),
		'app-header': require('../components/CommonHeader.vue'),
		'flex-scroll-view': require('../components/FlexScrollView.vue'),
	},
	props:['title','leftLabel']
}
</script>