require('./style.styl');
module.exports = {
	template: require('./template.html'),
	replace: true,
	methods: {
		goNextStep: goNextStep
	},
	created: function() {
		this.$on('goNextStep', function(child) {
			location.href='#user-login'
		})
	},
	components: {
		'yellow-bottom': require('../../components/yellow-bottom'),
	}
}

function goNextStep() {
	alert(2);
	$.post(LOGIN_API).done(registerDone).fail(registerFail);
}