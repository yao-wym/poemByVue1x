require('./style.styl')

module.exports = {
  template: require('./template.html'),
  data:function () {
  	var listData = {test:1}
  	setTimeout(function(){
	listData.test = 2
	}, 5000);
    return listData
  },
  props: ['msg','iconLeft','iconRight']
} 