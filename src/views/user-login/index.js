require('./style.styl');
module.exports = {
  	template: require('./template.html'),
  	replace: true,
  	 methods: {
  	 	login:login
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