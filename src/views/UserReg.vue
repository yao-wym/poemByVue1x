<template>
	<div class="view" v-transition>
  <app-header title="注册"></app-header>
	<div style="margin-top:2rem;text-align:center" class="reg-container">
		<div class="poem-input-box">
			<div class="input-item">
        <div class="icon">
          <img src='../asset/images/phone-device.png'/>
          <label style="display:inline-block">手机号</label>
        </div>
				<input v-model="mobile" id="mobile" style="border:0;heigth:50px;display:inline-block;" placeholder='手机号'/>
				<button style="margin-top: -5px;border: none;padding: 5px 10px;color:#aaa;background-color: #eee;height:.6rem;font-size:.3rem;" @click="sendSms">发送验证码</button>
			</div>
			<div class="input-item">
        <div class="icon">
          <img src='../asset/images/lock-white.png'/>
  				<label v-model="validCode" id="valid-code" style="display:inline-block">验证码</label>
        </div>
        <input style=" display:inline-block;" placeholder='请填写验证码' />
			</div>
			<div class="input-item">
        <div class="icon">
  				<img src='../asset/images/lock-white.png'/>
  				<label style="display:inline-block">密码</label>
        </div>
        <input v-model="password" type="password" style="display:inline-block;" placeholder='请填写密码' />
			</div>
		</div>
		<div style="display: block;width: 80%;margin:0 auto">
			<div class="poem-btn-green" @click="register">注册</div>
			<span style="float: left;font-size:.3rem">
				<input type="checkbox" style="width:.3rem;height:.3rem" v-model="agreeCheck">
			我已阅读并同意诗画草原<a v-link="hostlist">《用户使用协议》</a></span>
		</div>
	</div>
</div>
</template>

<style lang="stylus">
.reg-container
  & .poem-input-box
    border:1px solid #ddd
    width:8rem
    border:none
  & .input-item
    display:flex
    align-items: center
    & .icon
      text-align:left
      width:2rem
      & img
        width:.35rem
        height:.35rem
    
</style>


<script>
module.exports = {
  	replace: true,
  	data:function(){
  		return {
  			mobile:'',
  			password:'',
  			validCode:'',
  			agreeCheck:'',
        random:''
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
        if(this.random != this.validCode){
          poemUI.toast('验证码错误');
          return;
        }
  			$.post(REG_API,{'username':this.mobile,'password':this.password,'password_confirm':this.password,'client':client,'invite_code':invite_code},'','json').done(this.regDone).fail(this.regFail);
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
  		sendSms:function(res){
  			var random = Math.floor(Math.random()*1000000);
  			$.post(SEND_SMS_API,{'mobile':this.mobile,'random_str':random},'','json').done(this.sendSmsDone).fail(this.sendSmsFail);
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