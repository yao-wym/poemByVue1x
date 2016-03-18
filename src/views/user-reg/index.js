require('./style.styl');
module.exports = {
  	template: require('./template.html'),
  	replace: true,
  	 methods: {
  	 	register:register
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