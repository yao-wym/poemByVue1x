require('./style.styl');

module.exports = {
	template: require('./template.html'),
	data:function () {
    // return { subtitle: 123 }
  	},
  	methods:{
  		goNextStep:function(){
  			this.$dispatch('goNextStep')
  		}
  	},
	props: ['subtitle','leftLabel','rightLabel']
} 