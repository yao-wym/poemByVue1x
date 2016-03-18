require('./style.styl')

module.exports = {
	template: require('./template.html'),
	data:function () {
    return { test: 123 }
  },
	props: ['title','leftLabel','rightLabel']
} 